import React from 'react'

import { FaArrowLeft, FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import PageTitle from '../../components/pagetitle/PageTitle'

const SignUp = () => {
  return (
    <section className='loginpage'>
        <PageTitle pagetitle="Resturant । Sign Up" pageicon="https://res.cloudinary.com/doolocyaf/image/upload/v1716623177/Resturant%20Project/profile_dyu4nl.png"></PageTitle>

        <div className="loginform">
            <h1 style={{textAlign: "center", fontSize: "4rem", marginBottom: "2rem"}}>Sign Up</h1>
            <form >
               <div className="inputdiv">   
                    <input type="name" name="name" />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="inputdiv">   
                    <input type="email" name="email" />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="inputdiv">
                    <input type="password" name="password"/>
                    <label htmlFor="password">Password</label>
                </div>
                
                <input type="submit" value="Sign Up" />
                <div className="social">
                     <p> Already registered? 
                        <a href="/signin" className='signuplink'>Go to sign in</a>
                    </p>
                     <p>Or sign in with</p>
                     <p> <FaGoogle /> <FaFacebook /> <FaGithub /> </p>
                     <p><a href="/"> <FaArrowLeft style={{fontSize: "2rem", margin:"0 1rem 0 0"}} /> Back to home </a></p>
                </div>
            </form>
        </div>

        <div className="image">
            <img src="https://res.cloudinary.com/doolocyaf/image/upload/v1716614115/Resturant%20Project/login-page_nbjuik.png" alt="login" />
        </div>
 
     </section>
  )
}

export default SignUp
