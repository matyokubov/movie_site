import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { setParams, useGetParams } from "../../utils/urlParams";
import { Logo, Menu, Search, SearchInput} from "./style"
import Footer from "../Footer"
import "./index.css"

const Navbar = () => {
    const query = useGetParams()
    const navigate = useNavigate()
    const onSearch = ({target}) => {
        navigate(`/movies${setParams("m", target.value)}`)
    } 
    return (
        <div>
            <div className="navbar container">
                <div className="logo">
                    <NavLink to="/en"><Logo/></NavLink>
                </div>
                <SearchInput className="search-input">
                    <Search/>
                    <input type="text" placeholder="Search any Movies" defaultValue={query.get("m")} onChange={onSearch}/>
                </SearchInput>
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