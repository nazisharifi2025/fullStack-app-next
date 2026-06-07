"use server"
export async function Login(prevState: unknown , formData:FormData){
    console.log(formData);
    try{

    const data = fetch('http://localhost:8000/api/auth' , {
        body: formData,
        headers: {
             accept : "application/json",
        },
        method: "POST"
    });
    const  response = (await data).json();
    // console.log(response);
    return {
        success: true,
        message: "you are logdin"
    }
    // loveable
    // qaa.af
}
catch(err){
     return {
        success: false,
        message: "you are not login somting went wrong"
    }
}

}