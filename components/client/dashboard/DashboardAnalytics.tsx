"use client"

import React, { useState } from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import {  format } from "date-fns"
import { es } from "date-fns/locale"
import { Badge } from "@/components/ui/badge"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Bandage, Calendar1, FileText, Pill } from "lucide-react"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
export const description = "A multiple bar chart"
function generateChartData() {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    
    return months.map(month => ({
      month,
      nopain: Math.floor(Math.random() * (350 - 50 + 1)) + 50, // Valor aleatorio entre 50 y 350
      pain: Math.floor(Math.random() * (250 - 50 + 1)) + 50    // Valor aleatorio entre 50 y 250
    }));
  }
  
// Uso de la función
const chartData = generateChartData();
const chartConfig = {
  nopain: {
    label: "nopain",
    color: "hsl(var(--chart-1))",
  },
  pain: {
    label: "pain",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export default function DashboardAnalytics() {
    const [date, setDate] = useState({
        from: new Date(),
        to: new Date(new Date().setDate(new Date().getDate() + 7)),
      });
      
    

  return (
    <div className="">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Analíticas</h1>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={`w-[300px] justify-start text-left font-normal`}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd, y", { locale: es })} -{" "}
                    {format(date.to, "LLL dd, y", { locale: es })}
                  </>
                ) : (
                  format(date.from, "LLL dd, y", { locale: es })
                )
              ) : (
                <span>Selecciona un rango de fechas</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={(range) => setDate({
                from: range?.from || new Date(),
                to: range?.to || new Date() 
                })}             
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Medicinas totales
            </CardTitle>
            <Pill className="font-medium w-5 h-5 " />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              +20.1% respecto al mes anterior
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Tratamientos
            </CardTitle>
            <Bandage className="font-medium w-5 h-5 " />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">
              +15.2% respecto al mes anterior
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Eventos
            </CardTitle>
            <Calendar1 className="font-medium w-5 h-5 " />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">43</div>
            <p className="text-xs text-muted-foreground">
              +5.4% respecto a la semana anterior
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Informes
            </CardTitle>
            <FileText className="font-medium w-5 h-5 " />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              +0.5% respecto al mes anterior
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 grid-cols-2 mt-8">
        <Card>
            <CardHeader>
                <CardTitle>Tratamiento del dolor</CardTitle>
                <CardDescription>Visualiza cuando te ha dolido</CardDescription>

            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dashed" />}
                    />
                    <Bar dataKey="nopain" fill="var(--color-nopain)" radius={4} />
                    <Bar dataKey="pain" fill="var(--color-pain)" radius={4} />
                </BarChart>
                </ChartContainer>
            </CardContent>
            
        </Card>
        
      </div>
            
    </div>
  )
}