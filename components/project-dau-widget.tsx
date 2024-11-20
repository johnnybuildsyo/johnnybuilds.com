"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { DAUData } from "@/app/_types"

type DAUWidgetProps = {
  dauData: DAUData
  title: string
}

const formatDate = (dateString: string) => {
  const [month, day] = dateString.split("_")
  return `${month}/${day}`
}

const processDAUData = (data: DAUData) => {
  return Object.entries(data).map(([date, { dau }]) => ({
    date: formatDate(date),
    dau,
  }))
}

export function ProjectDAUWidget({ dauData, title }: DAUWidgetProps) {
  const data = processDAUData(dauData)

  return (
    <Card className="w-full">
      <CardHeader className="h-0">
        <CardTitle className="sr-only">{title} DAU</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-center items-center relative -top-4">
            <div className="bg-gradient-to-t from-foreground/10 to-transparent flex items-center space-x-2 rounded-lg border-2">
              <span className="font-mono opacity-80 text-xs py-0.5 scale-90">Daily Active User Tracking</span>
            </div>
          </div>
          <ChartContainer
            config={{
              dau: {
                label: "Daily Active Users",
                color: "#4ade80", // Hardcoded green-400
              },
            }}
            className="w-full h-64"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend formatter={() => "DAU"} />
                <Line
                  type="monotone"
                  dataKey="dau"
                  stroke="#4ade80" // Hardcoded green-400
                  name="dau"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}
