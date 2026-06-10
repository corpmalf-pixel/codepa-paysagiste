import NavHeader from '../components/NavHeader'

const services = [
  {
    name: 'Entretien de jardin',
    title: 'Entretien de jardin',
    text: 'Tonte, nettoyage, entretien régulier et soin général de vos extérieurs pour garder un jardin net toute l’année.',
    image: '/entretien jardin.png',
  },
  {
    name: 'Élagage des arbres',
    title: 'Élagage des arbres',
    text: 'Taille raisonnée, sécurisation et entretien des arbres pour préserver l’équilibre de vos espaces.',
    image: '/élagage des arbres.png',
  },
  {
    name: 'Taille de haies',
    title: 'Taille de haies',
    text: 'Une coupe précise pour conserver des haies denses, propres, structurées et agréables visuellement.',
    image: '/taille de haies.png',
  },
  {
    name: 'Tonte de pelouse',
    title: 'Tonte de pelouse',
    text: 'Un gazon entretenu régulièrement, avec une finition propre et un résultat homogène.',
    image: '/tonte herbes.png',
  },
  {
    name: 'Désherbage',
    title: 'Désherbage',
    text: 'Suppression des mauvaises herbes dans les allées, massifs et abords pour un rendu plus propre et durable.',
    image: '/désherbage.png',
  },
  {
    name: 'Plantation de fleurs et d’arbustes',
    title: 'Plantation de fleurs et d’arbustes',
    text: 'Mise en place de végétaux adaptés pour composer un extérieur vivant, équilibré et facile à entretenir.',
    image: '/fleur.png',
  },
]

export default function ServicesPage() {
  return (
    <main className="page-shell">
      <div className="page-bg" />
      <div className="page-overlay" />
      <NavHeader className="page-header" />

      <section className="page-content page-grid" style={{ gap: 32 }}>
        <div>
          <p className="kicker">NOS SERVICES</p>
          <h1 className="hero-title">Des prestations claires<br />pour des extérieurs <em>soignés.</em></h1>
          <div className="hero-line" />
          <p className="hero-copy">
            Aubert Espace Vert intervient pour l’entretien courant, les tailles, l’élagage,
            le nettoyage et les plantations avec une logique simple : efficacité, propreté et régularité.
          </p>
        </div>

        <div className="page-grid two-col">
          {services.map((service) => (
            <article className="glass-card padded" key={service.name}>
              <img src={service.image} alt={service.name} className="service-image" />
              <h3>{service.title}</h3>
              <p className="muted">{service.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
