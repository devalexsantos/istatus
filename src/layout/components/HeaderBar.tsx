import { Button } from '@/components/ui/button'
import { SheetSidebar } from './SheetSidebar'

export function HeaderBar() {
  return (
    <header className="border-b px-4 py-2 flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <SheetSidebar />
        <span>Dashboard</span>
      </div>
      <Button>Logout</Button>
    </header>
  )
}
