import AllProductlists from '@/Component/shared/Products/all-productList';
import { GetProduct } from '@/lib/action/product.action'

async function page() {
  return (
    <div>
        <AllProductlists title='All Products'  />
    </div>
  )
}

export default page