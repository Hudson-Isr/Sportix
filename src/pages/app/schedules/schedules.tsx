import { Helmet } from 'react-helmet-async'

import { Pagination } from '@/components/pagination'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { SchedulesTableFilters } from './schedules-table-filters'
import { SchedulesTableRow } from './schedules-table-row'

export function Schedules() {
  return (
    <>
      <Helmet title="Horarios" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Horarios</h1>

        <div className="space-y-2.5">
          <SchedulesTableFilters />
          <div>teste</div>
          <div className="boder rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[140px]">Dia</TableHead>
                  <TableHead className="w-[140px]">Horario</TableHead>
                  <TableHead className="w-[140px]">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 1 }).map((_, i) => {
                  return <SchedulesTableRow key={i} />
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
