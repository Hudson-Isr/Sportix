import {
  ColumnDef,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { CalendarIcon, Search, X } from 'lucide-react'
import * as React from 'react'
import { DateRange } from 'react-day-picker'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

export function ReservationsTableFilters({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
  })

  return (
    <form className="flex flex-col items-center gap-4 sm:flex-row">
      <span className="text-sm font-semibold"> Filtros:</span>
      <div className={cn('grid gap-2', className)}>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={'secondary'}
              className={cn(
                'w-[320px] justify-start text-left font-normal',
                !date && 'text-muted-foreground',
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, 'dd MMMM yyyy', { locale: ptBR })} -{' '}
                    {format(date.to, 'dd MMMM yyyy', { locale: ptBR })}
                  </>
                ) : (
                  format(date.from, 'dd MMMM yyyy', { locale: ptBR })
                )
              ) : (
                <span>Selecione as Datas</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={1}
              locale={ptBR}
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex gap-3">
        <Button type="submit" variant="secondary" size="xs">
          <Search className="2-4 mr-2 h-4" />
          Filtrar Resultados
        </Button>

        <Button type="button" variant="destructive" size="xs">
          <X className="2-4 mr-2 h-4" />
          Remover Filtros
        </Button>
      </div>
    </form>
  )
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  )
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
  })

  return (
    <>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn('Status')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('Status')?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
    </>
  )
}
