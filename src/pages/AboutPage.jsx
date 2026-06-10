import NavHeader from '../components/NavHeader'

const timeline = [
  ['1989', 'Création de l’entreprise familiale'],
  ['2005', 'Transmission et continuité de l’exigence terrain'],
  ["Aujourd’hui", 'Une activité reconnue pour sa réactivité et son sérieux'],
]

const values = [
  ['Proximité', 'Un contact direct, simple et humain du premier appel à l’intervention.'],
  ['Fiabilité', 'Des rendez-vous tenus, des explications claires et un travail suivi.'],
  ['Qualité de service', 'Un résultat propre, durable et cohérent avec votre extérieur.'],
]

export default function AboutPage() {
  return (
    <main className="page-shell about-page-shell">
      <div className="page-bg about-page-bg" />
      <div className="page-overlay about-page-overlay" />
      <NavHeader className="page-header" />

      <section className="page-content page-grid" style={{ gap: 32 }}>
        <div>
          <p className="kicker">NOTRE HISTOIRE</p>
          <h1 className="hero-title">Une entreprise familiale<br />ancrée dans le terrain<br />depuis plus de <em>30 ans.</em></h1>
          <div className="hero-line" />
          <p className="hero-copy">
            Aubert Espace Vert accompagne ses clients avec une approche de proximité, un bon sens terrain
            et une exigence constante sur la qualité d’exécution. L’objectif n’a pas changé : intervenir proprement,
            conseiller utilement et maintenir des extérieurs agréables à vivre.
          </p>
        </div>

        <div className="glass-card timeline-card">
          <div className="page-grid three-col timeline-grid">
            {timeline.map(([year, text]) => (
              <article className="timeline-item" key={year}>
                <strong>{year}</strong>
                <span className="muted">{text}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="page-grid three-col values-grid">
          {values.map(([title, text]) => (
            <article className="glass-card values-card values-item" key={title}>
              <strong>{title}</strong>
              <span className="muted">{text}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
