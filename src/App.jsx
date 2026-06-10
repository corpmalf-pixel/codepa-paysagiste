import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import WorksPage from './pages/WorksPage'
import HoursPage from './pages/HoursPage'
import QuotePage from './pages/QuotePage'
import PhotosPage from './pages/PhotosPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/accueil" replace />} />
      <Route path="/accueil" element={<HomePage />} />
      <Route path="/a-propos" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/nos-realisations" element={<WorksPage />} />
      <Route path="/horaires" element={<HoursPage />} />
      <Route path="/reservation" element={<QuotePage />} />
      <Route path="/photos" element={<PhotosPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}
