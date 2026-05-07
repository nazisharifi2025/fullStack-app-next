"use client"
import { Button } from "@/components/ui/button"
import ProductCart from "./productCart"
import { useEffect, useState } from "react"
import { getAllProducts } from "@/lib/action/product.action"

function AllProductlists({ limit , title}: {limit?:number , title?:string}) {
  const [link , setLink] = useState<any>('http://localhost:8000/api/product?page=1');
  const [list , setList] = useState<any>([]);
  useEffect(()=>{
    async function getData(){
        const products = await getAllProducts(link);
        setList(products);
    }
    getData()
  },[link]);
  if(list.length === 0){
    return null; 
  }
  return (
    <div className='my-16 flex flex-col justify-center gap-4'>
      <h1 className='h2-bold mb-4'>{title? title : "New Arrivals"}</h1>
      <div className=' w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {list.data.length > 0 && list.data.map((product:any,index:number)=>(
        <ProductCart key={index} product={product} />
        )) 

        }
      </div>
      <div  className=" w-full flex justify-center items-center gap-4 flex-row">
      {list.meta.links.map((x:any)=>(
            <Button onClick={()=> setLink(x.url? x.url : `http://localhost:8000/api/product?page=${list.meta.current_page}`)} key={x.label} className=" rounded-md" variant={x.active ?  "default" : "outline"} dangerouslySetInnerHTML={{ __html: x.label}} ></Button>
        ))}
        </div>
        
    </div>
  )
}

export default AllProductlists