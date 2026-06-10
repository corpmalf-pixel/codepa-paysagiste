import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import WorksPage from './pages/WorksPage'
import QuotePage from './pages/QuotePage'
import PhotosPage from './pages/PhotosPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/accueil" replace />} />
      <Route path="/accueil" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/nos-realisations" element={<WorksPage />} />
      <Route path="/reservation" element={<QuotePage />} />
      <Route path="/photos" element={<PhotosPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}
