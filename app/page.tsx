const projects = [
  {
    index: "01",
    title: "Calculadora de Rentabilidade",
    description: "Aplicativo em Flutter para analisar rendimento de carcaças, custo real por corte, margens, perdas e rentabilidade operacional.",
    tech: ["Flutter", "Dart", "Análise de dados"],
    url: "https://github.com/iBabity/calculadora_rentabilidade",
    featured: true,
  },
  {
    index: "02",
    title: "Site Expositório",
    description: "Experiência web para estética e biomedicina com autenticação local, protocolos em destaque e agendamento de avaliações.",
    tech: ["JavaScript", "CSS", "LocalStorage"],
    url: "https://github.com/iBabity/Site-Expositorio",
    featured: false,
  },
  {
    index: "03",
    title: "API de Bolsas de Estudo",
    description: "Backend para consulta de ofertas com filtros, busca, ordenação, paginação e seleção de propriedades.",
    tech: ["Node.js", "Express", "JSON"],
    url: "https://github.com/iBabity/DesafioDeBackEnd-QueroEducacao",
    featured: false,
  },
];

const experience = [
  { date: "2025 — agora", role: "Analista de Sistemas", company: "Monalisa Sistemas", text: "Análise de sistemas, suporte técnico, treinamentos, novas funcionalidades e otimização de bancos de dados." },
  { date: "2024 — 2025", role: "Analista de Suporte Jr.", company: "Neo Company", text: "Suporte a clientes, infraestrutura de software, manutenção e atendimento remoto." },
  { date: "2021 — 2024", role: "Técnico de TI", company: "Sphere International School", text: "Suporte a usuários, redes LAN/WAN, manutenção, inventário e implantação de equipamentos." },
];

export default function Home() {
  return <main>
    <nav className="nav">
      <a className="logo" href="#top" aria-label="Início">ECN<span>/</span></a>
      <div className="navLinks"><a href="#projetos">Projetos</a><a href="#experiencia">Experiência</a><a href="#contato">Contato</a></div>
      <a className="navCta" href="https://github.com/iBabity" target="_blank" rel="noreferrer">GitHub ↗</a>
    </nav>

    <section className="hero" id="top">
      <div className="availability"><span /> Disponível para oportunidades</div>
      <div className="heroGrid">
        <div><p className="overline">&gt; ANALISTA_DE_SISTEMAS</p><h1>Eder<br />Cipriano<br /><em>Neto.</em></h1></div>
        <div className="heroAside">
          <div className="codeCard"><div className="codeTop"><span /><span /><span /></div><code>
            <i>const</i> profissional = {"{"}<br />
            &nbsp;&nbsp;foco: [<b>&quot;Sistemas&quot;</b>, <b>&quot;Dados&quot;</b>],<br />
            &nbsp;&nbsp;skills: [<b>&quot;ERP&quot;</b>, <b>&quot;Suporte&quot;</b>],<br />
            &nbsp;&nbsp;status: <b>&quot;Construindo soluções&quot;</b><br />
            {"}"};
          </code></div>
          <p>Transformo desafios técnicos em soluções eficientes, integrando sistemas, dados e infraestrutura.</p>
          <div className="heroActions"><a href="#projetos">Ver projetos ↓</a><a href="https://www.linkedin.com/in/ibabityy/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
        </div>
      </div>
      <div className="heroFooter"><span>Hortolândia · SP</span><span>29 anos</span><span>ADS · 2025</span></div>
    </section>

    <section className="projects" id="projetos">
      <div className="sectionHead"><div><span className="sectionNumber">01 / PORTFÓLIO</span><h2>Projetos que transformam<br />problemas em <em>produto.</em></h2></div><p>Uma seleção de aplicações e estudos publicados no meu GitHub.</p></div>
      <div className="projectGrid">{projects.map(project => <a className={"projectCard" + (project.featured ? " featured" : "")} href={project.url} target="_blank" rel="noreferrer" key={project.title}>
        <div className="projectTop"><span>{project.index}</span><span>Ver repositório ↗</span></div>
        <div><h3>{project.title}</h3><p>{project.description}</p></div>
        <div className="techList">{project.tech.map(item => <span key={item}>{item}</span>)}</div>
      </a>)}</div>
      <a className="allProjects" href="https://github.com/iBabity?tab=repositories" target="_blank" rel="noreferrer">Explorar todos os 7 repositórios <span>↗</span></a>
    </section>

    <section className="experience" id="experiencia">
      <div className="sectionHead light"><div><span className="sectionNumber">02 / TRAJETÓRIA</span><h2>Experiência que conecta<br />tecnologia e <em>pessoas.</em></h2></div></div>
      <div className="timeline">{experience.map(item => <article key={item.company}><span className="date">{item.date}</span><div><h3>{item.role}</h3><strong>{item.company}</strong></div><p>{item.text}</p></article>)}</div>
    </section>

    <section className="skills">
      <span className="sectionNumber">03 / STACK & COMPETÊNCIAS</span>
      <div className="skillMarquee"><span>Sistemas & ERP</span><i>•</i><span>Banco de dados</span><i>•</i><span>Node.js</span><i>•</i><span>Flutter</span><i>•</i><span>Redes</span><i>•</i><span>Inteligência Artificial</span></div>
    </section>

    <footer id="contato">
      <span className="sectionNumber">04 / CONTATO</span>
      <h2>Vamos construir<br /><em>algo relevante?</em></h2>
      <div className="contactRow"><a href="mailto:eder.cipriano97@gmail.com">eder.cipriano97@gmail.com ↗</a><a href="tel:+5519978096565">(19) 97809-6565</a></div>
      <div className="footerBottom"><span>© 2026 Eder Cipriano Neto</span><div><a href="https://github.com/iBabity" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/ibabityy/" target="_blank" rel="noreferrer">LinkedIn</a></div><a href="#top">Voltar ao topo ↑</a></div>
    </footer>
  </main>;
}

