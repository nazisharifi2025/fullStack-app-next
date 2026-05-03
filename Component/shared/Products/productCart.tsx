import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'
import ProductPrice from './productPrice'

function ProductCart({product}: {product:any}) {
  return (
    <Card>
        <CardHeader>
           <Image
  src={
    product.images?.[0]?.img_url
      ? `http://localhost:8000/storage/${product.images[0].img_url}`
      : "/no-image.png"
  }
  alt="product image"
  width={200}
  height={200}
  unoptimized
/>
        </CardHeader>
        <CardContent className=' flex flex-col gap-2'>
                <h1 className='text-sm'>{product.brand}</h1>
            <h1 className="h3-bold">{product.name}</h1>
            <div className=' flex-between px-1'>
                <h1 className='text-sm'>{product.stock}</h1>
                <ProductPrice price={product.price} />
            </div>
        </CardContent>
    </Card>
  )
}

export default ProductCart