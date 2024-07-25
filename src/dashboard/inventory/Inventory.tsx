import React from 'react'
import Image from '../../assets/StockCake-Gym Workout Session_1721046342.jpg'
import { Delete, DeleteIcon, Edit, Trash } from 'lucide-react'
export default function Inventory() {
  return (
    <div className='grid grid-cols-12 text-secondary items-center gap-4 w-full'>
        <div className='flex  col-span-4 items-center gap-4'>
            <img className='w-[80px] h-[80px] object-contain' src={Image} alt="" />
            <h1>Dumbbells</h1>
        </div>

        <div className='col-span-2'>
            $299
        </div>
        <div className='col-span-2'>in stock</div>
        <div className="col-span-4 justify-end ">
            <ul className='flex list-none gap-4 justify-end'>
                <li><Edit className='text-secondary'/></li>
                <li><Trash className='text-secondary'/></li>

            </ul>
        </div>

        
        
    </div>
  )
}
