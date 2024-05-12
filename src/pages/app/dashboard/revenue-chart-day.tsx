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

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const data = [
  { name: 'Segunda', date: '10/12', revenue: 1200 },
  { name: 'Terça', date: '11/12', revenue: 1822 },
  { name: 'Quarta', date: '12/12', revenue: 900 },
  { name: 'Quinta', date: '13/12', revenue: 1100 },
  { name: 'Sexta', date: '14/12', revenue: 1234 },
  { name: 'Sabado', date: '15/12', revenue: 4312 },
  { name: 'Domingo', date: '16/12', revenue: 3123 },
]
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
          <BarChart data={data} barSize={80}>
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
