import { useContext, useState } from 'react';
import '../styles/forms.css'
import { endpoints, requestAPI } from '../datas/api';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../datas/context';


export default function LoginCard(){
    const [noCount, setNoCount]= useState(false);
    const navigate = useNavigate();
    const userContext = useContext(UserContext);
    if (!userContext) {
        throw new Error("UserContext must be used within a UserProvider");
      }
    
    const { user, setUser } = userContext;

    const imgStyle = {
        width: "8rem", 
        height: "auto",
        marginTop: "1rem"
    }

    const token = localStorage.getItem('token');
    const parsedToken = token ? JSON.parse(token) : null;
    if(parsedToken){
        requestAPI(endpoints.login, {token : parsedToken})
    }

    const handleLoginSubmit = (e:React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            email: { value: string };
            password: { value: string };
        };
        const data = {
            email: target.email.value, 
            password: target.password.value,
        }
        requestAPI(endpoints.login, target)
            .then(res => {
                
                return res.json()
            })
            .then(res => {
                setUser((user: any)=> user = res.body);
                localStorage.setItem('token', JSON.stringify(res.body.token));
                navigate('/dashboard')
            })
        .catch((e)=>{
            navigate('/dashboard')
            // Alert with req.body.message
        })
    }

    const handleRegisterSubmit = (e:React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            firstName: { value: string};
            lastName: { value: string };
            email: { value: string };
            password: { value: string };
        };
        const data = {
            firstName: target.email.value,
            lastName: target.email.value,
            email: target.email.value, 
            password: target.password.value,
        }
        requestAPI(endpoints.register, target)
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
                    <form onSubmit={handleRegisterSubmit}>
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
                        <button type="submit">Sign</button>
                    </form>
                    <div className="bottom-link">
                        You have an account ?
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
                    <form onSubmit={handleLoginSubmit}>
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