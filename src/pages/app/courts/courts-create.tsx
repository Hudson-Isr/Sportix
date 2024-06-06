import { useState } from 'react'

import { createCourt, RegisterCourt } from '@/api/create-court'
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

interface Props {
  onCourtCreated: () => void
}

export function CourtsCreate({ onCourtCreated }: Props) {
  const [formData, setFormData] = useState<Partial<RegisterCourt>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await createCourt(formData as RegisterCourt)
      setFormData({})
      alert('Quadra criada com sucesso!')
      onCourtCreated()
    } catch (error) {
      console.error('Error ao criar a quadra:', error)
      alert('Erro ao criar a quadra.')
    }
  }

  return (
    <DialogContent>
      <DialogHeader className="flex justify-center">
        <DialogTitle>ARENA: Sportix</DialogTitle>
        <DialogDescription>
          Adicione as Informações da Nova Quadra
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit}>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Nome/Número*
            </Label>
            <Input
              className="col-span-2"
              id="name"
              type="text"
              name="name"
              value={formData.name || ''}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="road">
              Rua*
            </Label>
            <Input
              className="col-span-3"
              id="road"
              type="text"
              name="road"
              value={formData.road || ''}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="number">
              Número*
            </Label>
            <Input
              className="col-span-3"
              id="number"
              type="number"
              name="number"
              value={formData.number || ''}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="neighborhood">
              Bairro*
            </Label>
            <Input
              className="col-span-3"
              id="neighborhood"
              type="text"
              name="neighborhood"
              value={formData.neighborhood || ''}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="city">
              Cidade*
            </Label>
            <Input
              className="col-span-3"
              id="city"
              type="text"
              name="city"
              value={formData.city || ''}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="reference">
              Referência
            </Label>
            <Input
              className="col-span-3"
              id="reference"
              type="text"
              name="reference"
              value={formData.reference || ''}
              onChange={handleChange}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost" type="button">
              Cancelar
            </Button>
          </DialogClose>
          <Button type="submit">Salvar</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
