import { NavLink, Outlet } from "react-router-dom";
import { Logo, Menu, Search,
    SearchInput
} from "./style"
import Footer from "../Footer"
// import data from "../../utils/navbar"
import "./index.css"

const Navbar = () => {
    console.log("The Navbar");
    return (
        <div>
            <div className="navbar container">
                <div className="logo">
                    <NavLink to="/en"><Logo/></NavLink>
                </div>
                <SearchInput className="search-input">
                    <Search/>
                    <input type="text" placeholder="Search any Movies"/>
                </SearchInput>
                {/* <ul>
                    {
                        data.map((item, i) => <li key={i}>
                            <NavLink to={item.path}>{item.name}</NavLink>
                        </li>)
                    }
                </ul> */}
                <div className="dropdown">
                    <Menu/>
                </div>
            </div>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Navbar;