import React, { useEffect } from 'react'
import "./AdminHome.scss"
import { useLogin } from '../../context/loginContextProvider';
import {Link, useNavigate} from 'react-router-dom'

function AdminHome() {
    const loginCtx = useLogin();
    const Navigate = useNavigate();
    useEffect(()=>{
        if (!loginCtx.isLoggedIn){
            Navigate("/admin/login")
        }
    },[loginCtx.isLoggedIn])

    const handleLogout = (e) => {
        e.preventDefault();
        const response = window.confirm("Are you sure you want to logout")
        if (response) {
            loginCtx.logout();
            Navigate("/");
            alert("Logged out successfully");
        }
    }
    return (
        <div className='adminhomepage'>
        {
            loginCtx.isLoggedIn &&
            <div>
                <h2>You are Logged In as {loginCtx.sport} admin </h2>
                <p>Note : You can only do changes for {loginCtx.sport}</p>
                <Link to="/setlivescore" >Create New Live Score</Link>
                <Link to="/updatelivescore">Update  Live Score</Link>
                <Link to="/updatepointstable" >Set Points Table Score</Link>
                <button onClick={handleLogout}>Logout </button>
            </div>
           
        }
        </div>
        
    )
}

export default AdminHome
