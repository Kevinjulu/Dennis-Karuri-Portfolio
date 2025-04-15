"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

// Mock data for the overview chart
const data = [
  {
    name: "Jan",
    acting: 12,
    modeling: 8,
    influencing: 15,
    presenting: 5,
  },
  {
    name: "Feb",
    acting: 15,
    modeling: 10,
    influencing: 18,
    presenting: 7,
  },
  {
    name: "Mar",
    acting: 18,
    modeling: 12,
    influencing: 20,
    presenting: 9,
  },
  {
    name: "Apr",
    acting: 20,
    modeling: 15,
    influencing: 23,
    presenting: 12,
  },
  {
    name: "May",
    acting: 25,
    modeling: 18,
    influencing: 28,
    presenting: 15,
  },
  {
    name: "Jun",
    acting: 30,
    modeling: 20,
    influencing: 32,
    presenting: 18,
  },
  {
    name: "Jul",
    acting: 35,
    modeling: 22,
    influencing: 35,
    presenting: 20,
  },
  {
    name: "Aug",
    acting: 40,
    modeling: 25,
    influencing: 40,
    presenting: 22,
  },
  {
    name: "Sep",
    acting: 45,
    modeling: 28,
    influencing: 45,
    presenting: 25,
  },
  {
    name: "Oct",
    acting: 50,
    modeling: 30,
    influencing: 50,
    presenting: 28,
  },
  {
    name: "Nov",
    acting: 55,
    modeling: 32,
    influencing: 55,
    presenting: 30,
  },
  {
    name: "Dec",
    acting: 60,
    modeling: 35,
    influencing: 60,
    presenting: 32,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Tooltip />
        <Bar
          dataKey="acting"
          fill="#ef4444"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
        <Bar
          dataKey="modeling"
          fill="#3b82f6"
          radius={[4, 4, 0, 0]}
          className="fill-blue-500"
        />
        <Bar
          dataKey="influencing"
          fill="#22c55e"
          radius={[4, 4, 0, 0]}
          className="fill-green-500"
        />
        <Bar
          dataKey="presenting"
          fill="#a855f7"
          radius={[4, 4, 0, 0]}
          className="fill-purple-500"
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
