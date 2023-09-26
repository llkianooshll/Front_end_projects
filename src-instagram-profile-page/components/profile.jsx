import React, { useContext, useState } from "react";
import Context from "../context/StateContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
const Profile = () => {
    library.add(faAdd)
    const story = "true" // false shavad img az tag a kharej mishavad
    const follow = "false" // true shavad massage button afzoode mishavad
    const [highlight, setHighlight] = useState(["kianoosh-profile.jpg", "kiaoosh.jpg.jpg"])
    const [posts, setPosts] = useState(["796835.jpg","796839.jpg","796841.jpg", "796841.jpg", "796843.png", "13191.jpg"])
    const state = useContext(Context)
    return (
        <>
            <div>
                <div className="row justify-content-center mt-4">
                    <div className="col-2"><a href="story"><img className="rounded-circle border border-danger p-1" style={{ height: "190px" }} src={require("../kianoosh-profile.jpg")} alt="" /></a></div>
                    <div className="col-3">
                        <div>
                            <div>
                                <h2 className="d-inline">{state.usernamePrf}</h2> <button className=" btn btn-primary mx-1 mb-3">Follow</button> <button className=" btn btn-primary mb-3">></button>
                            </div>
                            <div className="row">
                                <span className="col-3"><b>{state.posts} Posts</b></span>
                                <span className="col-4"><b>{state.followers} Followers</b></span>
                                <span className="col-5"><b>{state.following} Following</b></span>
                                <div className="mt-3">
                                    <h6>web developer</h6>
                                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed unde aut voluptatum perspiciatis eaque? Optio repellat, nulla sed soluta nihil expedita, eos labore cupiditate sint consectetur omnis. Sed, soluta dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, tempore!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9 mt-4">
                        {highlight.map((item,index) => <a key={index} className="col-3" href="highlight"><img className="border border-dark mx-3 rounded-circle" style={{height:"97px"}} src={require(`../${item}`)} alt="" /></a>)}
                        <div className="d-inline"><NavLink to="new-highlight" className="text-dark border border-dark rounded-circle mx-3" style={{padding:"35px"}}><FontAwesomeIcon style={{fontSize:"25px"}} icon={faAdd}/></NavLink></div>
                    </div>
                    <div className="col-10 mt-5">
                        {posts.map((item,index)=> <NavLink key={index} className="col-3" to={`post ${index}`}> <img className="mx-3 my-2" style={{width:"370px", height:"400px"}} src={require(`../${item}`)} alt="" /></NavLink>)}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;