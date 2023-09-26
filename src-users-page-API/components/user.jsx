import axios from "axios";
import { useState, useEffect } from "react";
import queryString from "query-string";


const User = (props) => {


    const [user, setUsers] = useState({})
    let url = window.location.href.split("/")
    const nUrl = url[url.length - 1]
    const userDitail = async () => {
        let response = await axios.get(`https://reqres.in/api/users`)
        const nResponse = response.data.data[nUrl - 1]
        setUsers(nResponse)
    }
    const buttonHandrl = (e) => {
        e.prevntDefault()
    }
    const handelBack = ()=>{
        window.history.back()
    }
    useEffect(() => {
        userDitail()
    }, [])
    return (
        <>
            <div className="" style={{ marginLeft: "10px" }}>
                <img src={user.avatar}
                    style={{ borderRadius: "50%", width: "100px" }}
                    alt=""
                />

                <h4>
                    {user.first_name} {user.last_name}
                </h4>
                <h5>{user.email}</h5>
            </div>
            <div style={{marginLeft:"10px"}}><span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, facilis?</span>
                <div><button onClick={handelBack} onSubmit={buttonHandrl} className="btn btn-info">back</button></div>
            </div>

        </>
    );
}

export default User;