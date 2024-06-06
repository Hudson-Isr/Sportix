import { Button } from '@/components/ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function CourtsCreate() {
  return (
    <DialogContent>
      <DialogHeader className="flex justify-center">
        <DialogTitle>ARENA: Sportix</DialogTitle>
        <DialogDescription>
          Adicione as Informações da Nova Quadra
        </DialogDescription>
      </DialogHeader>

      <form>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Nome/Número
            </Label>
            <Input className="col-span-2" id="name" type="text" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="type">
              Tipo de Quadra
            </Label>
            <Input className="col-span-3" id="cpf" type="text" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="adress">
              Endereço
            </Label>
            <Input className="col-span-3" id="phoneNumber" type="text" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost" type="button">
              Cancelar
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="sucessed" type="submit">
              Salvar
            </Button>
          </DialogClose>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
