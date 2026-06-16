import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginTurista from './pages/turista/LoginTurista'
import LoginEmpresa from './pages/empresa/LoginEmpresa'
import Recuperacao from './pages/Recuperacao'
import HomePage from './pages/HomePage'
import Dashboard from './pages/empresa/DashboardPage.jsx'
import './i18n.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"                   element={<HomePage />} />
        <Route path="/turista"            element={<LoginTurista />} />
        <Route path="/empresa"            element={<LoginEmpresa />} />
        <Route path="/recuperacao"        element={<Recuperacao />} />
        <Route path="/dashboard"          element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App