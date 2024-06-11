import { Link } from "react-router-dom";
import "./nav.css";
import BasicExample from "./dropdowncontacts";
import BasicProfile from "./dropdownprofile"
const Nav= ()=> {
    return (
        <>
        <div className="navcontainer">
            <div className="logo">
                i
           </div>
           <div className="optioncotainer">
                <div className="a">
                    <Link to="/">
                        home
                    </Link>
                </div>
                <div className="a">
                <BasicExample/>
                   
                </div>
                <div className="a">
                    about
                </div>
                
           </div>
            <div>
                <BasicProfile/>
            
           </div>
        </div>  
        </>
    )
}
export default Nav;