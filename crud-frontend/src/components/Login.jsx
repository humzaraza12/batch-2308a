import React, { useEffect, useState } from 'react'
import {toast} from "react-toastify"

const Login = () => {

    const [users, setUsers] = useState([])


    useEffect(() => {

        const fetchData = async () => {
            let res = await fetch("http://localhost:5000/api/", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },

            })
            let data = await res.json()
            console.log(data);
            setUsers(data.users)
        }

        fetchData()

    }, [])

    const deleteHandler = async(deleteUsers) => {
        console.log(deleteUsers);
        try {
            let res = await fetch(`http://localhost:5000/api/users/${deleteUsers}`,{
                method : "DELETE",
                headers : {
                    "Content-Type" : "application/json"
                }
            })

            let result = await res.json();
            toast.error(result.msg)
            console.log(result);
            console.log(users);
            setUsers(prev => prev.filter(u => u._id !== deleteUsers))
        } catch (error) {
console.log(error.message); 
        }
    }

    return (
        <div>

            <input type="text" />
            <button>search</button>
            {users.length === 0 ? (
                <h1>NO DATA Found</h1>
            ) : (
                users.map((items, indx) => {
                    return <div className='box' key={indx}>
                        <h1>{items.username}</h1>
                        <h1>{items.email}</h1>

                        <button onClick={()=>deleteHandler(items._id)} >delete</button>
                    </div>
                })
            )}

        </div>
    )
}

export default Login