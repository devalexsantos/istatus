import { Button } from '@/components/ui/button'
import { SheetSidebar } from './SheetSidebar'
import { menu } from '@/data/menu'
import { useLocation } from 'react-router-dom'

export function HeaderBar() {
  const { pathname } = useLocation()
  const menuData = menu.filter((menuItem) => menuItem.path === pathname)
  return (
    <header className="border-b px-4 py-2 flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <SheetSidebar />
        <span>{menuData[0].label}</span>
      </div>
      <Button>Logout</Button>
    </header>
  )
}
