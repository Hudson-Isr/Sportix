import { Check, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

import { OrderDetails } from './orders-details'

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs" className="hover:bg-primary">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>

          <OrderDetails />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        120391230129399
      </TableCell>
      <TableCell className="text-muted-foreground">ha 15 Minutos</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400"></span>
          <span className="font-medium text-muted-foreground">Pendente</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">Hudson Israel França Costa</TableCell>
      <TableCell className="font-medium">R$ 150,00</TableCell>
      <TableCell>
        <Button
          variant="outline"
          className="hover:bg-green-400 hover:dark:bg-green-600"
          size="xs"
        >
          <Check className="mr-2 h-4 w-4" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button
          variant="ghost"
          className="hover:bg-red-400 hover:dark:bg-red-600"
          size="xs"
        >
          <X className="mr-2 h-4 w-4" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
