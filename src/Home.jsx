import React, {useState}from "react";
import {useNavigate} from 'react-router-dom'
import './Home.css'
function Home(){
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    let pattern="[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}";
    //const pass="/[a-zA-Z]+/"
    const pass="[0-9]+"
    const navigate=useNavigate();
    const data={
        email:"amanyu@gm.com",
        password:"12345"
    }
   
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }
    console.log(email);
    console.log(password);
    const handleChange=(e)=>{
        e.preventDefault()
        if(!email.trim()||!password.trim()){
            alert("Enter data")
            return;
        }
        if(!email.match(pattern)){
            alert("Enter valid email");
        }
       
        if(!password.match(pass)){
            alert("enter valid password");
        }
        if(!email===data.email){
            alert("Enter valid email");
        }
        if(email===data.email&&password===data.password){
            alert("logged in");
           navigate('/welcome');
        }
    }
    console.log(password.match(pass));

    return <div className="body">
        <form onSubmit={handleChange}>
            <label for="uname"><b>USERNAME</b></label><br />
            <input type="text" value={email} onChange={(e)=>handleEmail(e)}  name="email" /><br />
            <label for="uname"><b>PASSWORD</b></label><br />
            <input type="password" value={password}  onChange={(e)=>handlePassword(e)} name="password"/><br />
            <input type="submit" value="Login"/>
        </form>


    </div>
}
export default Home;