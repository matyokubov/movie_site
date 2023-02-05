import { navbar } from "./utils/navbar"
import Navbar from "./components/Navbar"
import Page404 from "./components/Page404"
import { Route, Routes, Navigate } from "react-router-dom"

const Root = () => {
    return (
        <Routes>
            <Route element={<Navbar/>}>
                {navbar.map(({id, element, path}) => {
                    return <Route key={id} path={path} element={element}/>
                })}
                <Route path="*" element={<Page404/>}/>
            </Route>
            <Route path="/" element={<Navigate to={"/en"}/>}/>
        </Routes>
    )
}

export default Root;