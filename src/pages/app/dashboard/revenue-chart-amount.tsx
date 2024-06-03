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

import { GetRevenuePerMonth, getRevenuePerMonth } from '@/api/dashboard'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="desc">O Faturamento do Mês.</p>
        <p className="intro">{`${label} : R$${payload[0].value}`}</p>
      </div>
    )
  }
  return null
}

export function RevenueChartAmount() {
  const [data, setData] = useState<GetRevenuePerMonth | null>(null)

  useEffect(() => {
    getRevenuePerMonth()
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
    { name: 'Janeiro', revenue: data.january },
    { name: 'Fevereiro', revenue: data.february },
    { name: 'Março', revenue: data.march },
    { name: 'Abril', revenue: data.april },
    { name: 'Maio', revenue: data.may },
    { name: 'Junho', revenue: data.june },
    { name: 'Julho', revenue: data.july },
    { name: 'Agosto', revenue: data.august },
    { name: 'Setembro', revenue: data.september },
    { name: 'Outubro', revenue: data.october },
    { name: 'Novembro', revenue: data.november },
    { name: 'Dezembro', revenue: data.december },
  ]
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita por Mês
          </CardTitle>
          <CardDescription>Receita Mensal no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={dataReturn} barSize={30}>
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
            <XAxis dataKey="name" tickLine={false} axisLine={false} dy={10} />

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
