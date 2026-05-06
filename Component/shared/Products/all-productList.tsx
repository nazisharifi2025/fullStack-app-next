import { Button } from "@/components/ui/button"
import ProductCart from "./productCart"
import { ArrowRight } from "lucide-react"

async function AllProductlists({productList, limit , title}: {productList:any ,limit?:number , title?:string}) {
  
  return (
    <div className='my-16 flex flex-col justify-center gap-4'>
      <h1 className='h2-bold mb-4'>{title? title : "New Arrivals"}</h1>
      <div className=' w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {productList.data.slice(0 , limit).map((product:any,index:number)=>(
        <ProductCart key={index} product={product} />
        ))}
      </div>
      <div  className=" w-full flex justify-center items-center gap-4 flex-row">
      {productList.meta.links.map((x:any)=>(
            <Button key={x.label} className=" rounded-md" variant={x.active ?  "default" : "outline"} dangerouslySetInnerHTML={{ __html: x.label}} ></Button>
        ))}
        </div>
        
    </div>
  )
}

export default AllProductlists