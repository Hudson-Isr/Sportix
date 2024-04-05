import { TableCell, TableRow } from '@/components/ui/table'

export function ReservationsTableRow() {
  return (
    <>
      <TableRow>
        <TableCell className="text-muted-foreground">01/04/2024</TableCell>
        <TableCell className="text-muted-foreground">8 horas</TableCell>
        <TableCell className="text-muted-foreground">
          Hudson Israel França Costa
        </TableCell>
        <TableCell>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-400"></span>
            <span className="font-medium text-muted-foreground">Sim</span>
          </div>
        </TableCell>
      </TableRow>

      {/* Adicionando mais casos de teste */}
      <TableRow>
        <TableCell className="text-muted-foreground">01/04/2024</TableCell>
        <TableCell className="text-muted-foreground">9 horas</TableCell>
        <TableCell className="text-muted-foreground">
          Felipe de Oliveira Leite
        </TableCell>
        <TableCell>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-red-400"></span>
            <span className="font-medium text-muted-foreground">Não</span>
          </div>
        </TableCell>
      </TableRow>
    </>
  )
}
