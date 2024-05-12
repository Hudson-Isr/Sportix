import { Helmet } from 'react-helmet-async'

import { DayOrdersAmountCard } from './day-orders-amount-card'
import { MonthCanceledOrdersAmountCard } from './month-canceled-orders-amount-card'
import { MonthOrdersAmountCard } from './month-orders-amount-card'
import { MonthRevenueCard } from './month-revenue-card'
import { PopularHoursDayCard } from './popular-hours-day-card'
import { RevenueChartAmount } from './revenue-chart-amount'
import { RevenueChartDay } from './revenue-chart-day'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-5 ">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid gap-4 lg:grid-cols-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </div>

        <div className="grid gap-4">
          <RevenueChartDay />
          <RevenueChartAmount />
        </div>
        <div className="grid grid-cols-3">
          <PopularHoursDayCard />
        </div>
      </div>
    </>
  )
}
