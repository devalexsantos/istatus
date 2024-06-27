import { menu } from '@/data/menu'
import { Settings } from 'lucide-react'
import { useLocation } from 'react-router-dom'

export function Sidebar() {
  const { pathname } = useLocation()

  return (
    <div className="w-full min-h-screen max-w-[287px] p-8 hidden md:flex flex-col gap-6 border-r">
      <span className="font-bold italic text-xl w-full px-4">iStatus</span>
      <nav className="flex flex-1 h-full flex-col gap-2">
        {menu.map(
          ({ icon: Icon, label, path, showOnMenu }, index) =>
            showOnMenu && (
              <a
                key={index}
                href={path}
                className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                  path === pathname
                    ? 'bg-gray-200 text-gray-900'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                {Icon && <Icon size="22" />}
                <span>{label}</span>
              </a>
            ),
        )}
      </nav>
      <span className="flex gap-2 items-center px-4 text-sm font-semibold">
        <Settings size="22" /> Settings
      </span>
    </div>
  )
}
