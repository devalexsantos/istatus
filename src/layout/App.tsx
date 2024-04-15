import { Outlet } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'

export function AppLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  )
}