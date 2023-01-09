import Card from "../Card"
import Carousel from "../Carousel"
import { Container } from "./style"

import useRequest from "../../hooks/useRequest";
import { useMemo, useReducer } from "react";

const Home = () => {
    console.log("Home");
    const [state, dispatch] = useReducer(reducer, {
        popularPersons: [
                {
                    title: "Unknown",
                    description: "Unknown description",
                    img: "img"
                }
            ],
        popularMovies: [
                {
                    title: "Unknown",
                    description: "Unknown description",
                    img: "img"
                }
            ]
    })
    const request = useRequest()
    function reducer(state, action){
        switch (action.type) {
            case "popular_persons":
                return {...state, popularPersons: action.payload}
            case "popular_movies":
                return {...state, popularMovies: action.payload}
            default:
                return state;
        }
    }
    useMemo(() => {
        request({currUrl: "https://api.themoviedb.org/3", path: `/person/popular?api_key=b8297831d5876d2ce8a0fe891bf560d9`}).then(data => {dispatch({type: "popular_persons", payload: data.results}); console.log(data.results);})
        request({currUrl: "https://api.themoviedb.org/3", path: `/movie/popular?api_key=b8297831d5876d2ce8a0fe891bf560d9`}).then(data => {dispatch({type: "popular_movies", payload: data.results}); console.log(data.results);})
    }, [])
    return (
        <>
            <Carousel data={state.popularMovies?.slice(state.popularMovies?.length-8, state.popularMovies?.length)}/>
            <Container className="container">
                <h1>Popular Actors</h1>
                <p style={{gridTemplateColumns: "repeat(7, 1fr)", gridTemplateRows: "repeat(2, 1fr)"}}>
                    {
                        state.popularPersons?.slice(0, 14).map((m, i) => (
                            <Card type={"person"} title={m.name} description={m.overview} img={`https://image.tmdb.org/t/p/w185${m.profile_path}`} id={m.id} key={i}/>
                        ))
                    }
                </p>
            </Container>
            <Container className="container">
                <h1>Popular Movies</h1>
                <p>
                    {
                        state.popularMovies?.map((m, i) => (
                            <Card type={"movie"} title={m.original_title} description={m.description} img={`https://image.tmdb.org/t/p/w185${m.poster_path}`} id={m.id} key={i}/>
                        ))
                    }
                </p>
            </Container>
        </>
    )
}

export default Home;