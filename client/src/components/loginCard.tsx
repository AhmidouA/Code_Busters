import { useState } from 'react';
import '../styles/forms.css'
import { endpoints, requestAPI } from '../api/api';

export default function LoginCard(){
    const [noCount, setNoCount]= useState(false);

    const imgStyle = {
        width: "8rem", 
        height: "auto",
        marginTop: "1rem"
    }

    return(
        <>      
        {
            noCount ? 
            <div className="form-box">
                <img src="/logo-hackathon.png" alt='logo' style={imgStyle}/>
                <div className="form-details">
                    <h2>Welcome</h2>
                    <p>To register, please fill in the form below</p>
                </div>
                <div className="form-content">
                    <h2>SIGN IN</h2>
                    <form action="#">
                        <div className="input-field">
                            <input type="text" value="John" required/>
                            <label htmlFor='firstName'>First Name</label>
                        </div>
                        <div className="input-field">
                            <input type="text" value="Doe" required/>
                            <label htmlFor='lastName'>Last Name</label>
                        </div>
                        <div className="input-field">
                            <input type="text" value="johndoe@email.net" required/>
                            <label htmlFor='email'>Email</label>
                        </div>
                        <div className="input-field">
                            <input type="password" value="password" required/>
                            <label htmlFor='password'>Password</label>
                        </div>
                        <div className="input-field">
                            <input type="password" value="password" required/>
                            <label>Repeat Password</label>
                        </div>
                        <button type="submit" onClick={()=>{requestAPI(endpoints.helloworld)}}>Sign</button>
                    </form>
                    <div className="bottom-link">
                        You have an account
                        <a href="#" id="signup-link" onClick={()=>{setNoCount(!noCount)}}>Login</a>
                    </div>
                </div>
            </div>
            :
            <div className="form-box">
                <img src="/logo-hackathon.png" alt='logo' style={imgStyle}/>
                <div className="form-details">
                    <h2>Welcome Back</h2>
                    <p>Please log in using your personal information to stay connected with us.</p>
                </div>
                <div className="form-content">
                    <h2>LOGIN</h2>
                    <form action="#">
                        <div className="input-field">
                            <input type="text" required/>
                            <label>Email</label>
                        </div>
                        <div className="input-field">
                            <input type="password" required/>
                            <label>Password</label>
                        </div>
                        <a href="#" className="forgot-pass-link">Forgot password?</a>
                        <button type="submit">Log In</button>
                    </form>
                    <div className="bottom-link">
                        Don't have an account?
                        <a href="#" id="signup-link" onClick={()=>{setNoCount(!noCount)}}>Signup</a>
                    </div>
                </div>
            </div> 
        }
        </>
        
    );
}