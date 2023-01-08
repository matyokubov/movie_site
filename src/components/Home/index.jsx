import Card from "../Card"
// import useRequest from "../../hooks/useRequest";
import { useEffect, useState } from "react";

const Home = () => {
    console.log("Home");
    const [moviesList, setMoviesList] = useState([
        {
            title: "Unknown",
            description: "Unknown description",
            img: "img"
        }
    ])
    // const request = useRequest()
    useEffect(() => {
        // request({url: `m/${params.id}`}).then(data => setMoviesList(data))
        setMoviesList([
            {
                title: "Movie1",
                description: "Lorem ipsum dolor sit amet",
                img: "img",
                id: 1
            },
            {
                title: "Movie2",
                description: "Lorem ipsum dolor sit amet",
                img: "img",
                id: 2
            },
            {
                title: "Movie3",
                description: "Lorem ipsum dolor sit amet",
                img: "img",
                id: 3
            }
        ])
    }, [])
    return (
        <div>
            <h1>Welcome to MovieSite</h1>
            <p style={{display: "flex", columnGap: "1rem"}}>
                {
                    moviesList.map((m, i) => (
                        <Card title={m.title} description={m.description} img={m.img} id={m.id} key={i}/>
                    ))
                }
            </p>
        </div>
    )
}

export default Home;