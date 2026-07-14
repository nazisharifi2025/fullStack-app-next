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
    try{
    const formdata = {
        name: formData.get('product_name'),
        price: formData.get('product_price'),
        brand: formData.get('product_brand'),
        category: formData.get('product_category'),
        stock: formData.get('product_stock'),
        man_date: formData.get('product_man_date'),
        expire_date: formData.get('product_expire_date'),
        description: formData.get('product_description'),
        image1: formData.get('image_url1'),
        image2: formData.get('image_url2')
    }
    const data = await fetch('http://localhost:8000/api/dashboard/store-product',
        {
            method: "POST",
            headers:{
                 accept : "application/json",
                 "Content-type": "application/json"
            },
            body: JSON.stringify(formdata),
        }
    );
    const response = await data.json();
    console.log(data.status);
    console.log(response);
    if(data.ok){
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
}catch(error){
    console.log(error)
}

}