import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Users = () => {
    const [users, setUsers] = useState([])
    const [loading, setload] = useState(true)
    const fetchData = async () => {
        try {
            const response = await axios.get("https://reqres.in/api/users");
            setUsers(response.data.data);
            setload(loading === false)

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // Call fetchData on component mount
    useEffect(() => {
        fetchData();

    }, []);
    const handelCreate = async () => {
        const lengthId = users.length + 1
        const newUserCreate = {
            id: lengthId,
            first_name: "kianoosh",
            last_name: "afshari",
            email: "kianoosh002@gmail.com",
            avatar: "https://picsum.photos/200",
        }
        const response = await axios.post("https://reqres.in/api/users", newUserCreate)
        setUsers([...users, newUserCreate])
    }
    return (
        <>
            <button onClick={handelCreate} className='btn btn-lg btn-primary'>create</button>
            {handelLoading()}
            <div className="row ">
                {users.map((user, index) => {
                    return (
                        <div key={index} className='col-4 text-center p-5'>
                            <img src={user.avatar}
                                style={{ borderRadius: "50%", width: "100px" }}
                                alt=""
                            />
                            <Link to={`${user.id}`}>
                                <h4 >
                                    {user.first_name} {user.last_name}
                                </h4>
                            </Link>
                            <h5>{user.email}</h5>
                            <div className='row'>
                                <div className='col-6'>
                                    <button onClick={handelUpdate} className='btn btn-info btn-sm'>Update</button>
                                </div>
                                <div className='col-6'>
                                    <button onClick={() => { handelDelete(user.id) }} className='btn btn-danger btn-sm'>Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
    function handelUpdate() {

    };
    function handelDelete(info) {
        const newUsers = users.filter(item => info !== item.id)
        setUsers(newUsers)
    }
    function handelLoading() {
        if (loading === true) {
            return <h1 className='text-center text-black-50' style={{ marginTop: "250px" }}><b>LOADING...</b></h1>
        } else { return }
    }
}

export default Users;