import { ArrowUpRight, ShoppingBasket } from 'lucide-react'
import React, { useEffect, useState } from 'react'

function ProductReport() {
    const [currentProduct , setCurrentProduct] = useState<{CurrentProduct:number}>({CurrentProduct:0});
    const [prevProduct , setPrevProduct] = useState<{prevProduct:number}>({prevProduct:0});
    useEffect(()=>{
        async function getDataProduct(){
            const data = await fetch('http://localhost:8000/api/dashboard/CurrentMonthlyProduct');
            const response = await data.json();
            const data2 = await fetch('http://localhost:8000/api/dashboard/PrevMonthlyProduct');
            const response2 = await data2.json();
            setCurrentProduct(response);
            setPrevProduct(response2)
        }
        getDataProduct()
    },[]);
  return (
     <div className="flex flex-col space-y-3">
          <span className="flex gap-1 items-center dark:text-stone-50 text-gray-500 text-sm">
            <ShoppingBasket size={18} /> Total Products
          </span>
          <span className="text-gray-400 text-xs dark:text-stone-100">
            {prevProduct.prevProduct} previous month
          </span>
          <span className="text-2xl font-bold">{currentProduct.CurrentProduct}</span>
          <span className="flex gap-1 items-center text-xs">
            <ArrowUpRight size={18} className="text-green-600" /> 28.5% vs
            previous month
          </span>
        </div>
  )
}

export default ProductReport