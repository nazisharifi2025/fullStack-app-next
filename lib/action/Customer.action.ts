// import { revalidatePath } from "next/cache";

export async function getAllUser ():Promise<any>{
    const data = await fetch('http://localhost:8000/api/dashboard/all-users');
    const response = await data.json();
    return response;
}
export async function deleteUser(prevState: unknown , formData: FormData){
    try{
    const data = await fetch(`http://localhost:8000/api/dashboard/delete-user/${formData.get("id")}`,{
        method: "DELETE",
    });
    const respons = await data.json();
    // revalidatePath('dashboard/Customers')
    return {
        message: "user Deleted successfully",
        state: true
    };
}catch(err){
      return {
        message: "user not deleted",
        state: true
    };
}
}
export async function getCustomer(){
    const data = await fetch('http://localhost:8000/api/dashboard/all-users');
    const respons = await data.json();
    return respons;
}