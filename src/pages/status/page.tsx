import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Paginate } from '@/layout/components/Paginate'
import { PlusCircle, Search } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function Status() {
  return (
    <div className="flex flex-col">
      <div className="hidden md:flex gap-2 items-center">
        <span className="text-sm">Filtros:</span>
        <Input placeholder="Nome do status" className="max-w-[300px] h-8" />
        <Input placeholder="Categoria" className="max-w-[300px] h-8" />
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Search size={18} />
          Buscar
        </Button>
        <Button size="sm" className="flex items-center gap-2">
          <PlusCircle size={18} />
          Adicionar
        </Button>
      </div>
      <span className="mt-8 mb-2 text-xs text-muted-foreground">
        Resultado (26):
      </span>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Items</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 10 }).map((_, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
                Em preparação adquirida
              </TableCell>
              <TableCell className="text-xs">Login Informática</TableCell>
              <TableCell className="text-xs text-muted-foreground">
                03
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-start mt-8">
        <Paginate />
      </div>
    </div>
  )
}
