import { Outlet } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import { HeaderBar } from './components/HeaderBar'

export function AppLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <HeaderBar />
        <main className="flex-1 container p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
