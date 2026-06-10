import { NavLink } from 'react-router-dom'
import NavHeader from '../components/NavHeader'

const projects = [
  {
    title: 'Jardins soignés',
    image: '/1.1.png',
    text: 'Des extérieurs propres, équilibrés et visuellement apaisants.',
  },
  {
    title: 'Taille et structure',
    image: '/2.2.png',
    text: 'Des lignes nettes pour redonner de la tenue et de l’élégance au jardin.',
  },
  {
    title: 'Entretien régulier',
    image: '/3.3.png',
    text: 'Un suivi simple et sérieux pour garder un extérieur toujours présentable.',
  },
  {
    title: 'Interventions maîtrisées',
    image: '/4.4.png',
    text: 'Des travaux réalisés avec soin pour sécuriser et remettre en valeur les espaces.',
  },
  {
    title: 'Ambiance naturelle',
    image: '/5.5.png',
    text: 'Une approche visuelle qui met l’émotion et la propreté au premier plan.',
  },
  {
    title: 'Finitions propres',
    image: '/6.6.png',
    text: 'Le détail compte : un rendu net, lisible et rassurant.',
  },
]

const infos = [
  ['Téléphone', '06 26 67 72 70'],
  ['Email', 'contact@codepa-paysagiste.fr'],
  ['Zone d’intervention', 'À préciser'],
]

const proofs = [
  'Prise de rendez-vous rapide',
  'Réponse simple',
  'Contact direct',
]

export default function HomePage() {
  return (
    <main className="scroll-story-shell">
      <section className="page-shell home-page-shell scroll-panel hero-panel">
        <div className="page-bg home-page-bg" />
        <div className="page-overlay home-page-overlay" />
        <NavHeader className="page-header" ctaLabel="Prendre rendez-vous" ctaTo="#contact-panel" />

        <section className="page-content page-grid hero-panel-content" style={{ gap: 40 }}>
          <p className="kicker hero-corner-kicker">CODEPA PAYSAGISTE</p>

          <div className="home-hero-top">
            <div className="home-hero-copy-block">
              <h1 className="hero-title">L'art de vivre<br />commence dans votre <em>jardin.</em></h1>
              <div className="hero-line" />
              <div className="cta-row home-cta-row">
                <a className="primary-btn home-hero-cta" href="#realisations">Découvrir les réalisations <span>→</span></a>
                <a className="secondary-btn" href="#contact-panel">Transformer mon extérieur</a>
              </div>
            </div>
          </div>

          <div className="scroll-cue-wrap">
            <a href="#realisations" className="scroll-cue">
              <span className="scroll-cue-line" />
            </a>
          </div>
        </section>
      </section>

      <section id="realisations" className="page-shell reveal-panel works-panel">
        <div className="page-bg" />
        <div className="page-overlay" />

        <section className="page-content page-grid reveal-panel-content" style={{ gap: 32 }}>
          <div className="reveal-panel-intro">
            <p className="kicker">RÉALISATIONS</p>
            <h2 className="hero-title reveal-title">Et si le prochain projet<br />était le vôtre&nbsp;?</h2>
            <div className="hero-line" />
          </div>

          <div className="page-grid three-col reveal-grid">
            {projects.map((project) => (
              <article className="glass-card padded reveal-card" key={project.title}>
                <img src={project.image} alt={project.title} className="service-image big-image-real" />
                <h3>{project.title}</h3>
                <p className="muted">{project.text}</p>
              </article>
            ))}
          </div>

          <div className="scroll-cue-wrap scroll-cue-wrap-bottom">
            <a href="#contact-panel" className="scroll-cue">
              <span className="scroll-cue-label">Continuer</span>
              <span className="scroll-cue-line" />
            </a>
          </div>
        </section>
      </section>

      <section id="contact-panel" className="page-shell contact-page-shell reveal-panel contact-reveal-panel">
        <div className="page-bg contact-page-bg" />
        <div className="page-overlay contact-page-overlay" />

        <section className="page-content page-grid two-col reveal-panel-content" style={{ gap: 32 }}>
          <div className="reveal-panel-intro">
            <p className="kicker">CONTACT</p>
            <h2 className="hero-title reveal-title">Prendre contact<br />doit être simple et <em>immédiat.</em></h2>
            <div className="hero-line" />
            <div className="list-rows" style={{ marginTop: 28 }}>
              {infos.map(([label, value]) => (
                <div className="row-item" key={label}>
                  <div className="icon-dot">◌</div>
                  <div>
                    <strong>{label}</strong>
                    <span className="muted">{value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="home-final-cta-actions" style={{ marginTop: 28 }}>
              <a className="primary-btn" href="tel:0626677270">Appeler maintenant <span>→</span></a>
              <a className="secondary-btn" href="mailto:contact@codepa-paysagiste.fr">Envoyer un email</a>
            </div>
          </div>

          <div className="page-grid reveal-grid">
            <div className="glass-card padded">
              <div className="proof-grid proof-grid-compact">
                {proofs.map((item) => (
                  <article className="proof-item proof-item-compact" key={item}>
                    <strong>{item}</strong>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}
