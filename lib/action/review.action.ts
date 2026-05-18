export async function getReview(){
    const data = await fetch("http://localhost:8000/api/reviews");
    const response = await data.json();
    return response;
}
export async function createReview(preves:any , formData:FormData){
    const data = await fetch("http://localhost:8000/api/reviews" ,{
        body: formData,
        headers:{
            accept : "application/json",
        },
        method: "POST"
    });
}