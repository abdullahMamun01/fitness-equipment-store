import React from 'react'
import Inventory from './Inventory'
import { useProductsQuery } from '@/redux/api/productsApi'

export default function InventoryList() {
  const {data , isLoading } = useProductsQuery('?limit=20')

  return (
    <div className="w-full">
      <div className=''>
        {data?.slice().reverse().map((pd) => (
          <Inventory
            key={pd._id}
            name={pd.name}
            id={pd._id}
            price={pd.discountedPrice}
            stock={pd.stock}
            image={pd.img}

          />
        ))}
      </div>
    </div>
  );
}
