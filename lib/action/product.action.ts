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