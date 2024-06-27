import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { GripVerticalIcon, PlusCircleIcon, TrashIcon } from 'lucide-react'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Sortable,
  SortableDragHandle,
  SortableItem,
} from '@/components/ui/sortable'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Switch } from '@/components/ui/switch'
import { useState } from 'react'

export function NewItems() {
  const formSchema = z.object({
    taskName: z.string(),
    taskDescription: z.string(),
    taskCategory: z.string(),
    status: z.array(
      z.object({
        name: z.string(),
        complete: z.boolean(),
      }),
    ),
    public: z.boolean(),
  })

  type FormValues = z.infer<typeof formSchema>

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      status: [{ name: 'Backlog', complete: true }],
      public: true,
    },
  })

  const { fields, move, remove, append } = useFieldArray({
    control: form.control,
    name: 'status',
  })

  const [publicTask, setPublicTask] = useState(
    form.getValues('public') as FormValues['public'],
  )

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  const handlePublicChange = (value: boolean) => {
    setPublicTask(value)
    form.setValue('public', value)
  }

  return (
    <div className="flex flex-col gap-6 max-w-xl">
      <h1 className="text-2xl font-bold">Register new Item</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="taskName">Name:</Label>
            <Input
              id="taskName"
              placeholder="Name of Item"
              {...form.register('taskName')}
            />
          </div>

          <div className="flex flex-col gap-2">
            <FormField
              control={form.control}
              name="taskCategory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category:</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="sadasd123">
                        Login Informática
                      </SelectItem>
                      <SelectItem value="asdsadsad123">Cast Group</SelectItem>
                      <SelectItem value="asdasdsdadasd">Superspark</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <div>
              <Button
                className="flex items-center gap-2 border-dashed"
                variant="outline"
                size="sm"
              >
                <PlusCircleIcon size="16" />
                Add Categorie
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="description">Description:</Label>
            <Textarea
              id="description"
              placeholder="Description of Item"
              {...form.register('taskDescription')}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Sortable
              value={fields}
              onMove={({ activeIndex, overIndex }) =>
                move(activeIndex, overIndex)
              }
            >
              {fields.map((field, index) => (
                <SortableItem key={field.id} value={field.id} asChild>
                  <div className="flex items-center gap-2">
                    <Input {...form.register(`status.${index}.name`)} />
                    <SortableDragHandle
                      variant="outline"
                      size="icon"
                      className="size-8 shrink-0"
                    >
                      <GripVerticalIcon size={12} />
                    </SortableDragHandle>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      className="size-8 shrink-0"
                      onClick={() => remove(index)}
                    >
                      <TrashIcon size="16" />
                      <span className="sr-only">Remove</span>
                    </Button>
                  </div>
                </SortableItem>
              ))}
            </Sortable>
            <div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="flex items-center gap-2 border-dashed"
                onClick={() => {
                  fields.length < 5 && append({ name: '', complete: false })
                }}
              >
                <PlusCircleIcon size="16" />
                Add Status
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Label htmlFor="public" className="text-sm">
              Public:
            </Label>
            <Switch checked={publicTask} onCheckedChange={handlePublicChange} />
          </div>

          <Button
            className="flex items-center gap-2 mt-8 text-white bg-green-600 hover:bg-green-500"
            type="submit"
          >
            <PlusCircleIcon size={22} />
            Register
          </Button>
        </form>
      </Form>
    </div>
  )
}
