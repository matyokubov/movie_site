import TheMovie from "./components/TheMovie"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Page404 from "./components/Page404"
import { Route, Routes, Navigate } from "react-router-dom"

const Root = () => {
    return (
        <Routes>
            <Route element={<Navbar/>}>
                <Route path="/m/:id" element={<TheMovie/>}/>
                <Route path="/en" element={<Home/>}/>
                <Route path="*" element={<Page404/>}/>
            </Route>
            <Route path="/" element={<Navigate to={"/en"}/>}/>
        </Routes>
    )
}

export default Root;