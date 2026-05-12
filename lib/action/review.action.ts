export async function getReview(){
    const data = await fetch("http://localhost:8000/api/reviews");
    const response = await data.json();
    return response;
}