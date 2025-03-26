import { useState } from "react";

function Login(){
    const [mail,setMail] = useState("");
    const [passwd, setPasswd] = useState("");
    const [message,setMessage] = useState("");

    const formValidate = ()=>{
        setMessage("Processing...")
        if (mail == "abc@gmail.com" && passwd == "abc"){
            setTimeout(()=>{
                setMessage("Successfully Loggedin");
            },3000)
        }
        else{
            setTimeout(()=>{
                setMessage("Invalid details");
            },3000)
        }
    }

    return(
        <>
            <h1>Login App</h1>
            <input type="email" placeholder="Enter your email" onChange={(e)=>setMail(e.target.value)}/><br />
            <input type="password" placeholder="Enter your password" onChange={(e)=>setPasswd(e.target.value)}/> <br />
            <button onClick={formValidate}>Sign in</button>
            {message && <p>{message}</p>}
        </>
    )
}

export default Login;