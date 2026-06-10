import { NavLink } from 'react-router-dom'
import NavHeader from '../components/NavHeader'

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

      </section>
    </main>
  )
}
