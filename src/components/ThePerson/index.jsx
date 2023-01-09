import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useRequest from "../../hooks/useRequest";

const ThePerson = () => {
    const params = useParams()
    const request = useRequest()
    console.log("The Person");
    useEffect(() => {
        request({currUrl: "https://api.themoviedb.org/3", path: `/person/${params.id}?api_key=b8297831d5876d2ce8a0fe891bf560d9`}).then(data => {console.log(data)})
    }, [])
    return (
        <div>
            Person {params.id}
        </div>
    )
}

export default ThePerson;