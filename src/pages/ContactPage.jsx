import NavHeader from '../components/NavHeader'

const infos = [
  ['Téléphone', '06 26 67 72 70'],
  ['Email', 'aubertteddy613@gmail.com'],
  ['Adresse', '12 Rue de la Bastide, 95800 Cergy'],
  ['Facebook', 'facebook.com/aubertespacevert'],
]

const proofs = [
  'Devis et déplacement gratuits',
  'Réponse rapide',
  'Travail soigné',
  'Service toute l’année',
]

export default function ContactPage() {
  return (
    <main className="page-shell">
      <div className="page-bg" />
      <div className="page-overlay" />
      <NavHeader className="page-header" />

      <section className="page-content page-grid two-col">
        <div>
          <p className="kicker">CONTACT</p>
          <h1 className="hero-title">Un besoin ?<br />On vous répond de façon <em>simple.</em></h1>
          <div className="hero-line" />
          <p className="hero-copy">
            Pour une demande de devis, une question ou une prise de rendez-vous,
            vous pouvez nous joindre directement par téléphone, email ou via Facebook.
          </p>
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
        </div>

        <div className="page-grid">
          <div className="glass-card padded">
            <div className="map-box map-embed-shell">
              <iframe
                title="Aubert Espace Vert - Google Maps"
                src="https://www.google.com/maps?q=12%20Rue%20de%20la%20Bastide%2C%2095800%20Cergy&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="map-embed"
              />
            </div>
          </div>
          <div className="proof-grid proof-grid-compact">
            {proofs.map((item) => (
              <article className="proof-item proof-item-compact" key={item}>
                <strong>{item}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
