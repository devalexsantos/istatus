import { createBrowserRouter } from 'react-router-dom'
import { Dashboard } from './pages/dashboard/page'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
])
