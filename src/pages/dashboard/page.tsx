import { Button } from '@/components/ui/button'
import {
  Sortable,
  SortableDragHandle,
  SortableItem,
} from '@/components/ui/sortable'
import { FieldValues, useFieldArray, useForm } from 'react-hook-form'

export function Dashboard() {
  const form = useForm({
    defaultValues: {
      flipTricks: [
        { spin: 'Frontside', name: 'Ollie' },
        { spin: 'Backside', name: 'Kickflip' },
        { spin: 'Frontside', name: 'Heelflip' },
      ],
    },
  })

  const { fields, move, remove } = useFieldArray({
    control: form.control,
    name: 'flipTricks',
  })

  const onSubmit = (data: FieldValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <h1>Dashboard</h1>
      <Sortable
        value={fields}
        onMove={({ activeIndex, overIndex }) => move(activeIndex, overIndex)}
      >
        <div className="w-full space-y-2">
          {fields.map((field, index) => (
            <SortableItem key={field.id} value={field.id} asChild>
              <div className="grid grid-cols-[0.5fr,1fr,auto,auto] items-center gap-2">
                <div>{field.name}</div>
                <SortableDragHandle
                  variant="outline"
                  size="icon"
                  className="size-8 shrink-0"
                >
                  <span>|||</span>
                </SortableDragHandle>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="size-8 shrink-0"
                  onClick={() => remove(index)}
                >
                  <span className="sr-only">Remove</span>
                </Button>
              </div>
            </SortableItem>
          ))}
        </div>
      </Sortable>
      <Button type="submit">Submit</Button>
    </form>
  )
}
