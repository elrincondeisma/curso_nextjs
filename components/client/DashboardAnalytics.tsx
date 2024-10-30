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
type TipoTratamiento = "Dupixent" | "Mounjaro"
interface Tratamiento {
    fecha: Date
    tipo: TipoTratamiento
  }
  const addDays = (date: Date, days: number): Date => {
    const result = new Date(date)
    result.setDate(result.getDate() + days)
    return result
  }
  
 
  
  // Función para generar tratamientos de ejemplo
  const generarTratamientosEjemplo = (): Tratamiento[] => {
    const hoy = new Date()
    return [
      { fecha: addDays(hoy, 2), tipo: "Dupixent" },
      { fecha: addDays(hoy, 5), tipo: "Mounjaro" },
      { fecha: addDays(hoy, 10), tipo: "Dupixent" },
      { fecha: addDays(hoy, 15), tipo: "Mounjaro" },
      { fecha: addDays(hoy, 20), tipo: "Mounjaro" },
    ]
  }  
export default function DashboardAnalytics() {
    const [date, setDate] = useState({
        from: new Date(),
        to: new Date(new Date().setDate(new Date().getDate() + 7)),
      });
      const [tratamientos] = React.useState<Tratamiento[]>(generarTratamientosEjemplo())

      // Función para obtener el tipo de tratamiento para una fecha dada
      const obtenerTipoTratamiento = (fecha: Date): TipoTratamiento | undefined => {
        const tratamiento = tratamientos.find(t => 
          t.fecha.getDate() === fecha.getDate() &&
          t.fecha.getMonth() === fecha.getMonth() &&
          t.fecha.getFullYear() === fecha.getFullYear()
        )
        return tratamiento?.tipo
      }
    

  return (
    <div className="p-8">
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
                <CardDescription>Visualiza cuando te ha dolido mas</CardDescription>

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
        <Card className="w-full max-w-3xl mx-auto">
            <CardHeader>
                <CardTitle>Calendario de Tratamientos Médicos</CardTitle>
                <CardDescription>Visualiza tus tratamientos programados</CardDescription>
            </CardHeader>
            <CardContent>
                <Calendar
                mode="single"
                className="rounded-md border shadow"
                modifiers={{
                    tratamiento: (date) => obtenerTipoTratamiento(date) !== undefined,
                }}
                modifiersStyles={{
                    tratamiento: { fontWeight: "bold" },
                }}
                numberOfMonths={2}
                components={{
                    DayContent: ({ date }) => {
                    const tipo = obtenerTipoTratamiento(date)
                    return (
                        <div className="relative w-full h-full flex items-center justify-center">
                        {date.getDate()}
                        {tipo && (
                            <span
                            className={`absolute bottom-0 left-0 w-full h-1 ${
                                tipo === "Dupixent" ? "bg-blue-500" :
                                tipo === "Mounjaro" ? "bg-red-500" :
                                "bg-red-500"
                            }`}
                            />
                        )}
                        </div>
                    )
                    },
                }}
                />
                <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="outline" className="border-blue-500 text-blue-500">
                Dupixent
                </Badge>
                <Badge variant="outline" className="border-red-500 text-red-500">
                Mounjaro
                </Badge>
                
                </div>
                
            </CardContent>
            </Card>
      </div>
            
    </div>
  )
}