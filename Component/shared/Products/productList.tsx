import { GetProduct } from '@/lib/action/product.action'
import React from 'react'

async function Productlists({productList , title}: {productList:any , title?:string}) {
  return (
    <div className='my-10'>
      <h1>{title? title : "New Arrivals"}</h1>
    </div>
  )
}

export default Productlists