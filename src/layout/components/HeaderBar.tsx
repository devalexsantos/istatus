import { Button } from '@/components/ui/button'

export function HeaderBar() {
  return (
    <header className="border-b px-4 py-2 flex justify-between items-center">
      <span>Dashboard</span>
      <Button>Logout</Button>
    </header>
  )
}
