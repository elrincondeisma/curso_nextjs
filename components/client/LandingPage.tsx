import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell, Calendar, Clock, Pill, Smartphone, Users } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Pill className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">MediRemind</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Características
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            Cómo funciona
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contacto
          </Link>
        </nav>
      </header>
      <main className="flex-1 mx-auto">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Nunca olvides tu medicación
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  MediRemind te ayuda a gestionar tus recordatorios de medicación y tratamientos de forma fácil y eficiente.
                </p>
              </div>
              <div className="space-x-4">
                <Button><Link href="/dashboard">Comenzar gratis</Link></Button>
                <Button variant="outline">Saber más</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Características principales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Bell className="w-12 h-12 mb-4 text-primary" />
                  <CardTitle>Recordatorios personalizados</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Configura recordatorios para cada medicamento con horarios específicos y frecuencias personalizadas.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Calendar className="w-12 h-12 mb-4 text-primary" />
                  <CardTitle>Calendario de tratamientos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Visualiza todos tus tratamientos en un calendario intuitivo para una mejor planificación.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="w-12 h-12 mb-4 text-primary" />
                  <CardTitle>Compartir con cuidadores</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Permite que familiares o cuidadores accedan a tu información médica y reciban notificaciones.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Cómo funciona</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Smartphone className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">1. Descarga la app</h3>
                <p>Disponible para iOS y Android. Instálala en tu dispositivo móvil.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Pill className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">2. Configura tus medicamentos</h3>
                <p>Añade tus medicamentos y configura los horarios de toma.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Clock className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">3. Recibe recordatorios</h3>
                <p>Obtén notificaciones en el momento adecuado para tomar tu medicación.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Comienza a gestionar tu salud hoy
                </h2>
                <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
                  Únete a miles de usuarios que ya están mejorando su adherencia al tratamiento con MediRemind.
                </p>
              </div>
              <Button className="bg-white text-primary hover:bg-primary-foreground">Registrarse gratis</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 MediRemind. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Términos de servicio
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  )
}