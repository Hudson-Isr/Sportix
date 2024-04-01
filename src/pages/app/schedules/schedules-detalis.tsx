import React from 'react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'

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

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>ARENA: ___</DialogTitle>
        <DialogDescription>Filial: Juazeiro</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex  justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-400"></span>
                  <span className="font-medium text-muted-foreground">
                    Livre
                  </span>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleReserved()
          }}
          className="flex justify-center space-y-6"
        >
          <Button disabled={isSubmitting} type="submit">
            Reserve Agora
          </Button>
        </form>
      </div>
    </DialogContent>
  )
}
