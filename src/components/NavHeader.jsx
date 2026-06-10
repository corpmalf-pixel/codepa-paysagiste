import { NavLink } from 'react-router-dom'

const items = [
  ['Accueil', '/accueil'],
  ['Réalisations', '#realisations'],
  ['Contact', '/contact'],
]

export default function NavHeader({ className = '', ctaLabel = '', ctaTo = '/contact' }) {
  return (
    <header className={className}>
      <div />

      <nav className="site-nav site-nav-pills">
        {items.map(([label, to]) => (
          to.startsWith('#') ? (
            <a key={to} href={to} className="nav-pill">{label}</a>
          ) : (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `nav-pill${isActive ? ' active' : ''}`}
            >
              {label}
            </NavLink>
          )
        ))}
      </nav>

      {ctaLabel ? <NavLink to={ctaTo} className="top-cta">{ctaLabel} <span>→</span></NavLink> : <div />}
    </header>
  )
}
