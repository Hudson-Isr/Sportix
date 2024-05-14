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
  { name: 'Janeiro', date: '01', revenue: 7052 },
  { name: 'Fevereiro', date: '02', revenue: 5555 },
  { name: 'Março', date: '03', revenue: 6954 },
  { name: 'Abril', date: '04', revenue: 4500 },
  { name: 'Maio', date: '05', revenue: 4534 },
  { name: 'Junho', date: '06', revenue: 6235 },
  { name: 'Julho', date: '07', revenue: 5132 },
  { name: 'Agosto', date: '08', revenue: 4586 },
  { name: 'Setembro', date: '09', revenue: 6594 },
  { name: 'Outubro', date: '10', revenue: 3526 },
  { name: 'Novembro', date: '11', revenue: 5689 },
  { name: 'Dezembro', date: '12', revenue: 6457 },
]

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
          <BarChart data={data} barSize={30}>
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
