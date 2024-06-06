import { format } from 'date-fns'
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
import { cn } from '@/lib/utils'

export function CourtTableFilters({
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
              locale={ptBR}
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex gap-2">
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
