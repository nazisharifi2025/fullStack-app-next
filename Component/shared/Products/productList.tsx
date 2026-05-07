import { Button } from "@/components/ui/button"
import ProductCart from "./productCart"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

async function Productlists({productList, limit , title}: {productList:any ,limit?:number , title?:string}) {
  
  return (
    <div className='my-16 flex flex-col justify-center gap-4'>
      <h1 className='h2-bold mb-4'>{title? title : "New Arrivals"}</h1>
      <div className=' w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {productList.data.slice(0 , limit).map((product:any,index:number)=>(
        <ProductCart key={index} product={product} />
        ))}
      </div>
          <Link href='/products' className=" w-fit mx-auto">
        <Button className="rounded-md my-4">
          See All Products <ArrowRight/ > 
        </Button>
        </Link>
    </div>
  )
}

export default Productlists