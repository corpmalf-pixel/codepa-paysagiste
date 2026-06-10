import { NavLink } from 'react-router-dom'
import logoAubert from '../assets/logo-aubert.svg'

const items = [
  ['Accueil', '/accueil'],
  ['Réalisations', '/nos-realisations'],
  ['Contact', '/contact'],
]

export default function NavHeader({ className = '', ctaLabel = 'Prendre rendez-vous', ctaTo = '/contact', showLogo = true }) {
  return (
    <header className={className}>
      <div />

      <div className="nav-shell">
        <nav className="site-nav">
          {items.map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>

      {ctaLabel ? <NavLink to={ctaTo} className="top-cta">{ctaLabel} <span>→</span></NavLink> : <div />}
    </header>
  )
}
