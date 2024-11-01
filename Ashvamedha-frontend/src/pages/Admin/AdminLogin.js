import React, { useState } from 'react'
import "./AdminLogin.scss"
import axios from 'axios'
import { server } from '../../constants'
import { useLogin } from '../../context/loginContextProvider'
import {  useNavigate } from 'react-router-dom'

function AdminLogin() {
    const [admin, setAdmin] = useState({
        email : "",
        password :""
    })

    const navigate = useNavigate();
    const LoginCtx = useLogin();

    const handleAdminChange = (e) => {
        // console.log(target.name);     
        setAdmin(prev => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }
       
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${server}/admin/login`,{
                email : admin.email.toLowerCase(),
                password : admin.password.toLowerCase()
            },{withCredentials:true})
            if (res.data.statusCode === 200){
                
                alert("Logged In Successfully!!");
                navigate("/admin");
                LoginCtx.login(res.data.result.accessToken,res.data.result.refreshToken, res.data.result.sport);
            }
            else alert(res.data.message ? res.data.message : "Invalid Credentails!!");     
        } catch (error) {
            console.log(error);       
        }     
    }

    return (
        <div className='adminlogin'>
            <form onSubmit={handleSubmit}>
                <h2>Admin Login</h2>
                <div>
                <label htmlFor="email" >Email</label>
                <input type="text" name="email" value={admin.email} required onChange={handleAdminChange} />
                </div>
                <div>
                <label htmlFor="password" >Password</label>
                <input type="text" autoComplete='off' name="password" value={admin.password} required onChange={handleAdminChange} />
                </div>
                
                <input type="submit"  />
            </form>
        </div>
    )
}


export default AdminLogin;
