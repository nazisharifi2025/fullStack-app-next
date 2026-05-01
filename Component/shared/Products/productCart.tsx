import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

function ProductCart({product}: {product:any}) {
//     const imageUrl =
//   product.images?.[0]?.img_url
//     ? `http://localhost:8000/storage/${product.images[0].img_url}`
//     : "/no-image.png";
  return (
    <Card>
        <CardHeader>
            <Image src={product.images?.[0]?.img_url?`http://localhost:8000/storage/${product.images[0].img_url}`: "not found"} className='h-full w-full' alt='productImage' height={200} width={200} unoptimized />
        </CardHeader>
        <CardContent>
            <div className=' flex-between px-1'>
                <h1 className='text-sm'>{product.brand}</h1>
                <h1 className='text-sm'>{product.stock}</h1>
            </div>
            <h1 className="h3-bold">{product.name}</h1>
        </CardContent>
    </Card>
  )
}

export default ProductCart