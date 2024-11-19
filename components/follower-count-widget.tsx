"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import followerData from "../app/_data/johnnybuilds_followers.json"

type FollowerData = Record<
  string,
  {
    xFollows: number
    bskyFollows: number
  }
>

const formatDate = (dateString: string) => {
  const [month, day] = dateString.split("_")
  return `${month}/${day}`
}

const processData = (data: FollowerData) => {
  return Object.entries(data).map(([date, counts]) => ({
    date: formatDate(date),
    x: counts.xFollows || 0,
    bsky: counts.bskyFollows || 0,
  }))
}

export function FollowerCountWidget() {
  const data = processData(followerData as FollowerData)
  const currentCounts = data[data.length - 1]

  return (
    <Card className="w-full">
      <CardHeader className="h-0">
        <CardTitle className="sr-only">Followers</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-center gap-4 items-center relative -top-4">
            <div className="bg-gradient-to-t from-foreground/10 to-transparent flex items-center space-x-2 rounded-lg border-2 px-2">
              <span className="border-r-2 pr-1">𝕏</span>
              <span className="font-mono">{currentCounts.x}</span>
            </div>
            <div className="bg-gradient-to-t from-foreground/10 to-transparent flex items-center space-x-2 rounded-lg border-2 px-2">
              <span className="border-r-2 pr-1">🦋</span>
              <span className="font-mono">{currentCounts.bsky}</span>
            </div>
          </div>
          <ChartContainer
            config={{
              x: {
                label: "X Followers",
                color: "#64748b", // Hardcoded slate-700
              },
              bsky: {
                label: "Bluesky Followers",
                color: "#3b82f6", // Hardcoded blue-500
              },
            }}
            className="w-full"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend formatter={(value) => (value === "x" ? "𝕏 Followers" : "🦋 Followers")} />
                <Line
                  type="monotone"
                  dataKey="x"
                  stroke="#64748b" // Hardcoded slate-500
                  name="x"
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="bsky"
                  stroke="#3b82f6" // Hardcoded blue-500
                  name="bsky"
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
