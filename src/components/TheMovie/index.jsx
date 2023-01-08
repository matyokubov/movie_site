import { useParams } from "react-router-dom";

const TheMovie = () => {
    const params = useParams()
    console.log("The Movie");
    return (
        <div>
            Movie {params.id}
        </div>
    )
}

export default TheMovie;