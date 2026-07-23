export async function getAllUser (){
    const data = await fetch('http://localhost:8000/api/dashboard/all-users');
    const response = await data.json();
}