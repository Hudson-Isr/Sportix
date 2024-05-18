import {
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table'
import React from 'react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { columns, data } from './schedules-table-row'

export function SchedulesDetails() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  async function handleReserved() {
    setIsSubmitting(true)
    try {
      // Simulando uma operação assíncrona, como uma chamada de API
      await new Promise((resolve) => setTimeout(resolve, 1000))
      // Aqui você deve adicionar a lógica de reserva

      toast.success('Reserva realizada com sucesso!')

      // Desativa o botão de reserva
      setIsSubmitting(true)

      // Aguarda 2 segundos após a exibição do toast e recarrega a página
      setTimeout(() => {
        window.location.reload()
      }, 2000)
    } catch (error) {
      // Se houver algum erro, exiba uma mensagem de erro
      toast.error('Erro ao realizar a reserva.')
      setIsSubmitting(false)
    }
  }

  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  })
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>ARENA: Sportix</DialogTitle>
        <DialogDescription>Filial: Tiradente</DialogDescription>
      </DialogHeader>

      <div className="boder space-y-6 rounded-md">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers
                  .filter((header) => header.id !== 'select')
                  .map((header) => (
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
              table
                .getRowModel()
                .rows.slice(0, 3)
                .map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                  >
                    {row
                      .getVisibleCells()
                      .filter((_cell, index) => index !== 0)
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
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Desconto</TableCell>
              <TableCell className="text-right text-red-500">
                R$ 30.00
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">R$ 130.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
        <DialogFooter>
          <div className="flex justify-center gap-5">
            <DialogClose asChild>
              <Button type="button" variant="destructive">
                Cancelar
              </Button>
            </DialogClose>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleReserved()
              }}
            >
              <Button disabled={isSubmitting} type="submit" variant="sucessed">
                Reserve Agora
              </Button>
            </form>
          </div>
        </DialogFooter>
      </div>
    </DialogContent>
  )
}
