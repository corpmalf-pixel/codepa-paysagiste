import { NavLink } from 'react-router-dom'
import NavHeader from '../components/NavHeader'

const promises = [
  'Réponse rapide',
  'Rendez-vous simple à planifier',
  'Interventions soignées',
]

const services = [
  'Aménagement extérieur',
  'Entretien de jardin',
  'Taille et élagage',
]

const visuals = [
  '/ChatGPT Image 1 juin 2026, 21_41_55.png',
  '/ChatGPT Image 1 juin 2026, 21_38_05.png',
  '/coupe.png',
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

        <div className="proof-grid proof-grid-compact">
          {promises.map((item) => (
            <article className="proof-item proof-item-compact" key={item}>
              <strong>{item}</strong>
            </article>
          ))}
        </div>

        <section className="page-grid two-col home-split-section">
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

          <article className="glass-card padded">
            <p className="section-label">PRISE DE RDV</p>
            <h2 className="section-title">Le bon réflexe doit être immédiat.</h2>
            <p className="muted section-copy">
              Un visiteur doit comprendre vite, ressentir la qualité, puis pouvoir appeler ou écrire sans effort.
            </p>
            <div className="home-final-cta-actions" style={{ marginTop: 22 }}>
              <a className="primary-btn" href="tel:0626677270">Appeler maintenant <span>→</span></a>
              <NavLink className="secondary-btn" to="/contact">Voir les coordonnées</NavLink>
            </div>
          </article>
        </section>

        <section className="page-grid three-col">
          {visuals.map((image, index) => (
            <article className="glass-card padded" key={image}>
              <img src={image} alt={`Ambiance extérieure ${index + 1}`} className="service-image big-image-real" />
            </article>
          ))}
        </section>
      </section>
    </main>
  )
}
