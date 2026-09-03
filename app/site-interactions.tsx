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

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 40);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
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
            <div className="faq-answer" id={panelId} hidden={!open}><p>{item.answer}</p><a href="#contato">Falar com a Casa Criativa <span>↗</span></a></div>
          </article>
        );
      })}
    </div>
  );
}
