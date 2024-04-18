import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { CheckCircle, Edit, Link2, Send } from 'lucide-react'
import { Switch } from '@/components/ui/switch'
import { useState } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function Item() {
  const [publicItem, setPublicItem] = useState(true)

  const handlePublic = (publicItem: boolean) => {
    setPublicItem(publicItem)
  }

  return (
    <Dialog>
      <DialogTrigger>
        <Card className="w-full max-w-[300px]">
          <CardHeader>
            <CardTitle className="text-xl flex flex-col gap-2">
              <div className="flex justify-between gap-3">
                <span className="text-xs text-muted-foreground font-light">
                  há 03 dias
                </span>
                <span className="text-xs text-muted-foreground">
                  Em andamento
                </span>
              </div>
              <span className="truncate">
                Card Title Card Title Card Title Card TitleCard Title
              </span>
            </CardTitle>
            <CardDescription className="text-left">
              Card Description
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <span className="text-xs text-muted-foreground truncate">
              Login Informática
            </span>
          </CardFooter>
        </Card>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-col gap-4">
          <DialogTitle className="flex justify-between gap-3 items-start">
            <div className="flex flex-col gap-1">
              <span className="truncate text-left">
                Criar tabela no Oracle DB
              </span>
              <span className="text-sm font-bold text-muted-foreground text-left">
                Cast Group
              </span>
            </div>
            <div className="flex items-center gap-3 pr-6">
              <Edit
                size={22}
                className="text-muted-foreground hover:text-primary cursor-pointer"
              />
              <Switch
                className="h-6"
                checked={publicItem}
                onCheckedChange={() => handlePublic(!publicItem)}
              />
              {publicItem && (
                <Link2
                  size={22}
                  className="text-muted-foreground hover:text-primary cursor-pointer"
                />
              )}
            </div>
          </DialogTitle>
          <DialogDescription className="text-left">
            Criar nova tabela no Oracle DB com os campos desejados para consulta
            API
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <span className="text-xs text-muted-foreground w-full text-left">
            Status:
          </span>
          <div className="flex gap-3 items-center py-2 px-3 border">
            <CheckCircle className="text-lime-500" />
            <Separator orientation="vertical" />
            <div className="flex justify-between w-full items-center">
              <span className="text-sm text-muted-foreground">
                Em andamento
              </span>
              <span className="text-xs text-muted-foreground">há 02 dias</span>
            </div>
          </div>
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="flex gap-3 items-center py-2 px-3 border"
            >
              <CheckCircle className="text-zinc-400" />
              <Separator orientation="vertical" />
              <span className="text-sm text-muted-foreground">
                Outros status
              </span>
            </div>
          ))}
          <span className="text-xs text-muted-foreground w-full text-left mt-4">
            Comentários:
          </span>
          <div className="flex flex-col border w-full p-4">
            <div className="flex justify-between w-full items-center">
              <span className="text-sm font-semibold text-muted-foreground truncate">
                Alex Nascimento
              </span>
              <span className="text-xs text-muted-foreground">há 02 dias</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              tristique, nisl nec pulvinar ultricies, nunc justo fermentum
              libero, et luctus lacus erat eget arcu.
            </p>
          </div>
          <Textarea placeholder="Digite um comentário" />
          <Button size="sm" className="w-full flex items-center gap-3">
            <Send size={16} />
            Comentar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
