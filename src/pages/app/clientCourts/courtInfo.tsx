import { IconPlayVolleyball, IconSoccerField } from '@tabler/icons-react'
import { MapPinned } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

import { CourtInfoObject, getCourtInfo } from '@/api/get-court-info'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'

export function CourtInfo() {
  const { id = '', date = '' } = useParams<{ id: string; date: string }>()
  const [data, setData] = useState<CourtInfoObject | null>(null)

  const fetchData = () => {
    getCourtInfo(id, date)
      .then((response) => {
        setData(response)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }

  useEffect(() => {
    fetchData()
  }, [id, date])

  if (data === null) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Helmet title="Quadras" />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold ">{data.court.name}</h1>

        <div className="space-y-5">
          <div className="w-full space-y-2">
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
                    <h3>{data.court.name}</h3>
                  </div>
                  <div className="flex items-center">
                    <IconPlayVolleyball className="mr-2 h-4 " />
                    <p>{data.court.type}</p>
                  </div>
                  <div className="flex items-center">
                    <MapPinned className="2-4 mr-2 h-4" />
                    <p>{data.court.city}</p>
                    <p>/ {data.court.neighborhood} </p>
                    <p>/ {data.court.road} </p>
                    <p>/ {data.court.number} </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                {data.returningTimes.map((time) => (
                  // eslint-disable-next-line react/jsx-key
                  <Card>
                    <CardHeader className="items-center justify-center space-y-0">
                      <CardTitle className="font-simebold text-base">
                        Horario {time.status}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-0">
                      <span className="flex items-center justify-center gap-2 font-bold ">
                        <Checkbox />
                        {time.hour}
                      </span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
