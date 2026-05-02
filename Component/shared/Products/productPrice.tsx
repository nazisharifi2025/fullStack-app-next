import React from 'react'

function ProductPrice({price}:{price:string}) {
    const [integer , floate] = price.split('.');
  return (
    <div>
        <span className=' text-sm  align-super'>AFN</span>
    </div>
  )
}

export default ProductPrice