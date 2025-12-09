import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const loginForm = async (e) => {
    e.preventDefault()
    try {
      let res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password
        }),
      })
      let data = await res.json();

      if (!res.ok) {
        navigate("/login");
        localStorage.removeItem("token")
      }
      console.log(data);

      // if (!data.ok) {
      //   return console.log("data is not ok");
      // }


localStorage.setItem("token", data.json)

navigate("/")

    } catch (error) {
      console.log(error.message);
      navigate("/login")
      localStorage.removeItem("token")
    }
  }
  return (
    <div>
      <form onSubmit={loginForm}>
        <h1>Login Form</h1>
        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='enter your email' /><br />
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='enter your password' /><br />
        <button>Submit</button>
        <p>don't have an account <Link to="/logout">Register your account</Link> </p>
      </form>
    </div>
  )
}

export default Login
