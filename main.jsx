import { Component, useState } from "react"
import React from "react"
const Main = (props) => {
    const addClick = () => {
        if (props.value.length < 6 && document.querySelector("#txt").value) {
            const newState = { content: document.querySelector("#txt").value }
            const newSTT = [...props.value, newState]
            props.add(newSTT)
        } else {
            if (props.value.length === 6) {
                document.getElementById("error").style.display = null
            }
        }
    }
    const delClick = () => {
        const input = document.querySelector("#txt").value
        const result = props.value.filter(item => (item.content !== input))
        props.add(result)
        if (props.value.length === 6) {
            document.getElementById("error").style.display = "none"
        }
    }
    return (
        <>

            <div>
                <div className="row justify-content-center">
                    <div className="bg-dark col-4 p-3 rounded" style={{ width: "500px", marginTop: "250px", boxShadow: "7px 10px 15px" }}>
                        <input placeholder="anything" type="text" name="" id="txt" style={{ width: "100%" }} />
                        <div>{props.value.map((item, index) => (
                            <div key={index} className="card my-3">
                                <span style={{ marginLeft: "5px" }}>{item.content}</span>
                            </div>
                        ))}</div>
                        <div id="error" className="text-danger mb-2" style={{ display: "none", fontSize: "15px" }}>restrictions on adding to the list !</div>
                        <button onClick={addClick} className="btn btn-warning badge">add</button>
                        <button onClick={delClick} className="btn btn-danger badge" style={{ marginLeft: "8px" }}>delete</button>
                    </div>
                </div>

            </div>

        </>
    );
}

export default Main;