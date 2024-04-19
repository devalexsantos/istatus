import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Paginate } from '@/layout/components/Paginate'
import { PlusCircle, Search } from 'lucide-react'

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
      <div className="flex items-center gap-3 flex-wrap">
        {Array.from({ length: 50 }).map((_, index) => (
          <div
            key={index}
            className="w-full max-w-[250px] flex items-center justify-between border px-4 py-2"
          >
            <span className="flex items-center gap-1 text-sm">
              <div className="w-[10px] h-[10px] rounded-full bg-yellow-500" />
              Em andamento
            </span>
            <span className="text-xs text-muted-foreground">12</span>
          </div>
        ))}
      </div>
      <div className="flex justify-start mt-8">
        <Paginate />
      </div>
    </div>
  )
}
