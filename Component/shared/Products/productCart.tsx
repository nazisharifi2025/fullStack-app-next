import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import ProductPrice from './productPrice'
import Link from 'next/link'

function ProductCart({product}: {product:any}) {

  return (
    <Card>
        <CardHeader>
          <Link href={`/products/${product.id}`}>
           <Image
  src={`http://localhost:8000/storage/${product.images[0].img_url}`}
  alt="product image"
  width={200}
  height={200}
  unoptimized
  className=' w-fit mx-auto h-72'
/>
</Link>
        </CardHeader>
        <CardContent className=' flex flex-col gap-2'>
                <h1 className='text-sm'>{product.brand}</h1>
                <Link href={`products/${product.id}`}>
            <h1 className="h3-bold">{product.name}</h1>
            </Link>
                <h1 className='text-4xl text-black'>{product.id}</h1>
            <div className=' flex-between px-1'>
                <h1 className='text-sm'>{product.stock}</h1>
                <ProductPrice price={product.price} />
            </div>
        </CardContent>
    </Card>
  )
}

export default ProductCart