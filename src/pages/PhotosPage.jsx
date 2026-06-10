import NavHeader from '../components/NavHeader'

const photos = [
  '/entretien jardin.png',
  '/élagage des arbres.png',
  '/taille de haies.png',
  '/tonte herbes.png',
  '/désherbage.png',
  '/fleur.png',
  '/arbre couper.png',
  '/coupe.png',
]

export default function PhotosPage() {
  return (
    <main className="page-shell">
      <div className="page-bg" />
      <div className="page-overlay" />
      <NavHeader className="page-header" />

      <section className="page-content page-grid" style={{ gap: 32 }}>
        <div>
          <p className="kicker">GALERIE PHOTO</p>
          <h1 className="hero-title">Un aperçu visuel<br />du travail <em>réalisé.</em></h1>
          <div className="hero-line" />
          <p className="hero-copy">
            Cette galerie pose une première base crédible. Elle pourra être remplacée ensuite par des photos
            clients, avant/après et chantiers réels.
          </p>
        </div>

        <div className="page-grid four-col">
          {photos.map((src, index) => (
            <article className="glass-card padded" key={`${src}-${index}`}>
              <img src={src} alt={`Réalisation Aubert Espace Vert ${index + 1}`} className="service-image big-image-real photo-card-image" />
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
