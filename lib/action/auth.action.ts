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
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
}
    });
    const response = await data.json();
    console.log(response);
    return response;
}

export async function SignUpForm(prevState: unknown , formData:FormData){
    try{
        const password = formData.get('password');
        const ConfirmPassword = formData.get('confirmPassword');
        if(password !== ConfirmPassword){
            return {
                message: "not mutched",
                status: false
            }      
        }
        else{
    const data = await fetch('http://localhost:8000/api/signUp' , {
        body: formData ,
        headers:{
            Accept: "application/json",
        }
    })
    const response = await data.json();
    return {
        message: response,
        status: true
    }
}
    }
    catch(err){
        return{
            message: "somting went wrong",
            status : false
        }
    }
}