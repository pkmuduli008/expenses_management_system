import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';
import Spinner from './Spinner';

const Login=()=> {
    const [loading,setLoading]=useState(false);
    const navigate=useNavigate();

    const submitHandler=async (e)=>{
        e.preventDefault();
        try {
            setLoading(true);
            const {data}=await axios.post('/users/login',{
                email:e.target[0].value,
                password:e.target[1].value,
            })
            console.log('login success');
            setLoading(false);
            navigate('/');
            localStorage.setItem('user',JSON.stringify({...data,password:''}))
        } catch (error) {
            console.log('something went wrong');
            setLoading(false);
        }
        
        
    }
  return (
    <>
    <div className="register-page card">
        {loading && <Spinner/>}
        <h3 className="header mb-4">Login page</h3>
    <form onSubmit={submitHandler}>
    <div>
    
        <div className="form-group">
            <label htmlFor="inputEmail">Email address</label>
            <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
            
        </div>
        <div className="form-group">
            <label htmlFor="inputPassword">Password</label>
            <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
        </div>
        
       
        <button type="submit" className="btn btn-primary m-3">Login</button>
        <p className='mt-2'> New user <Link to="/register">register</Link></p>
    </div>
    </form>

    </div>
    </>
  )
}

export default Login