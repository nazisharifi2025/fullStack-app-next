import ProductCart from "./productCart"

async function Productlists({productList , title}: {productList:any , title?:string}) {
  
  return (
    <div className='my-16'>
      <h1 className='h2-bold mb-4'>{title? title : "New Arrivals"}</h1>
      <div className=' w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {productList.data.map((product:any,index:number)=>(
        <ProductCart key={index} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Productlists