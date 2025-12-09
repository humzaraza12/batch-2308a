import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Logout = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const navigate = useNavigate()
    const logout = async (e) => {
        e.preventDefault()
      try {
          let res = await fetch("http://localhost:5000/api/register", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              }
              ,
              body: JSON.stringify({
                  username: username,
                  email: email,
                  password: password
              })
          })
  
  
          let data = await res.json()
          alert(data.msg)
          console.log(data);
          navigate("/")
      } catch (error) {
        localStorage.removeItem("token")
        navigate("/logout")
      }
    }

    return (
        <div>
            <form onSubmit={logout}>
                <h1>Register Form</h1>
                <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder='enter your username' /><br />
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='enter your email' /><br />
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='enter your password' /><br />
                <button type='submit' >Submit</button>
                <p>already have an account <Link to="/login">Login Page</Link> </p>
            </form>
        </div>
    )
}

export default Logout