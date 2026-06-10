import { NavLink } from 'react-router-dom'
import NavHeader from '../components/NavHeader'

const services = [
  'Aménagement extérieur',
  'Entretien de jardin',
  'Taille et élagage',
]

export default function HomePage() {
  return (
    <main className="page-shell home-page-shell">
      <div className="page-bg home-page-bg" />
      <div className="page-overlay home-page-overlay" />
      <NavHeader className="page-header" ctaLabel="Prendre rendez-vous" ctaTo="/contact" />

      <section className="page-content page-grid" style={{ gap: 40 }}>
        <div className="home-hero-top">
          <div className="home-hero-copy-block">
            <p className="kicker">CODEPA PAYSAGISTE</p>
            <h1 className="hero-title">Des extérieurs beaux,<br />calmes et soignés,<br />en toute <em>simplicité.</em></h1>
            <div className="hero-line" />
            <p className="hero-copy">
              Un site pensé pour aller à l’essentiel : de belles réalisations,
              peu de friction, et une prise de rendez-vous rapide.
            </p>
            <div className="cta-row home-cta-row">
              <NavLink className="primary-btn home-hero-cta" to="/contact">Prendre rendez-vous <span>→</span></NavLink>
              <NavLink className="secondary-btn" to="/nos-realisations">Voir les réalisations</NavLink>
            </div>
          </div>
        </div>

        <section className="page-grid home-split-section">
          <article className="glass-card padded">
            <p className="section-label">L’ESSENTIEL</p>
            <h2 className="section-title">Un paysagiste qui mise sur la qualité visuelle et la facilité de contact.</h2>
            <p className="muted section-copy">
              Ici, pas de surcharge. Le site doit transmettre une impression de soin,
              de confiance et de fluidité, avec juste ce qu’il faut pour donner envie de prendre contact.
            </p>
            <div className="page-grid" style={{ gap: 12, marginTop: 18 }}>
              {services.map((item) => (
                <div className="feature-strip" key={item}>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </article>
        </section>
      </section>
    </main>
  )
}
