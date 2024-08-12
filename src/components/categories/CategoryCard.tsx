import { Card } from '@/components/ui/card'
import imageUrlParser from '@/lib/imageUrlParser'
import React from 'react'

type TCategoryProps = {
    imageUrl:string ,
    categoryName: string
}

export default function CategoryCard({imageUrl ,categoryName} : TCategoryProps) {
  return (
    <Card className="border rounded-0 relative overflow-hidden col-span-4 h-[200px]  md:h-[321px]">
    <img src={imageUrlParser(imageUrl)} alt={categoryName} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-primary bg-opacity-70  flex items-center justify-center transition-opacity duration-300">
      <h3 className="text-secondary text-lg font-semibold uppercase">{categoryName}</h3>
    </div>
  </Card>
  )
}
