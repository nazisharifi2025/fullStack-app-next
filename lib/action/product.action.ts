export async function GetProduct(){
    const data = await fetch('http://localhost:8000/api/product');
    const response = await data.json();
    return response;
}
export async function getAllProducts(url:string){
    const data = await fetch(url);
    const response = await data.json();
    return response ;
}
export async function getSingleProduct(id : string){
    const data = await fetch(`http://localhost:8000/api/product/${id}`);
    const response = await data.json();
    return response;
}
export async function fetchAllProduct(url:string){
    const data = await fetch(url);
    const response = await data.json();
    return response.allProduct;
}
export async function StoreProduct(prevState: unknown , formData:FormData){
    const formdata = {
        name: formData.get('product_name'),
        price: formData.get('product_price'),
        brand: formData.get('product_brand'),
        category: formData.get('product_category'),
        stock: formData.get('product_stock'),
        description: formData.get('product_description'),
    }
    const data = await fetch('http://localhost:8000/api/dashboard/store-product',
        {
            headers:{
                 accept : "application/json",
                 contentType: "application/json"
            },
        }
    );
    const response = await data.json();
    if(response === 'ok'){
        console.log('data added');
        return {
            data: "data added seccessfully",
            status: true
        }
    }
    else{
         return {
            data: "Somting went Wrong",
            status: false
        }
    }

}