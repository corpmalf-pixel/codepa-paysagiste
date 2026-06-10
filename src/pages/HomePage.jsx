import { NavLink } from 'react-router-dom'
import NavHeader from '../components/NavHeader'

const projects = [
  {
    title: 'Jardins soignés',
    image: '/ChatGPT Image 1 juin 2026, 21_41_55.png',
    text: 'Des extérieurs propres, équilibrés et visuellement apaisants.',
  },
  {
    title: 'Taille et structure',
    image: '/coupe.png',
    text: 'Des lignes nettes pour redonner de la tenue et de l’élégance au jardin.',
  },
  {
    title: 'Entretien régulier',
    image: '/ChatGPT Image 1 juin 2026, 21_38_05.png',
    text: 'Un suivi simple et sérieux pour garder un extérieur toujours présentable.',
  },
  {
    title: 'Interventions maîtrisées',
    image: '/arbre couper.png',
    text: 'Des travaux réalisés avec soin pour sécuriser et remettre en valeur les espaces.',
  },
  {
    title: 'Ambiance naturelle',
    image: '/entretien jardin.png',
    text: 'Une approche visuelle qui met l’émotion et la propreté au premier plan.',
  },
  {
    title: 'Finitions propres',
    image: '/taille de haies.png',
    text: 'Le détail compte : un rendu net, lisible et rassurant.',
  },
]

export default function HomePage() {
  return (
    <main className="scroll-story-shell">
      <section className="page-shell home-page-shell scroll-panel hero-panel">
        <div className="page-bg home-page-bg" />
        <div className="page-overlay home-page-overlay" />
        <NavHeader className="page-header" ctaLabel="Prendre rendez-vous" ctaTo="/contact" />

        <section className="page-content page-grid hero-panel-content" style={{ gap: 40 }}>
          <div className="home-hero-top">
            <div className="home-hero-copy-block">
              <p className="kicker">CODEPA PAYSAGISTE</p>
              <h1 className="hero-title">Des extérieurs beaux,<br />calmes et soignés,<br />en toute <em>simplicité.</em></h1>
              <div className="hero-line" />
              <div className="cta-row home-cta-row">
                <a className="primary-btn home-hero-cta" href="#realisations">Découvrir les réalisations <span>→</span></a>
                <NavLink className="secondary-btn" to="/contact">Prendre rendez-vous</NavLink>
              </div>
            </div>
          </div>

          <div className="scroll-cue-wrap">
            <a href="#realisations" className="scroll-cue">
              <span className="scroll-cue-label">Scroller</span>
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
            <h2 className="hero-title reveal-title">Des images pour ressentir<br />la qualité avant même de <em>lire.</em></h2>
            <div className="hero-line" />
            <p className="hero-copy">
              Une transition pensée pour donner l’impression que l’univers visuel apparaît du centre,
              puis prend toute la place.
            </p>
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
        </section>
      </section>
    </main>
  )
}
