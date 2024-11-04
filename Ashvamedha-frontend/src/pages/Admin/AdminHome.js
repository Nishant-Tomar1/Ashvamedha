import React, { useEffect, useState } from 'react'
import "./AdminHome.scss"
import { useLogin } from '../../context/loginContextProvider';
import {Link, useNavigate} from 'react-router-dom'
import Loader from '../../components/Loader/Loader';
import Navbar from '../../components/Navbar/Navbar';

function AdminHome() {
    const loginCtx = useLogin();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },1000);
    })

    const handleLogout = (e) => {
        e.preventDefault();
        const response = window.confirm("Are you sure you want to logout");
        if (response) {
            loginCtx.logout();
            navigate("/");
            alert("Logged out successfully");
        }
    }
    
    return (
        <>
            <Navbar/>
        <div className='adminhomepage'>
        {
            !loading ?
            <>
                 {
            loginCtx.isLoggedIn ?
            <div>
                <h2>You are Logged In as {loginCtx.sport} admin </h2>
                <p>Note : You can only do changes for {loginCtx.sport}</p>
                <Link to={`/livescore/${loginCtx.sport}`}>See Livescore ({loginCtx.sport})</Link>
                <Link to="/setlivescore" >Create New Live Score</Link>
                <Link to="/updatelivescore">Update  Live Score</Link>
                <Link to="/updatepointstable" >Set Points Table Score</Link>
                <button onClick={handleLogout}>Logout </button>
            </div>
            :
            <div>
                You are not logged In <br />
                <button onClick={()=>{navigate("/admin/login")}}>Login</button>
            </div>
           
        }
            </> 
            : <Loader/>
        }
       
        </div>
        </>
        
    )
}

export default AdminHome
