import { Skeleton } from "@/components/ui/skeleton";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge"

export interface Medicina {
    id: number;
    nombre: string;
    descripcion: string;
    imagen: string;
  }
  
  interface MedicinaCardProps {
    medicine: Medicina;
  }
export default function MedicinaCard({medicine}: MedicinaCardProps) {
  return (
        <Card className="hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer">
            <CardHeader>
                <AspectRatio ratio={16 / 9}>
                    <Image src={medicine.imagen} alt={medicine.nombre} className="rounded-md object-cover" layout="fill" objectFit="cover" />
                </AspectRatio>
                <CardTitle>{medicine.nombre}</CardTitle>
                <CardDescription>{medicine.descripcion}</CardDescription>
            </CardHeader>
            <CardFooter>
                <div className="flex items-center justify-between">
                    <Badge  className="text-xs bg-purple-800 text-purple-200" >
                        {medicine.nombre}
                    </Badge>
                </div>
            </CardFooter>
           
            
        </Card>
        
  )
}