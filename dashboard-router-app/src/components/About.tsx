import {useNavigate } from "react-router-dom";

const About = ()=>{
    const navigate = useNavigate();

    const GoToHome = ()=>{
        navigate("/");
    }

    const GoToContact = ()=>{
        navigate("/contact");
    }

    return(
        <>
            <h1>This is the About Page</h1>
            <button onClick={GoToContact}>Go to Contact Page</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={GoToHome}>Go to Home Page</button>
        </>
    )
}

export default About;