import { ResponsiveImage } from './components/responsive-image';
import { siteImages, type SiteImage } from './site-images';
import { FAQAccordion, MotionController, SiteHeader } from './site-interactions';

const featuredExperiences = [
  {
    number: '01',
    title: 'Desenho & Pintura',
    copy: 'Cores, formas, composição e diferentes técnicas para transformar ideias em imagens.',
    image: siteImages.experiences.drawing,
    tone: 'cyan',
  },
  {
    number: '02',
    title: 'Modelagem & Cerâmica Fria',
    copy: 'Experiências tridimensionais para criar objetos, personagens e peças autorais.',
    image: siteImages.experiences.ceramics,
    tone: 'yellow',
  },
  {
    number: '03',
    title: 'Projetos Criativos',
    copy: 'Papel, papelão, tecidos, elementos naturais e diferentes materiais se transformam em novas criações.',
    image: siteImages.experiences.projects,
    tone: 'pink',
  },
];

const complementaryExperiences = [
  ['04', 'Oficinas Especiais', 'Experiências temáticas para conhecer novas técnicas e produzir projetos diferentes.'],
  ['05', 'Colônia de Férias', 'Dias de criatividade, convivência, descoberta e muita arte.'],
  ['06', 'Jovens & Adultos', 'Porque criatividade não tem idade — sempre existe uma nova técnica para aprender e uma ideia para tirar do papel.'],
];

const audiences = [
  {
    label: 'Crianças',
    title: 'Um mundo inteiro para descobrir.',
    copy: 'Contato com materiais, cores, formas e técnicas em atividades que valorizam a experimentação, a curiosidade e a criatividade.',
    image: siteImages.audiences.children,
  },
  {
    label: 'Jovens',
    title: 'Da curiosidade à identidade artística.',
    copy: 'Mais técnica, novas referências e liberdade para desenvolver repertório, habilidades e um jeito próprio de criar.',
    image: siteImages.audiences.youth,
  },
  {
    label: 'Adultos',
    title: 'Criar também é uma forma de sair da rotina.',
    copy: 'Um espaço para aprender, experimentar materiais e reservar um tempo para fazer algo com as próprias mãos.',
    image: siteImages.audiences.adults,
  },
];

const journey = [
  ['01', 'Descobrir', 'Conhecer uma referência, uma técnica ou um novo material.'],
  ['02', 'Experimentar', 'Testar possibilidades e entender como aquilo funciona.'],
  ['03', 'Criar', 'Usar o aprendizado para produzir algo próprio.'],
  ['04', 'Compartilhar', 'Ver aquilo que nasceu de uma ideia finalmente ganhar forma.'],
];

const activities = [
  { title: 'Colônia de férias', copy: 'Dias inteiros de arte e convivência' },
  { title: 'Oficinas especiais', copy: 'Novas técnicas e projetos temáticos' },
  { title: 'Projetos temáticos', copy: 'Ideias que acompanham cada época do ano' },
  { title: 'Experiências sazonais', copy: 'Uma agenda que muda e surpreende' },
];

// Respostas específicas de idade, materiais, horários e endereço aguardam confirmação.
const faqQuestions = [
  { question: 'Qual idade pode participar?', answer: 'As faixas etárias de cada turma serão publicadas após confirmação. Fale com a Casa Criativa para encontrar a opção adequada.' },
  { question: 'Existem turmas para adultos?', answer: 'Sim. A Casa Criativa oferece possibilidades para crianças, jovens e adultos.' },
  { question: 'Precisa saber desenhar para começar?', answer: 'A proposta valoriza experimentar, descobrir e criar. Fale com a Casa Criativa para encontrar a turma mais adequada para começar.' },
  { question: 'Os materiais estão incluídos?', answer: 'Essa informação varia conforme a atividade e aguarda confirmação. Consulte a Casa Criativa antes da inscrição.' },
  { question: 'Como funcionam os horários das turmas?', answer: 'Os horários disponíveis serão informados diretamente pela Casa Criativa.' },
  { question: 'É possível conhecer o espaço antes?', answer: 'Fale com a Casa Criativa para combinar uma visita e conhecer o ateliê.' },
  { question: 'Como faço para matricular meu filho?', answer: 'Entre em contato para conhecer as turmas disponíveis e receber as orientações de matrícula.' },
  { question: 'Onde fica a Casa Criativa?', answer: 'A Casa Criativa fica em Passo Fundo/RS. O endereço completo será publicado após confirmação.' },
];

const imageFocus = (image: SiteImage) => image.focus;

export default function Home() {
  return (
    <main>
      <MotionController />
      <SiteHeader />

      <section className="hero" id="inicio" data-parallax>
        <ResponsiveImage className="hero-image" preset={siteImages.hero.preset} src={siteImages.hero.src} alt={siteImages.hero.alt} fill preload sizes="100vw" />
        <div className="hero-shade" />
        <div className="hero-content shell">
          <p className="eyebrow light">Ateliê de arte · Passo Fundo/RS</p>
          <h1>Um lugar onde a <em>criatividade</em> ganha vida.</h1>
          <p className="hero-copy">Aulas e experiências artísticas para crianças, jovens e adultos desenvolverem criatividade, técnica e imaginação enquanto descobrem novas formas de se expressar.</p>
          <div className="hero-actions">
            <a className="button primary" href="#experiencias">Quero conhecer as turmas <span>→</span></a>
            <a className="text-link light" href="#casa">Conhecer a Casa Criativa <span>↓</span></a>
          </div>
        </div>
        <p className="hero-tag">Arte que transforma.</p>
      </section>

      <section className="manifesto section-pad" id="casa">
        <div className="shell manifesto-grid" data-reveal="fade-up">
          <div className="manifesto-image" data-motion-image>
            <ResponsiveImage preset={siteImages.manifesto.preset} focus={siteImages.manifesto.focus} src={siteImages.manifesto.src} alt={siteImages.manifesto.alt} fill sizes="(max-width: 700px) 38vw, 24vw" />
          </div>
          <div className="manifesto-copy" data-motion-copy>
            <p className="eyebrow">Manifesto</p>
            <h2>Aqui, cada ideia pode virar <em>alguma coisa.</em></h2>
            <p className="manifesto-list">Uma pintura. Uma escultura. Uma história.<br />Um personagem. Uma nova habilidade.</p>
            <p>Na Casa Criativa, aprender arte é experimentar, descobrir e criar com as próprias mãos.</p>
          </div>
          <span className="loop-mark" aria-hidden="true" />
        </div>
      </section>

      <section className="value section-pad">
        <div className="shell value-grid">
          <div className="value-intro" data-reveal="fade-up">
            <p className="eyebrow">Arte que transforma</p>
            <h2>Muito mais do que aprender a desenhar.</h2>
            <p>Cada atividade é uma oportunidade de experimentar materiais, conhecer novas técnicas, desenvolver o olhar e transformar uma ideia em algo que antes existia apenas na imaginação.</p>
            <p>Na Casa Criativa, o processo importa tanto quanto o resultado.</p>
          </div>
          <ol className="value-words" aria-label="Pilares da experiência" data-stagger>
            <li><span>01</span><strong>Criatividade</strong><p>Explorar ideias e encontrar novas possibilidades.</p></li>
            <li><span>02</span><strong>Técnica</strong><p>Conhecer materiais, ferramentas e diferentes formas de criar.</p></li>
            <li><span>03</span><strong>Expressão</strong><p>Ter liberdade para colocar personalidade em cada trabalho.</p></li>
            <li><span>04</span><strong>Experimentação</strong><p>Pintar, desenhar, modelar, construir, recortar, testar e descobrir.</p></li>
          </ol>
        </div>
      </section>

      <section className="experiences section-pad" id="experiencias">
        <div className="shell section-heading" data-reveal="fade-up">
          <p className="eyebrow">Aulas &amp; oficinas</p>
          <h2>O que se vive na<br /><em>Casa Criativa</em></h2>
          <p>Uma programação feita de cores, materiais, técnicas e projetos que convidam cada aluno a experimentar novas formas de criar.</p>
        </div>
        <div className="shell experience-list">
          {featuredExperiences.map((item, index) => (
            <article className={`experience ${index % 2 ? 'reverse' : ''}`} key={item.title} data-reveal={index % 2 ? 'from-right' : 'from-left'}>
              <div className={`experience-photo${index === 2 ? ' experience-photo--craft' : ''}`}>
                <ResponsiveImage preset={item.image.preset} focus={item.image.focus} src={item.image.src} alt={item.image.alt} fill sizes="(max-width: 800px) 100vw, 58vw" />
              </div>
              <div className={`experience-copy ${item.tone}`}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <a href="#contato" className="arrow-link" aria-label={`Conhecer turmas de ${item.title}`}>Conhecer turmas <b>↗</b></a>
              </div>
            </article>
          ))}
        </div>
        <div className="shell complementary-list" data-stagger>
          {complementaryExperiences.map(([number, title, copy]) => (
            <article key={title}>
              <span>{number}</span><h3>{title}</h3><p>{copy}</p><a href="#contato" aria-label={`Saber mais sobre ${title}`}>↗</a>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery section-pad" id="galeria">
        <div className="shell gallery-head" data-reveal="fade-up">
          <div>
            <p className="eyebrow">Galeria de processos</p>
            <h2>Quando a imaginação encontra espaço, <em>olha o que acontece.</em></h2>
          </div>
          <div>
            <p>Cada trabalho conta um pouco do processo: uma ideia, um material, algumas tentativas e a alegria de ver algo ganhar forma.</p>
            <p className="made-here">Criado aqui. Pensado, experimentado e feito com as próprias mãos.</p>
          </div>
        </div>
        <div className="shell art-grid" data-stagger>
          <figure className="art art-a"><ResponsiveImage preset={siteImages.gallery[0].preset} focus={imageFocus(siteImages.gallery[0])} src={siteImages.gallery[0].src} alt={siteImages.gallery[0].alt} fill sizes="(max-width: 700px) 60vw, 32vw" /><figcaption>Projeto autoral</figcaption></figure>
          <figure className="art art-b"><ResponsiveImage preset={siteImages.gallery[1].preset} focus={imageFocus(siteImages.gallery[1])} src={siteImages.gallery[1].src} alt={siteImages.gallery[1].alt} fill sizes="(max-width: 700px) 45vw, 24vw" /><figcaption>Modelagem</figcaption></figure>
          <figure className="art art-c"><ResponsiveImage preset={siteImages.gallery[2].preset} focus={imageFocus(siteImages.gallery[2])} src={siteImages.gallery[2].src} alt={siteImages.gallery[2].alt} fill sizes="(max-width: 700px) 100vw, 42vw" /><figcaption>Experimentação</figcaption></figure>
          <figure className="art art-d"><ResponsiveImage preset={siteImages.gallery[3].preset} focus={imageFocus(siteImages.gallery[3])} src={siteImages.gallery[3].src} alt={siteImages.gallery[3].alt} fill sizes="(max-width: 700px) 46vw, 22vw" /><figcaption>Arte em cada detalhe</figcaption></figure>
          <figure className="art art-e"><ResponsiveImage preset={siteImages.gallery[4].preset} focus={imageFocus(siteImages.gallery[4])} src={siteImages.gallery[4].src} alt={siteImages.gallery[4].alt} fill sizes="(max-width: 700px) 50vw, 28vw" /><figcaption>Criação em grupo</figcaption></figure>
        </div>
        <div className="shell gallery-action"><a className="button outline" href="#instagram">Ver mais criações <span>→</span></a></div>
      </section>

      <section className="audiences section-pad">
        <div className="shell section-heading compact" data-reveal="fade-up">
          <p className="eyebrow">Para todos</p>
          <h2>Para cada fase,<br />uma forma de <em>criar.</em></h2>
        </div>
        <div className="shell audience-grid" data-stagger>
          {audiences.map((item) => (
            <article key={item.label}>
              <div className="audience-photo"><ResponsiveImage preset={item.image.preset} focus={item.image.focus} src={item.image.src} alt={item.image.alt} fill sizes="(max-width: 760px) 100vw, 33vw" /></div>
              <p className="audience-label">{item.label}</p>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="journey section-pad">
        <div className="shell journey-head" data-reveal="fade-up">
          <p className="eyebrow light">Experiência de aprendizagem</p>
          <h2>Aqui, criar faz parte do <em>aprendizado.</em></h2>
        </div>
        <ol className="shell journey-steps" data-stagger>
          {journey.map(([number, title, copy]) => (
            <li key={title}><span>{number}</span><h3>{title}</h3><p>{copy}</p></li>
          ))}
        </ol>
      </section>

      <section className="founder section-pad">
        <div className="shell founder-grid">
          <div className="founder-photo" data-reveal="image"><ResponsiveImage preset={siteImages.founder.preset} focus={siteImages.founder.focus} src={siteImages.founder.src} alt={siteImages.founder.alt} fill sizes="(max-width: 780px) 100vw, 48vw" /></div>
          <div className="founder-copy" data-reveal="fade-up">
            <p className="eyebrow">A pessoa por trás da Casa</p>
            <h2>Uma vida cercada por arte, criatividade e pessoas.</h2>
            <blockquote>“Antes de existir a Casa Criativa, já existia uma vontade: criar um lugar onde pessoas pudessem experimentar a arte sem medo de errar...”</blockquote>
            <a className="text-link" href="#contato">Conhecer a Casa <span>→</span></a>
          </div>
        </div>
      </section>

      <section className="social-proof section-pad" aria-labelledby="social-proof-title">
        <div className="shell social-proof-grid" data-stagger>
          <p className="quote-mark" aria-hidden="true">“</p>
          <div className="social-proof-copy">
            <p className="eyebrow">Experiências reais</p>
            <h2 id="social-proof-title">Quem passa pela Casa Criativa leva mais do que o trabalho que criou.</h2>
            <p>Experiências reais, histórias reais e criações que carregam a personalidade de quem fez.</p>
          </div>
          <div className="social-proof-image"><ResponsiveImage preset={siteImages.testimonial.preset} focus={siteImages.testimonial.focus} src={siteImages.testimonial.src} alt={siteImages.testimonial.alt} fill sizes="(max-width: 760px) 80vw, 24vw" /></div>
        </div>
      </section>

      <section className="agenda section-pad" id="agenda">
        <div className="shell agenda-grid">
          <div className="agenda-intro" data-reveal="fade-up">
            <p className="eyebrow">Agenda viva</p>
            <h2>Tem sempre alguma coisa nova sendo criada por aqui.</h2>
            <p>Colônia de férias, oficinas especiais, projetos temáticos e experiências que mudam ao longo do ano.</p>
            <a className="button dark" href="#contato">Ver próximas atividades <span>→</span></a>
          </div>
          <ol className="activity-list" data-stagger>
            {activities.map((activity, index) => (
              <li key={activity.title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{activity.title}</h3><p>{activity.copy}</p></div><a href="#contato" aria-label={`Consultar ${activity.title}`}>↗</a></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="instagram section-pad" id="instagram">
        <div className="shell instagram-head" data-reveal="fade-up">
          <div><p className="eyebrow">Bastidores</p><h2>Um pouquinho do que acontece por aqui todos os dias.</h2></div>
          <div><p>Processos, bastidores, trabalhos, oficinas e muita criatividade acontecendo de verdade.</p><a className="text-link" href="https://www.instagram.com/casa_criativa_pf/" target="_blank" rel="noreferrer">@casa_criativa_pf <span>↗</span></a></div>
        </div>
        <div className="instagram-strip" data-stagger>
          {siteImages.instagram.map((image, index) => (
            <a href="https://www.instagram.com/casa_criativa_pf/" target="_blank" rel="noreferrer" key={image.src} className={`insta-${index + 1}`} aria-label="Abrir Instagram da Casa Criativa">
              <ResponsiveImage preset={image.preset} focus={image.focus} src={image.src} alt={image.alt} fill sizes="(max-width: 700px) 72vw, 31vw" />
            </a>
          ))}
        </div>
      </section>

      <section className="faq section-pad" aria-labelledby="faq-title">
        <div className="shell faq-grid">
          <div className="faq-heading" data-reveal="fade-up"><p className="eyebrow">Antes de começar</p><h2 id="faq-title">Dúvidas frequentes</h2><p>Para informações confirmadas sobre turmas e inscrições, fale diretamente com a Casa Criativa.</p></div>
          <div data-reveal="fade"><FAQAccordion items={faqQuestions} /></div>
        </div>
      </section>

      <section className="final-cta" id="contato" data-parallax>
        <ResponsiveImage preset={siteImages.finalCTA.preset} focus={siteImages.finalCTA.focus} src={siteImages.finalCTA.src} alt={siteImages.finalCTA.alt} fill sizes="100vw" />
        <div className="final-shade" />
        <div className="shell final-content" data-reveal="fade-up">
          <p className="eyebrow light">Sua primeira criação começa aqui</p>
          <h2>Toda grande criação começa com uma primeira tentativa.</h2>
          <p>Venha conhecer a Casa Criativa e encontre uma turma para você ou para o seu filho.</p>
          <a className="button primary" href="https://www.instagram.com/casa_criativa_pf/" target="_blank" rel="noreferrer">Quero conhecer a Casa Criativa <span>↗</span></a>
        </div>
      </section>

      <footer className="footer" data-reveal="fade">
        <div className="shell footer-grid">
          <div>
            <a className="brand footer-brand" href="#inicio" aria-label="Casa Criativa — início"><ResponsiveImage preset="brand" className="brand-logo" src="/images/brand/casa-criativa-logo.png" alt="Casa Criativa" width={1080} height={1350} sizes="96px" /></a>
            <p>Um espaço para criar, experimentar e desenvolver criatividade, técnica e imaginação através da arte.</p>
          </div>
          <nav aria-label="Navegação do rodapé"><p className="footer-label">Explore</p><a href="#casa">A Casa</a><a href="#experiencias">Aulas &amp; Oficinas</a><a href="#galeria">Galeria</a><a href="#agenda">Colônia de Férias</a></nav>
          <div><p className="footer-label">Onde estamos</p><p>Passo Fundo/RS</p><a href="https://www.instagram.com/casa_criativa_pf/" target="_blank" rel="noreferrer">Instagram ↗</a></div>
          <div><p className="footer-label">Turmas e horários</p><p>Fale com a Casa Criativa para conhecer as opções disponíveis.</p><a href="https://www.instagram.com/casa_criativa_pf/" target="_blank" rel="noreferrer">Entrar em contato ↗</a></div>
        </div>
        <div className="shell footer-bottom"><p>Casa Criativa · Ateliê de Arte</p><p>Arte que transforma.</p></div>
      </footer>
    </main>
  );
}
