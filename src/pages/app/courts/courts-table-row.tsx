import { ColumnDef } from '@tanstack/react-table'

import { Checkbox } from '@/components/ui/checkbox'

// eslint-disable-next-line no-use-before-define
export const data: Shedules[] = [
  {
    id: 'm5gr84i9',
    schedules: '9:00',
    status: 'Livre',
    day: 'segunda',
    courts: 1,
    filial: 'Tiradentes',
    price: 40,
  },
  {
    id: '3u1reuv4',
    schedules: '10:00',
    status: 'Livre',
    day: 'segunda',
    courts: 1,
    filial: 'Franciscanos',
    price: 50,
  },
  {
    id: 'derv1ws0',
    schedules: '11:00',
    status: 'Livre',
    day: 'segunda',
    courts: 3,
    filial: 'Franciscanos',
    price: 50,
  },
  {
    id: '5kma53ae',
    schedules: '12:00',
    status: 'Livre',
    day: 'segunda',
    courts: 1,
    filial: 'Tiradentes',
    price: 40,
  },
  {
    id: 'bhqecj4p',
    schedules: '13:00',
    status: 'Livre',
    day: 'segunda',
    courts: 1,
    filial: 'Tiradentes',
    price: 40,
  },
  {
    id: 'bhqec48p',
    schedules: '18:00',
    status: 'Livre',
    day: 'segunda',
    courts: 1,
    filial: 'Tiradentes',
    price: 50,
  },
  {
    id: 'bhktcj4p',
    schedules: '19:00',
    status: 'Livre',
    day: 'segunda',
    courts: 1,
    filial: 'Tiradentes',
    price: 40,
  },
  {
    id: 'bhlpcj5p',
    schedules: '20:00',
    status: 'Livre',
    day: 'segunda',
    courts: 1,
    filial: 'Tiradentes',
    price: 40,
  },
]

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Shedules = {
  id: string
  status: string // Status
  schedules: string // Horario
  day: string //  Dia
  courts: number // Quadras
  filial: string
  price: number // Price
}

export const columns: ColumnDef<Shedules>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'schedules',
    header: 'Horarios',
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <span className="font-medium">{row.getValue('schedules')}</span>
      </div>
    ),
  },
  {
    accessorKey: 'courts',
    header: 'Quadra',
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <span className="font-medium dark:text-muted-foreground">
          {row.getValue('courts')}
        </span>
      </div>
    ),
  },
  {
    accessorKey: 'filial',
    header: 'Local',
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <span className="font-medium dark:text-muted-foreground">
          {row.getValue('filial')}
        </span>
      </div>
    ),
  },
  {
    accessorKey: 'price',
    header: () => <div className="flex w-[65px] items-center">Valor</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('price'))
      const formatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
]
