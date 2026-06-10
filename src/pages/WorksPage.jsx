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

export default function WorksPage() {
  return (
    <main className="page-shell">
      <div className="page-bg" />
      <div className="page-overlay" />
      <NavHeader className="page-header" ctaLabel="Prendre rendez-vous" ctaTo="/contact" />

      <section className="page-content page-grid" style={{ gap: 32 }}>
        <div>
          <p className="kicker">RÉALISATIONS</p>
          <h1 className="hero-title">Des images pour ressentir<br />la qualité avant même de <em>lire.</em></h1>
          <div className="hero-line" />
          <p className="hero-copy">
            Cette page doit surtout faire passer une impression : soin, goût du détail, propreté et confiance.
          </p>
        </div>

        <div className="page-grid three-col">
          {projects.map((project) => (
            <article className="glass-card padded" key={project.title}>
              <img src={project.image} alt={project.title} className="service-image big-image-real" />
              <h3>{project.title}</h3>
              <p className="muted">{project.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
