import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    library.add(faSearch, faHome, faAdd)
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light row">
                <div className="row">
                    <div className="col-4">
                        <div className=" navbar-brand" style={{marginLeft:"24%"}}>instagram</div>
                    </div>
                    <div className="col-4">
                        <input className="text-center bg-light rounded" type="search" name="" id="" placeholder="Search" style={{ marginLeft: "25%" }} />
                    </div>
                    <div className="col-4">
                        <div style={{marginLeft:"24%"}}>
                            <NavLink className="mx-3 text-dark" to="/" href="#"><FontAwesomeIcon icon={faHome} /></NavLink>
                            <NavLink className="mx-3 text-dark" to="search" href="#"><FontAwesomeIcon icon={faSearch} /></NavLink>
                            <NavLink className="mx-3 border border-dark rounded px-1 text-dark" to="add" href="#"><FontAwesomeIcon icon={faAdd} /></NavLink>
                            <NavLink className="mx-3" to="profile" href="#"><img className="rounded-circle"  style={{ height: "25px", marginBottom: "5px" }} src={require("../kianoosh-profile.jpg")} alt="" /></NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;