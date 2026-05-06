import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PassportPage from './pages/PassportPage'
import PassportDetailsPage from './pages/PassportDetailsPage'

export default function App() {
  return (
    <div className="app-root">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/passport" element={<PassportPage />} />
        <Route path="/passport/details" element={<PassportDetailsPage />} />
      </Routes>
    </div>
  )
}
