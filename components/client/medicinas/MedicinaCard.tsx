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
        <Card className="">
            <CardHeader>
                <AspectRatio ratio={16 / 9}>
                    <Image src={medicine.imagen} alt={medicine.nombre} className="rounded-md object-cover" layout="fill" objectFit="cover" />
                </AspectRatio>
                <CardTitle>{medicine.nombre}</CardTitle>
                <CardDescription>{medicine.descripcion}</CardDescription>
            </CardHeader>
           
            
        </Card>
        
  )
}