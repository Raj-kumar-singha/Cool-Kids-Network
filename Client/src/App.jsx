import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage'
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './utils/protectedRoutes';
import MaintainerProtectedRoute from './utils/maintainerRoutes';
import MaintainerLogin from './pages/MaintainerLogin';
import MaintainerDashboard from './pages/MaintainerDashboard';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
      <Route path="/maintainer-dashboard" element={<MaintainerProtectedRoute element={<MaintainerDashboard />} />} />
      <Route path="/maintainer-login" element={<MaintainerLogin />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
