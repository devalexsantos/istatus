import { Input } from '@/components/ui/input'
import Item from '@/layout/components/Item'
import { Paginate } from '@/layout/components/Paginate'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'

export function Items() {
  return (
    <div className="flex flex-col gap-8">
      <div className="hidden md:flex gap-2 items-center">
        <span className="text-sm">Filtros:</span>
        <Input placeholder="Nome do item" className="max-w-[300px] h-8" />
        <Input placeholder="Categoria" className="max-w-[300px] h-8" />
        <Select>
          <SelectTrigger className="h-8 max-w-[250px]">
            <SelectValue placeholder="All Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="01">Em andamento</SelectItem>
            <SelectItem value="02">Completo</SelectItem>
            <SelectItem value="03">Testando</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Search size={12} />
          Buscar
        </Button>
      </div>
      <div className="flex flex-1 items-center gap-3 flex-wrap justify-center md:justify-normal">
        {Array.from({ length: 12 }).map((_, index) => (
          <Item key={index} />
        ))}
      </div>
      <div className="flex justify-start">
        <Paginate />
      </div>
    </div>
  )
}
