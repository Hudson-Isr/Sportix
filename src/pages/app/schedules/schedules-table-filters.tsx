import { addDays, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { CalendarIcon, Search, X } from 'lucide-react'
import * as React from 'react'
import { DateRange } from 'react-day-picker'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'

export function SchedulesTableFilters({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDay(),
    ),
    to: addDays(
      new Date(new Date().getFullYear(), new Date().getMonth(), 1),
      6,
    ),
  })

  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold"> Filtros:</span>
      <div className={cn('grid gap-2', className)}>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={'secondary'}
              className={cn(
                'w-[300px] justify-start text-left font-normal',
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
                  format(date.from, 'LLL dd, y')
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
              numberOfMonths={2}
              locale={ptBR}
            />
          </PopoverContent>
        </Popover>
      </div>
      <Select defaultValue="all">
        <SelectTrigger className="h-8 w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos Status</SelectItem>
          <SelectItem value="pending">Fixo</SelectItem>
          <SelectItem value="reserved">Reservado</SelectItem>
          <SelectItem value="free">Jogo Livre</SelectItem>
        </SelectContent>
      </Select>

      <Button type="submit" variant="secondary" size="xs">
        <Search className="2-4 mr-2 h-4" />
        Filtrar Resultados
      </Button>

      <Button type="button" variant="destructive" size="xs">
        <X className="2-4 mr-2 h-4" />
        Remover Filtros
      </Button>
    </form>
  )
}
