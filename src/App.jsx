import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/login'
import './App.css'
import DashboardPage from './pages/dashboard'
import PrivateRoutes from './utils/privateRoutes'
import ClubPage from './pages/club'
import EditClubPage from './pages/update'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<DashboardPage />} path='/' />
            <Route element={<ClubPage />} path='/club' />
            <Route element={<EditClubPage />} path='/update/:id/:myId' />
          </Route>
          <Route element={<LoginPage />} path='/login' />
        </Routes>
      </Router>
    </div>
  )
}

export default App
