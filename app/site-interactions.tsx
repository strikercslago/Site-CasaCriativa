'use client';

import { useEffect, useState } from 'react';
import { ResponsiveImage } from './components/responsive-image';

const navigation = [
  ['A Casa', '#casa'],
  ['Aulas & Oficinas', '#experiencias'],
  ['Galeria', '#galeria'],
  ['Colônia de Férias', '#agenda'],
  ['Contato', '#contato'],
];

export function MotionController() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const desktopMotion = window.matchMedia('(min-width: 801px)');
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal], [data-stagger]'),
    );

    if (reduceMotion.matches || !('IntersectionObserver' in window)) {
      revealElements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    );

    revealElements.forEach((element) => observer.observe(element));
    root.classList.add('motion-ready');

    const parallaxElements = desktopMotion.matches
      ? Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'))
      : [];
    let frame = 0;

    const updateParallax = () => {
      frame = 0;
      const viewportCenter = window.innerHeight / 2;
      parallaxElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;
        const distance = (rect.top + rect.height / 2 - viewportCenter) / window.innerHeight;
        const offset = Math.max(-18, Math.min(18, distance * -18));
        element.style.setProperty('--parallax-y', `${offset.toFixed(2)}px`);
      });
    };

    const scheduleParallax = () => {
      if (!frame) frame = window.requestAnimationFrame(updateParallax);
    };

    if (parallaxElements.length) {
      updateParallax();
      window.addEventListener('scroll', scheduleParallax, { passive: true });
      window.addEventListener('resize', scheduleParallax);
    }

    return () => {
      observer.disconnect();
      root.classList.remove('motion-ready');
      window.removeEventListener('scroll', scheduleParallax);
      window.removeEventListener('resize', scheduleParallax);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let frame = 0;
    const updateHeader = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40);
        frame = 0;
      });
    };
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateHeader);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeWithEscape);
    return () => window.removeEventListener('keydown', closeWithEscape);
  }, []);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <a className="brand" href="#inicio" aria-label="Casa Criativa — início">
        <ResponsiveImage preset="brand" className="brand-logo" src="/images/brand/casa-criativa-logo.png" alt="Casa Criativa" width={1080} height={1350} preload sizes="80px" />
      </a>
      <nav className="desktop-nav" aria-label="Navegação principal">
        {navigation.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
      </nav>
      <a className="header-cta" href="#contato" aria-label="Fale conosco"><span className="header-cta-label">Fale conosco</span><span aria-hidden="true">↗</span></a>
      <button className={`menu-toggle${menuOpen ? ' is-open' : ''}`} type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((value) => !value)}>
        <i /><i />
      </button>
      <nav className={`mobile-navigation${menuOpen ? ' is-open' : ''}`} id="mobile-navigation" aria-label="Navegação mobile">
        {navigation.map(([label, href]) => <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}<span>↗</span></a>)}
      </nav>
    </header>
  );
}

type FAQItem = { question: string; answer: string };

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openItem, setOpenItem] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const open = openItem === index;
        const panelId = `faq-panel-${index}`;
        return (
          <article className={open ? 'is-open' : ''} key={item.question}>
            <button type="button" aria-expanded={open} aria-controls={panelId} onClick={() => setOpenItem(open ? null : index)}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{item.question}</strong>
              <i aria-hidden="true" />
            </button>
            <div className="faq-answer" id={panelId} aria-hidden={!open}>
              <div className="faq-answer-inner"><p>{item.answer}</p><a href="#contato" tabIndex={open ? 0 : -1}>Falar com a Casa Criativa <span>↗</span></a></div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
