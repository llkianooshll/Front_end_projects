import axios from "axios";
import React from "react";
import { useState } from "react";


const LogIn = () => {
    const [account, setAccount] = useState([
        {
            email: "",
            password: ""
        }
    ])
    const [btnLoading, setBtnLoading] = useState(false)
    const [Perror, setPerror] = useState([])
    const [Eerror, setEerror] = useState([])
    var checker = 1
    const handelSubmit = async (e) => {
        e.preventDefault()
        if (account[0].email === "") {
            const newError = [...Eerror]
            newError[0] = "!پرکردن فیلد الزامیست"
            setEerror(newError)
            checker = 0
        } else {
            const newError = [...Eerror]
            newError[0] = ""
            setEerror(newError)
        }
        if (account[0].password === "") {
            const newError = [...Perror]
            newError[0] = "!پرکردن فیلد الزامیست"
            setPerror(newError)
            checker = 0
        } else {
            if (account[0].password.length < 5) {
                const newError = [...Perror]
                newError[0] = "!حداقل 5 کاراکتر "
                setPerror(newError)
                checker = 0
            } else {
                const newError = [...Perror]
                newError[0] = ""
                setPerror(newError)
            }
        }
        if (checker === 1) {
            try {
                const result = account[0]
                setBtnLoading(true)
                const response = await axios.post("https://reqres.in/api/login", result)
                setBtnLoading(false)
                console.log(response.data.token)
                localStorage.setItem("token", response.data.token)
                window.location.replace("/dashboard")
            } catch (er) {
                const newError = [...Perror]
                newError[0] = "!ایمیل یا پسورد اشتباه است"
                setPerror(newError)
                setBtnLoading(false)
            }
        }

    }
    const handleChange = (e) => {
        if (e.currentTarget.name === "email") {
            const newAcc = [...account]
            newAcc[0].email = e.currentTarget.value
            setAccount(newAcc)
        }
        if (e.currentTarget.name === "password") {
            const newAcc = [...account]
            newAcc[0].password = e.currentTarget.value
            setAccount(newAcc)
        }
    }
    return (<>
        <form onSubmit={handelSubmit} className="mb-3">
            <div className="m-2">
                <label htmlFor="Email"> Email </label>
                <input className="form-control" onChange={handleChange} value={account.email} type="text" name="email" id="Email" placeholder="ex: @gmail.com" />
                <div className="text-danger p-1 mt-2">{Eerror[0]}</div>
            </div>
            <div className="m-2">
                <label htmlFor="Password"> Password </label>
                <input className="form-control" onChange={handleChange} value={account.password} type="text" name="password" id="Password" />
                <div className="text-danger p-1 mt-2">{Perror[0]}</div>
            </div>
            <button disabled={btnLoading} className="btn btn-primary m-2"> LogIn </button>
        </form>
    </>);
}

export default LogIn;