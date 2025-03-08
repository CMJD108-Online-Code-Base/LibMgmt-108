import axios from "axios";

const baseAuthUrl = "http://localhost:8086/booklib/api/v1/auth";

const SignUpTask = async(signUp :any) =>{
    console.log(signUp)
    try{
        const signUpResponse = await axios.post(
            `${baseAuthUrl}/signup`,    
             signUp
        );
        console.log(signUpResponse.data.token)
        return signUpResponse.data.token
    }catch(err){
        console.error(err)
        throw err
    }
   
   

}
