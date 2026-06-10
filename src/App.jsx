import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import WorksPage from './pages/WorksPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/accueil" replace />} />
      <Route path="/accueil" element={<HomePage />} />
      <Route path="/nos-realisations" element={<WorksPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<Navigate to="/accueil" replace />} />
    </Routes>
  )
}
