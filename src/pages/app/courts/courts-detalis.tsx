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

export function CourtsDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>ARENA: Sportix</DialogTitle>
        <DialogDescription>Filial: Tiradente</DialogDescription>
      </DialogHeader>

      <div className="boder space-y-6 rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="h-24 text-center">No results.</TableCell>
            </TableRow>
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
            <form>
              <Button type="submit" variant="sucessed">
                Reserve Agora
              </Button>
            </form>
          </div>
        </DialogFooter>
      </div>
    </DialogContent>
  )
}
