import { createBrowserRouter } from 'react-router-dom'
import { Dashboard } from './pages/dashboard/page'
import { AppLayout } from './layout/App'
import { Items } from './pages/items/page'
import { Status } from './pages/status/page'
import { NewItems } from './pages/new-item/page'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/items',
        element: <Items />,
      },
      {
        path: '/new-item',
        element: <NewItems />,
      },
      {
        path: '/status',
        element: <Status />,
      },
    ],
  },
])
