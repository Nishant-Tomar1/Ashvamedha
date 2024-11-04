import React, { useState } from 'react'
import "./AdminLogin.scss"
import axios from 'axios'
import { server, sportList } from '../../constants'
import { useLogin } from '../../context/loginContextProvider'
import {  useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'

function AdminLogin() {
    const [loading ,setLoading] = useState(false);
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
        // console.log(admin);
        setLoading(true);
        
        try {
            const res = await axios.post(`${server}/admin/login`,{
                email : admin.email.toLowerCase(),
                password : admin.password.toLowerCase()
            },{withCredentials:true})
            if (res.data.statusCode === 200){
                setLoading(false)
                alert("Logged In Successfully!!");
                navigate("/admin");
                LoginCtx.login(res.data.result.accessToken,res.data.result.refreshToken, res.data.result.sport);
            }
            else {
                setLoading(false);       
                alert(res.data.message ? res.data.message : "Invalid Credentails!!");
            } 
        } catch (error) {
            setLoading(false);
            console.log(error);       
        }     
    }

    return (
        <>
        <Navbar/>
        <div className='adminlogin'>
            <form onSubmit={handleSubmit}>
                <h2>Admin Login</h2>
                <div>
                <label htmlFor="email" >Email</label>
                {/* <input type="text" name="email" value={admin.email} required onChange={handleAdminChange} /> */}
                <select required name='email' onChange={(e) => setAdmin(prev => ({...prev,email : e.target.value}))}>
              <option value="">Select sport</option>
              {sportList.map((sport) => (
                <option key={sport.name} value={sport.email}>
                  {sport.name}
                </option>
              ))}
            </select>
                </div>
                <div>
                <label htmlFor="password" >Password</label>
                <input type="text" autoComplete='off' name="password" value={admin.password} required onChange={handleAdminChange} />
                </div>
                
                {!loading ? <input type="submit" /> : <h2>Loading...</h2>}
            </form>
        </div>
        </>
    )
}


export default AdminLogin;
