import { useEffect, useState } from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import { GetRevenuePerDay, getRevenuePerDay } from '@/api/dashboard'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const getIntroOfPage = (label) => {
  return ''
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="desc">O Faturamento do dia.</p>
        <p className="label">{`${label} : R$${payload[0].value}`}</p>
        <p className="intro">{getIntroOfPage(label)}</p>
      </div>
    )
  }

  return null
}

export function RevenueChartDay() {
  const [data, setData] = useState<GetRevenuePerDay | null>(null)

  useEffect(() => {
    getRevenuePerDay()
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

  const dataReturn = [
    { name: 'Segunda', revenue: data.Sunday },
    { name: 'Terça', revenue: data.Tuesday },
    { name: 'Quarta', revenue: data.Wednesday },
    { name: 'Quinta', revenue: data.Thursday },
    { name: 'Sexta', revenue: data.Friday },
    { name: 'Sabado', revenue: data.Saturday },
    { name: 'Domingo', revenue: data.Monday },
  ]
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita por Semana
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={dataReturn} barSize={80}>
            <XAxis dataKey="name" tickLine={false} axisLine={false} dy={10} />
            <YAxis
              stroke="#888"
              style={{ fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />
            <CartesianGrid vertical={false} className="stroke-muted" />
            <Tooltip
              cursor={false}
              content={
                <CustomTooltip
                  active={undefined}
                  payload={undefined}
                  label={undefined}
                />
              }
            />
            <Bar
              dataKey="revenue"
              strokeWidth={2}
              fill={colors.orange['500']}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
