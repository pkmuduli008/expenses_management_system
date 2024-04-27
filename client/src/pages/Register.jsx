import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';
import Spinner from './Spinner';

const Register=()=> {

    const [loading,setLoading]=useState(false);
    const navigate=useNavigate();

    const submitHandler=async (e)=>{
        
         e.preventDefault();
        try {
            setLoading(true);
            const {data}=await axios.post('/api/v1/users/register/',{
                name:e.target[0].value,
                email:e.target[1].value,
                password:e.target[2].value,
            })
            console.log('register success');
            setLoading(false);
            navigate('/login');
            
        } catch (error) {
            console.log('something went wrong');
            setLoading(false);
        }
        
    }
  return (
    <>
    <div className="register-page card">
    {loading && <Spinner/>}
        <h3 className="header mb-4">Register page</h3>
    <form onSubmit={submitHandler}>
    <div>
    <div className="form-group">
            <label htmlFor="inputnamel">Name</label>
            <input type="text" className="form-control" id="inputnamel" aria-describedby="nameHelp" placeholder="Enter name" />
            
        </div>
        <div className="form-group">
            <label htmlFor="inputEmail">Email address</label>
            <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
            
        </div>
        <div className="form-group">
            <label htmlFor="inputPassword">Password</label>
            <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
        </div>
        
       <p className='mt-3'> Already existing user, Please <Link to="/login">login</Link></p>
        <button type="submit" className="btn btn-primary m-2">Register</button>
    </div>
    </form>

    </div>
    </>
  )
}

export default Register