export async function GetProduct(){
    const data = await fetch('http://localhost:8000/api/product');
    const response = await data.json();
    console.log(response)
    return response;
}
export async function getAllProducts(url:string){
    const data = await fetch(url);
    const response = await data.json();
    return response ;
}