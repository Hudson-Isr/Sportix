import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { NavLink } from 'react-router-dom'

import { Court, getCourts } from '@/api/get-courts'

export function ClientCourts() {
  const [data, setData] = useState<Court[]>([])

  const date = new Date()

  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0') // Adiciona zero à esquerda se necessário
  const day = date.getDate().toString().padStart(2, '0') // Adiciona zero à esquerda se necessário
  const dateFormat = `${day}-${month}-${year}`

  const fetchData = () => {
    getCourts()
      .then((response) => {
        setData(response)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (data.length === 0) {
    return <div>Loading...</div> // Se os dados ainda não foram carregados, exibe uma mensagem de carregamento
  }

  return (
    <>
      <Helmet title="Quadras" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold ">Quadras</h1>

        {/* List of Courts */}
        <div className="space-y-4">
          {data.map((court) => (
            <div key={court.id} className="rounded border p-4 shadow">
              <h2 className="text-xl font-bold">{court.name}</h2>
              <p>{court.type}</p>
              <p>{court.city}</p>
              <p>{court.neighborhood}</p>
              {/* Adicione outros campos conforme necessário */}
              <NavLink
                to={`/courtInfo/${court.id}/${dateFormat}`}
                className="text-blue-600 hover:underline"
              >
                Detalhes
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
