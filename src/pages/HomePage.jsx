import { NavLink } from 'react-router-dom'
import NavHeader from '../components/NavHeader'

const proofItems = [
  ['4,9/5 sur 210 avis', 'Une réputation solide et régulière'],
  ['Devis & déplacement gratuits', 'Aucun frais pour démarrer'],
  ['Paiement en plusieurs fois', 'Une solution plus souple'],
  ['Assurance professionnelle', 'Interventions couvertes et rassurantes'],
]

const serviceHighlights = [
  'Entretien régulier de jardins',
  'Taille de haies et arbustes',
  'Élagage et coupe d’arbres',
  'Tonte, désherbage et plantations',
]

export default function HomePage() {
  return (
    <main className="page-shell home-page-shell">
      <div className="page-bg home-page-bg" />
      <div className="page-overlay home-page-overlay" />
      <NavHeader className="page-header" ctaLabel="Demander un devis" />

      <section className="page-content home-page-content page-grid" style={{ gap: 44 }}>
        <div className="home-hero-top">
          <div className="home-hero-copy-block">
            <p className="kicker">ENTRETIEN • ÉLAGAGE • AMÉNAGEMENT</p>
            <h1 className="hero-title">Des extérieurs propres,<br />fiables et bien suivis,<br />toute <em>l’année.</em></h1>
            <div className="hero-line" />
            <p className="hero-copy">
              Aubert Espace Vert accompagne particuliers et professionnels pour l’entretien,
              la remise en état et l’aménagement de jardins soignés, pratiques et durables.
            </p>
            <div className="cta-row home-cta-row">
              <NavLink className="primary-btn home-hero-cta" to="/reservation">Demander un devis gratuit <span>→</span></NavLink>
              <NavLink className="secondary-btn" to="/services">Voir nos prestations</NavLink>
            </div>
          </div>
        </div>

        <div className="proof-grid">
          {proofItems.map(([title, subtitle]) => (
            <article className="proof-item" key={title}>
              <strong>{title}</strong>
              <span>{subtitle}</span>
            </article>
          ))}
        </div>

        <section className="page-grid two-col home-split-section">
          <article className="glass-card padded">
            <p className="section-label">POURQUOI NOUS CHOISIR</p>
            <h2 className="section-title">Une entreprise familiale réactive, sérieuse et claire.</h2>
            <p className="muted section-copy">
              Depuis plusieurs décennies, Aubert Espace Vert intervient avec une logique simple :
              arriver vite, travailler proprement, proposer le juste prix et laisser un extérieur net.
            </p>
            <div className="list-rows compact-list" style={{ marginTop: 16 }}>
              {[
                'Interventions régulières ou ponctuelles',
                'Conseils adaptés à votre terrain',
                'Suivi propre et respectueux des lieux',
                'Prise de rendez-vous rapide',
              ].map((item) => (
                <div className="row-item compact-row" key={item}>
                  <div className="icon-dot">✓</div>
                  <div><span className="muted" style={{ marginTop: 0 }}>{item}</span></div>
                </div>
              ))}
            </div>
          </article>

          <article className="glass-card padded">
            <p className="section-label">PRESTATIONS CLÉS</p>
            <h2 className="section-title">Les services les plus demandés.</h2>
            <div className="page-grid" style={{ gap: 12, marginTop: 18 }}>
              {serviceHighlights.map((item) => (
                <div className="feature-strip" key={item}>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
            <div className="cta-row" style={{ marginTop: 22 }}>
              <NavLink className="secondary-btn" to="/nos-realisations">Voir nos réalisations</NavLink>
            </div>
          </article>
        </section>

        <section className="glass-card padded page-grid two-col home-final-cta">
          <div>
            <p className="section-label">DEVIS GRATUIT</p>
            <h2 className="section-title">Un besoin d’entretien, de taille ou d’élagage ?</h2>
            <p className="muted section-copy">
              Expliquez votre besoin en quelques lignes. Nous revenons rapidement vers vous avec une proposition claire.
            </p>
          </div>
          <div className="home-final-cta-actions">
            <a className="primary-btn" href="tel:0626677270">Appeler maintenant <span>→</span></a>
            <NavLink className="secondary-btn" to="/contact">Voir les coordonnées</NavLink>
          </div>
        </section>
      </section>
    </main>
  )
}
