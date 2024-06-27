import { Clipboard, Home, LayoutList, Workflow } from 'lucide-react'

export const menu = [
  { icon: Home, label: 'Dashboard', path: '/', showOnMenu: true },
  { icon: Clipboard, label: 'Items', path: '/items', showOnMenu: true },
  {
    icon: LayoutList,
    label: 'Categories',
    path: '/categories',
    showOnMenu: true,
  },
  { icon: Workflow, label: 'Status', path: '/status', showOnMenu: true },
  { icon: null, label: 'New Item', path: '/new-item', showOnMenu: false },
]
