import Productlists from "@/Component/shared/Products/productList";
import SliderBanner from "@/Component/slider";
import { GetProduct } from "@/lib/action/product.action";

export default async function Home() {
      const productList = await GetProduct();
 return(
  <div className=" w-full ">
  <SliderBanner />
  <Productlists productList={productList} limit={4} title="New Arrivals" />
  </div>
 )
}
