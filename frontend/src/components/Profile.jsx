import React from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {

const navigate = useNavigate()

const verifyToken = async()=>{

  const token = localStorage.getItem("token")
 
try {
    let res = await fetch("http://localhost:5000/api/profile",{
      method : "GET",
      headers : {
        "authorization" : `Bearer ${token}`
      }
    })
  
    let data = await res.json();
if (!res.ok) {
  navigate("/login")
}

    console.log(data);
} catch (error) {
  console.log(error.message);
}

}

verifyToken()

  return (
    <div>Profile</div>
  )
}

export default Profile