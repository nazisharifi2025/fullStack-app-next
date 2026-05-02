import React from 'react'

function ProductPrice({price}:{price:string}) {
    const [integer , floate] = price.split('.');
  return (
    <div>
        <span className=' text-sm  align-super'>AFN</span>
        <h1 className=" text-xl">{integer}</h1>
         <span className=' text-sm  align-super'>{floate}</span>
    </div>
  )
}

export default ProductPrice