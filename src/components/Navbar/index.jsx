import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Footer"
import data from "../../utils/navbar"

const Navbar = () => {
    console.log("The Navbar");
    return (
        <div className="container">
            <div className="navbar">
                <ul>
                    {
                        data.map((item, i) => <li key={i}>
                            <NavLink to={item.path}>{item.name}</NavLink>
                        </li>)
                    }
                </ul>
            </div>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Navbar;