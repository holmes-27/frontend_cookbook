import { Link, useNavigate } from "react-router-dom";

const Contact = ()=>{
    const navigate = useNavigate();

    const GoToAbout = ()=>{
        navigate("/about");
    }

    return(
        <>
            <h1>This is the Contact Page</h1>
            <button onClick={GoToAbout}>Go to About Page</button>
            &nbsp;&nbsp;&nbsp;
            <Link to="/">Click here to view the home page</Link>
        </>
    )
}

export default Contact;