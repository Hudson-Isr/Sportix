import { Users } from 'lucide-react'
import { useEffect, useState } from 'react'

import { GetReservesOfDay, getReservesOfDay } from '@/api/dashboard'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function DayOrdersAmountCard() {
  const [data, setData] = useState<GetReservesOfDay | null>(null)

  useEffect(() => {
    getReservesOfDay()
      .then((response) => {
        setData(response)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])

  if (!data) {
    return <div>Loading...</div> // Se os dados ainda não foram carregados, exibe uma mensagem de carregamento
  }

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="font-simebold text-base">
          Reservas (Dia)
        </CardTitle>
        <Users className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text2.l font-bold tracking-tight">{data.ammount}</span>
        <p className="text-xs text-muted-foreground">
          <span className={`${data.percentageColorClass}`}>
            {data.comparative !== 0 ? `${data.comparative}%` : 'Sem comparação'}{' '}
          </span>
          <span>em relação a ontem</span>
        </p>
      </CardContent>
    </Card>
  )
}
