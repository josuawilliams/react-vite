import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoutes() {
  const auth = localStorage.getItem('token')
  if (!auth || auth === 'undefined') {
    return <Navigate to={'/login'} />
  } else {
    return <Outlet />
  }
}

export default PrivateRoutes
