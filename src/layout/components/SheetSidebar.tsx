import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { menu } from '@/data/menu'
import { Menu, Settings } from 'lucide-react'
import { useLocation } from 'react-router-dom'

export function SheetSidebar() {
  const { pathname } = useLocation()

  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="w-full h-full min-h-screen flex flex-col gap-6">
          <span className="font-bold italic text-xl w-full px-4">iStatus</span>
          <nav className="flex flex-1 flex-col gap-2">
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
      </SheetContent>
    </Sheet>
  )
}
