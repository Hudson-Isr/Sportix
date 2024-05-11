import { Helmet } from 'react-helmet-async'

import { DayOrdersAmountCard } from './day-orders-amount-card'
import { MonthCanceledOrdersAmountCard } from './month-canceled-orders-amount-card'
import { MonthOrdersAmountCard } from './month-orders-amount-card'
import { MonthRevenueCard } from './month-revenue-card'
import { PopularHoursDayCard } from './popular-hours-day-card'
import { RevenueChart } from './revenue-chart'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-5 ">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid-cols-4 gap-5 md:grid">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </div>

        <div className="grid-cols-9 gap-4 md:grid">
          <RevenueChart />
          <PopularHoursDayCard />
        </div>
      </div>
    </>
  )
}
