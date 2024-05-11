import { TableCell, TableRow } from '@/components/ui/table'

export function SchedulesTableRow() {
  return (
    <>
    <div className="flex items-center gap-2 flex-col grid grid-cols-2">
      <TableRow>
        <Button className='btn'>8:00</Button>
        <TableCell>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-400"></span>
            <span className="font-medium text-muted-foreground">Livre</span>
          </div>
        </TableCell>
      </TableRow>

      {/* Adicionando mais casos de teste */}
      <TableRow>
        <TableCell className="font-bold text-muted-foreground">9:00</TableCell>
        <TableCell>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-red-400"></span>
            <span className="font-medium text-muted-foreground">Reservado</span>
          </div>
        </TableCell>
      </TableRow>

      {/* Adicionando mais casos de teste */}
      <TableRow>
        <TableCell className="font-bold text-muted-foreground">10:00</TableCell>
        <TableCell>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-orange-400"></span>
            <span className="font-medium text-muted-foreground">
              Jogo Livre
            </span>
          </div>
        </TableCell>
      </TableRow>
      </div>
    </>
  )
}
