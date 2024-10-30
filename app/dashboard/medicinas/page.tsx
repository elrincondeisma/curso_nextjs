"use client";
import { useState } from "react";
import { PlusCircle, Pill, Search } from 'lucide-react';
import { Skeleton } from "@/components/ui/skeleton";
import MedicinaCard, { Medicina } from "@/components/client/medicinas/MedicinaCard";



export default function Page() {
    const [medicinas, setMedicinas] = useState<Medicina[]>([
        {
            id: 1,
            nombre: "Medicina 1",
            descripcion: "Descripcion de la medicina 1",
            imagen: "https://media.licdn.com/dms/image/v2/C4E12AQFzIJ0X5DaUgw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1617680881302?e=2147483647&v=beta&t=aQpBoqyVmzBZzJtplQK-mtetVoSnu2cduisVqkjnzv0",
        },
        {
            id: 2,
            nombre: "Medicina 2",
            descripcion: "Descripcion de la medicina 2",
            imagen: "data:image/jpeg;base64,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",
        },
        {
            id: 3,
            nombre: "Medicina 3",
            descripcion: "Descripcion de la medicina 3",
            imagen: "data:image/jpeg;base64,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",
        },
        {
            id: 4,
            nombre: "Medicina 4",
            descripcion: "Descripcion de la medicina 4",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY4XsAmZvZhZbNBAgy_GKvbi8OdhFf83QigA&s",
        }
    ]);
   
  return (
    <>  
        <h1 className="text-3xl font-bold">Medicinas</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {medicinas.map((medicine) => (
                <MedicinaCard key={medicine.id} medicine={medicine} />
            ))}
        </div>

    </>
  )
}
