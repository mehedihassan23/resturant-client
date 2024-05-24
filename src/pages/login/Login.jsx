import React from 'react'

import { FaArrowLeft, FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import PageTitle from '../../components/pagetitle/PageTitle'

import './login.css'

const Login = () => {
  return (
     <section className='loginpage'>
        <PageTitle pagetitle="Resturant । Sign in" pageicon="https://res.cloudinary.com/doolocyaf/image/upload/v1716623177/Resturant%20Project/profile_dyu4nl.png"></PageTitle>
       
        <div className="image">
            <img src="https://res.cloudinary.com/doolocyaf/image/upload/v1716614115/Resturant%20Project/login-page_nbjuik.png" alt="login" />
        </div>

        <div className="loginform">
            <h1 style={{textAlign: "center", fontSize: "4rem", marginBottom: "2rem"}}>Login</h1>
            <form >
                <div className="inputdiv">   
                    <input type="email" name="email" />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="inputdiv">
                    <input type="password" name="password"/>
                    <label htmlFor="password">Password</label>
                </div>
                <div className="inputdiv">
                    <input type="text" name='captha' placeholder='Type The Captha' />
                </div>
                <input type="submit" value="Sign In" />
                <div className="social">
                     <p>New here? 
                        <a href="/signup" className='signuplink'> create a new account</a>
                    </p>
                     <p>Or sign in with</p>
                     <p> <FaGoogle /> <FaFacebook /> <FaGithub /> </p>
                     <p><a href="/"> <FaArrowLeft style={{fontSize: "2rem", margin:"0 1rem 0 0"}} /> Back to home </a></p>
                </div>
            </form>
        </div>
 
     </section>
  )
}

export default Login
