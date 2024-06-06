import { IconPlayVolleyball, IconSoccerField } from '@tabler/icons-react'
import { CirclePlus, MapPinned } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'

import { CourtsCreate } from './courts-create'

export function Courts() {
  return (
    <>
      <Helmet title="Quadras" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold ">Quadras</h1>

        <div className="space-y-5">
          <span className="text-sm font-semibold">
            Seja bem-vindo ao sistema de gerenciamento de Quadras.
          </span>
          <div className="w-full space-y-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="xs"
                  // disabled={!table.getCanPreviousPage()}
                >
                  <CirclePlus className="2-4 mr-2 h-4" />
                  Adicionar Quadra
                </Button>
              </DialogTrigger>
              <CourtsCreate />
            </Dialog>

            <div className="space-y-3 rounded border p-4">
              <div className="flex space-x-3">
                <img
                  className="aspect-[3/4] w-[150px] rounded object-cover transition-all hover:scale-105"
                  src="/img-teste.jpg"
                  alt=""
                />
                <div className="flex-col">
                  <div className="flex items-center">
                    <IconSoccerField className="2-4 mr-2 h-4" />
                    <h3>Quadra 01</h3>
                  </div>
                  <div className="flex items-center">
                    <IconPlayVolleyball className="mr-2 h-4 " />
                    <p>Volei</p>
                  </div>
                  <div className="flex items-center">
                    <MapPinned className="2-4 mr-2 h-4" />
                    <p>Rua de nos todos</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Card>
                  <CardHeader className="items-center justify-center space-y-0">
                    <CardTitle className="font-simebold text-base">
                      Horario
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-0">
                    <span className="flex items-center justify-center gap-2 font-bold ">
                      <Checkbox />
                      9:00
                    </span>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className=" items-center justify-center space-y-0">
                    <CardTitle className="font-simebold text-base">
                      Horario
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-0">
                    <span className="flex items-center justify-center gap-2 font-bold ">
                      <Checkbox />
                      10:00
                    </span>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className=" items-center justify-center space-y-0">
                    <CardTitle className="font-simebold text-base">
                      Horario
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-0">
                    <span className="flex items-center justify-center gap-2 font-bold ">
                      <Checkbox />
                      11:00
                    </span>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className=" items-center justify-center space-y-0">
                    <CardTitle className="font-simebold text-base">
                      Horario
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-0">
                    <span className="flex items-center justify-center gap-2 font-bold ">
                      <Checkbox />
                      12:00
                    </span>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className=" items-center justify-center space-y-0">
                    <CardTitle className="font-simebold text-base">
                      Horario
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-0">
                    <span className="flex items-center justify-center gap-2 font-bold ">
                      <Checkbox />
                      13:00
                    </span>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
