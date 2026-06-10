import NavHeader from '../components/NavHeader'

const schedule = [
  ['Lundi - Vendredi', '8h00 - 18h00'],
  ['Samedi', '8h00 - 12h30'],
  ['Dimanche', 'Fermé'],
]

export default function HoursPage() {
  return (
    <main className="page-shell">
      <div className="page-bg" />
      <div className="page-overlay" />
      <NavHeader className="page-header" />

      <section className="page-content page-grid two-col">
        <div>
          <p className="kicker">NOS HORAIRES</p>
          <h1 className="hero-title">Des créneaux simples<br />pour organiser vos <em>interventions.</em></h1>
          <div className="hero-line" />
          <p className="hero-copy">
            Nous restons disponibles en semaine et le samedi matin pour faciliter les échanges,
            les demandes de devis et la planification des travaux.
          </p>
        </div>

        <div className="glass-card padded">
          <h3>Horaires d’ouverture</h3>
          <div className="list-rows">
            {schedule.map(([day, hours]) => (
              <div className="row-item" key={day}>
                <div className="icon-dot">◷</div>
                <div>
                  <strong>{day}</strong>
                  <span className="muted">{hours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
