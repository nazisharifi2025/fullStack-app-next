import AllProductlists from '@/Component/shared/Products/all-productList';
import { GetProduct } from '@/lib/action/product.action'

async function page() {
   const products = await GetProduct();
  return (
    <div>
        <AllProductlists productList={products} title='All Products'  />
    </div>
  )
}

export default page