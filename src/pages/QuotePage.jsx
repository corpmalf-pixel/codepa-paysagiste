import NavHeader from '../components/NavHeader'

export default function QuotePage() {
  return (
    <main className="page-shell">
      <div className="page-bg" />
      <div className="page-overlay" />
      <NavHeader className="page-header" ctaLabel="Voir le contact" ctaTo="/contact" />

      <section className="page-content page-grid two-col">
        <div>
          <p className="kicker">DEMANDE DE DEVIS GRATUIT</p>
          <h1 className="hero-title">Parlez-nous de votre projet,<br />on vous répond <em>rapidement.</em></h1>
          <div className="hero-line" />
          <p className="hero-copy">
            Décrivez votre besoin, la zone concernée et le type d’intervention souhaité.
            Cette demande peut servir de base pour un futur branchement vers email, WhatsApp ou CRM.
          </p>
          <div className="proof-grid proof-grid-compact">
            {[
              'Devis gratuit',
              'Déplacement gratuit',
              'Réponse rapide',
              'Paiement possible en plusieurs fois',
            ].map((item) => (
              <article className="proof-item proof-item-compact" key={item}>
                <strong>{item}</strong>
              </article>
            ))}
          </div>
        </div>

        <form className="glass-card padded page-grid">
          <div className="form-grid">
            <input className="field" placeholder="Nom complet" />
            <input className="field" placeholder="Email" />
            <input className="field" placeholder="Téléphone" />
            <input className="field" placeholder="Ville / code postal" />
          </div>
          <select className="select" defaultValue="">
            <option value="" disabled>Type de projet</option>
            <option>Entretien de jardin</option>
            <option>Taille de haies</option>
            <option>Élagage</option>
            <option>Désherbage</option>
            <option>Plantations</option>
            <option>Autre demande</option>
          </select>
          <select className="select" defaultValue="">
            <option value="" disabled>Budget estimatif</option>
            <option>Moins de 500 €</option>
            <option>500 € à 1 500 €</option>
            <option>1 500 € à 3 000 €</option>
            <option>3 000 € et plus</option>
          </select>
          <textarea className="textarea" placeholder="Décrivez votre projet" />
          <button type="button" className="primary-btn">Envoyer ma demande <span>→</span></button>
        </form>
      </section>
    </main>
  )
}
