"use server"
export async function Login(prevState: unknown , formData:FormData){
    console.log(formData);

    const data = await fetch('http://localhost:8000/api/auth' , {
        body: formData,
        headers: {
             accept : "application/json",
        },
        method: "POST"
    });
    const  response = await data.json();
    console.log(response);
    return response
    // loveable
    // qaa.af

}

export async function getUser(token: string){
    const data = await fetch('http://localhost:8000/api/user' , {
        headers: {
            Auhtorization : `Bearer ${token}`,
            accept : "application/json",
        }
    });
    const response = await data.json();
    console.log(response);
    return response;
}