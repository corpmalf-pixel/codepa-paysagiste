import NavHeader from '../components/NavHeader'

const projects = [
  {
    title: 'Abattage et mise en sécurité',
    image: '/arbre couper.png',
    text: 'Intervention propre pour sécuriser l’espace et retirer un arbre devenu gênant ou fragile.',
  },
  {
    title: 'Taille nette et structurée',
    image: '/coupe.png',
    text: 'Remise en forme d’arbustes et végétaux pour retrouver une lecture plus propre du jardin.',
  },
  {
    title: 'Entretien soigné des extérieurs',
    image: '/ChatGPT Image 1 juin 2026, 21_38_05.png',
    text: 'Nettoyage, coupe et finitions pour redonner de la tenue à l’ensemble du terrain.',
  },
  {
    title: 'Mise en valeur du jardin',
    image: '/ChatGPT Image 1 juin 2026, 21_41_55.png',
    text: 'Nouvelle photo ajoutée à la galerie pour enrichir la présentation des réalisations.',
  },
]

export default function WorksPage() {
  return (
    <main className="page-shell">
      <div className="page-bg" />
      <div className="page-overlay" />
      <NavHeader className="page-header" />

      <section className="page-content page-grid" style={{ gap: 32 }}>
        <div>
          <p className="kicker">NOS RÉALISATIONS</p>
          <h1 className="hero-title">Quelques exemples<br />de travaux <em>réalisés.</em></h1>
          <div className="hero-line" />
          <p className="hero-copy">
            Une première sélection visuelle pour montrer le type d’interventions réalisées.
            Cette section pourra ensuite être enrichie avec davantage de photos terrain.
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
