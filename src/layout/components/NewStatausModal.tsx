import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { PlusCircle } from 'lucide-react'
import { useState } from 'react'
import { ChromePicker } from 'react-color'

export function NewStatusModal() {
  const [color, setColor] = useState('#000000')

  function handleChangeColor(color: string) {
    setColor(color)
  }

  return (
    <Dialog>
      <DialogTrigger>
        <Button size="sm" className="flex items-center gap-2">
          <PlusCircle size={18} />
          Adicionar
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Criar novo status</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Crie um novo status para suas tarefas
        </DialogDescription>
        <div className="flex flex-col gap-4 justify-center items-center">
          <Input type="text" placeholder="Nome do status" />
          <Select>
            <SelectTrigger className="h-8">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="01">Login Informática</SelectItem>
              <SelectItem value="02">Cast Group</SelectItem>
              <SelectItem value="03">ETCWEB</SelectItem>
            </SelectContent>
          </Select>
          <ChromePicker
            color={color}
            onChangeComplete={(e) => handleChangeColor(e.hex)}
          />
          <Button className="w-full flex itesm-center gap-2">
            <PlusCircle size={22} />
            Criar status
          </Button>
          <DialogClose asChild>
            <Button variant="ghost" className="w-full">
              Fechar
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  )
}
