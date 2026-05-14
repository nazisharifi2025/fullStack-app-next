import ProductImage from '@/Component/shared/Products/product-image';
import ProductPrice from '@/Component/shared/Products/productPrice';
import TextArea from '@/Component/shared/reviews/comment';
import ReviewList from '@/Component/shared/reviews/review-list';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { getSingleProduct } from '@/lib/action/product.action';
import { getReview } from '@/lib/action/review.action';

async function page({params}: {params:Promise<{id:string}>}) {
    const {id } = await params ;
    const product = await getSingleProduct(id);
    const review = await getReview();
    const reviewResults = review.data.filter((r:any)=> r.product_id === product.id);
    console.log(reviewResults);
  return (           
    <div className=' w-full'>                                                                                                                                                                     
     <section className=' grid grid-cols-5 py-2 gap-3 '>
      <div className=' col-span-2 '>
        {/* image */}
        <ProductImage images={product.images} />
      </div>
      <div className=' col-span-2 flex flex-col gap-12 py-12'>
        {/* content */}
        <div className='flex flex-col gap-8 p-2'>
          <div className='flex justify-between items-center  px-8'><p>{product.product_details?.brand}</p><p> {product.product_details?.category}</p></div>
          <h1 className=' h2-bold'>{product?.name}</h1>
          <div className='flex gap-3 '>
            <ProductPrice price={product.price} className="bg-green-100 text-green-800 px-4 py-0.5 rounded-3xl" />
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-bold text-xl'>Description</p>
          <p>{product.product_details?.description}</p>
        </div>
      </div>
      <div className=' col-span-1  pr-6 py-12'>
        {/* add to cart */}
        <Card className='px-4'>
          <CardContent className='flex gap-5 flex-col'>
            <div className='flex justify-between'>
              <p>Price</p>
             <ProductPrice price={product.price} />
            </div>
            <div className='flex justify-between'>
              <div>Status</div>
              {product?.stock > 0 ? (
                <Badge variant="outline">
                  Available
                </Badge>
                ):(<Badge variant="destructive">UnAvailable</Badge>)}
            </div>
            {product?.stock >0 &&(
              <div className='w-full flex-center'>
                {/* button */}
                <Button className='rounded-md'>Add To Cart</Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
    <div className=' w-full grid grid-cols-2 space-x-4 gap-7 p-4'>
        <ReviewList reviews={reviewResults} />
      <div>
        <TextArea />
      </div>
    </div>
    </div>
  )
}

export default page