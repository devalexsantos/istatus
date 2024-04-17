import { Clipboard, Home, LayoutList, Settings, Workflow } from 'lucide-react'
import { useLocation } from 'react-router-dom'

export function Sidebar() {
  const { pathname } = useLocation()

  const menu = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: Clipboard, label: 'Tasks', path: '/tasks' },
    { icon: LayoutList, label: 'Categories', path: '/categories' },
    { icon: Workflow, label: 'Status', path: '/status' },
  ]

  return (
    <div className="w-full h-full min-h-screen max-w-[287px] p-8 hidden md:flex flex-col gap-6 border-r">
      <span className="font-bold italic text-xl w-full px-4">iStatus</span>
      <nav className="flex flex-1 flex-col gap-2">
        {menu.map(({ icon: Icon, label, path }, index) => (
          <a
            key={index}
            href={path}
            className={`flex gap-2 items-center w-full py-2 px-4 rounded-md text-sm hover:bg-zinc-50 ${pathname === path && 'text-primary font-semibold bg-zinc-50'}`}
          >
            <Icon size="18" strokeWidth={1.8} /> {label}
          </a>
        ))}
      </nav>
      <span className="flex gap-2 items-center px-4 text-sm font-semibold">
        <Settings size="22" /> Settings
      </span>
    </div>
  )
}
