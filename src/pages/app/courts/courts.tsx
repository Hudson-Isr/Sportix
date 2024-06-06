import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { Court, getUserCourts } from '@/api/get-user-court'
export function Courts() {
  const [data, setData] = useState<Court[]>([])

  useEffect(() => {
    getUserCourts()
      .then((response) => {
        setData(response)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])

  if (data.length === 0) {
    return <div>Loading...</div> // Se os dados ainda não foram carregados, exibe uma mensagem de carregamento
  }

  return (
    <>
      <Helmet title="Quadras" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Quadras</h1>
        <div className="space-y-2.5">
          <span className="text-sm font-semibold">
            Seja bem-vindo ao sistema de gerenciamento de Quadras.
          </span>
        </div>

        {/* List of Courts */}
        <div className="space-y-4">
          {data.map((court) => (
            <div key={court.id} className="rounded border p-4 shadow">
              <h2 className="text-xl font-bold">{court.name}</h2>
              <p>{court.city}</p>
              {/* Adicione outros campos conforme necessário */}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
