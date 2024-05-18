import { X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'

export function ReservationsTableRow() {
  return (
    <>
      <TableRow>
        <TableCell className="text-muted-foreground">01/04</TableCell>
        <TableCell className="font-bold text-muted-foreground">8:00</TableCell>
        <TableCell className="font-bold text-muted-foreground">01</TableCell>
        <TableCell className="text-muted-foreground">Hudson Israel</TableCell>
        <TableCell>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-400"></span>
            <span className="font-medium text-muted-foreground">Sim</span>
          </div>
        </TableCell>
        <TableCell>
          <Button
            type="submit"
            variant="destructive"
            className="hover:bg-red-400 hover:dark:bg-red-600"
            size="xs"
          >
            <X className="mr-2 h-4 w-4" />
            Cancelar
          </Button>
        </TableCell>
      </TableRow>

      {/* Adicionando mais casos de teste */}
      <TableRow>
        <TableCell className="text-muted-foreground">01/04</TableCell>
        <TableCell className="font-bold text-muted-foreground">9:00</TableCell>
        <TableCell className="font-bold text-muted-foreground">02</TableCell>
        <TableCell className="text-muted-foreground">Felipe Oliveira</TableCell>
        <TableCell>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-red-400"></span>
            <span className="font-medium text-muted-foreground">Não</span>
          </div>
        </TableCell>
        <TableCell>
          <Button
            type="submit"
            variant="destructive"
            className="hover:bg-red-400 hover:dark:bg-red-600"
            size="xs"
          >
            <X className="mr-2 h-4 w-4" />
            Cancelar
          </Button>
        </TableCell>
      </TableRow>
      {/* Adicionando mais casos de teste */}
      <TableRow>
        <TableCell className="text-muted-foreground">01/04</TableCell>
        <TableCell className="font-bold text-muted-foreground">9:00</TableCell>
        <TableCell className="font-bold text-muted-foreground">01</TableCell>
        <TableCell className="text-muted-foreground">Pedro Lucas</TableCell>
        <TableCell>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-red-400"></span>
            <span className="font-medium text-muted-foreground">Não</span>
          </div>
        </TableCell>
        <TableCell>
          <Button
            type="submit"
            variant="destructive"
            className="hover:bg-red-400 hover:dark:bg-red-600"
            size="xs"
          >
            <X className="mr-2 h-4 w-4" />
            Cancelar
          </Button>
        </TableCell>
      </TableRow>
    </>
  )
}
