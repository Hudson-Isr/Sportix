import {
  DialogContent,
  DialogDescription,
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

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>ARENA: ___</DialogTitle>
        <DialogDescription>Detalhe do pedido (Arena 01)</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex  justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                  <span className="font-medium text-muted-foreground">
                    Pendente
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Responsavel
              </TableCell>
              <TableCell className="flex  justify-end">
                Hudson Israel França costa
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex  justify-end">
                (88) 99999-9999
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">E-mail</TableCell>
              <TableCell className="flex  justify-end">
                teste@teste.com.br
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Data</TableCell>
              <TableCell className="flex  justify-end">26/04/2024</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead className="text-right">Qtd.</TableHead>
              <TableHead className="text-right">Preço</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>Agua mineral</TableCell>
              <TableCell className="text-right">3</TableCell>
              <TableCell className="text-right">R$ 2,00</TableCell>
              <TableCell className="text-right">R$ 6,00</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Energetico</TableCell>
              <TableCell className="text-right">1</TableCell>
              <TableCell className="text-right">R$ 6,00</TableCell>
              <TableCell className="text-right">R$ 6,00</TableCell>
            </TableRow>
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total dos pedidos</TableCell>
              <TableCell className="text-right font-medium">R$ 12,00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  )
}
