import { Helmet } from 'react-helmet-async'

import { Pagination } from '@/components/pagination'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { ReservationsTableFilters } from './reservation-table-filters'
import { ReservationsTableRow } from './reservations-table-row'

export function Reservations() {
  return (
    <>
      <Helmet title="Reservas" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Reservas</h1>
        <div className="space-y-2.5">
          <ReservationsTableFilters />
          <div className="boder rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[140px]">Dia</TableHead>
                  <TableHead className="w-[140px]">Horario</TableHead>
                  <TableHead className="w-[140px]">Cliente</TableHead>
                  <TableHead className="w-[140px]">Recorrente</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 1 }).map((_, i) => {
                  return <ReservationsTableRow key={i} />
                })}
              </TableBody>
            </Table>
          </div>
        </div>
        <Pagination pageIndex={0} totalCount={105} perPage={10} />
      </div>
    </>
  )
}
