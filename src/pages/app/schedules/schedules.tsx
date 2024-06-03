import {
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table'
import React from 'react'
import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { SchedulesDetails } from './schedules-detalis'
import { SchedulesTableFilters } from './schedules-table-filters'
import { columns, data } from './schedules-table-row'

export function Schedules() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  // Manipulador de evento de clique para o botão "Fechar horario"
  const handleCloseSchedule = () => {
    const selectedRows = table.getFilteredSelectedRowModel().rows
  }
  return (
    <>
      <Helmet title="Horarios" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Horarios</h1>
        <div className="space-y-2.5 ">
          <SchedulesTableFilters />
          <Input
            placeholder="Procure atraves do número da quadra"
            value={
              (table.getColumn('filial')?.getFilterValue() as string) ?? ''
            }
            onChange={(event) =>
              table.getColumn('filial')?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
          <div className="boder rounded-md">
            <Table>
              <TableHeader>
                {table
                  .getHeaderGroups()
                  .slice(0, 3)
                  .map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                      {headerGroup.headers.slice(0, 4).map((header) => (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext(),
                              )}
                        </TableHead>
                      ))}
                    </TableRow>
                  ))}
              </TableHeader>

              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && 'selected'}
                    >
                      {row
                        .getVisibleCells()
                        .slice(0, 4)
                        .map((cell) => (
                          <TableCell key={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext(),
                            )}
                          </TableCell>
                        ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
            <div className="flex items-center justify-end space-x-2 py-4">
              <div className="flex-1 text-sm text-muted-foreground">
                {table.getFilteredSelectedRowModel().rows.length} de{' '}
                {table.getFilteredRowModel().rows.length} linhas selecionadas.
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="xs"
                    onClick={handleCloseSchedule}
                    // disabled={!table.getCanPreviousPage()}
                  >
                    Fechar Horario
                  </Button>
                </DialogTrigger>
                <SchedulesDetails />
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
