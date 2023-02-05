import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRequest } from "../../hooks/useRequest"
import studio from "../../assets/universal-studio.png"
import "./index.css"

const TheMovie = () => {
    const params = useParams()
    const request = useRequest()
    const [ movie, setMovie ] = useState({msg: "Loading movie info...", err: false})
    console.log(movie.msg)
    useEffect(() => {
        request({
            currUrl: "https://api.themoviedb.org/3",
            path: `/movie/${params.id}?api_key=b8297831d5876d2ce8a0fe891bf560d9`
        }).then(data => {
            data.id ? setMovie(data) : setMovie({msg: "Movie was not found", err: true})
            console.log(data)
        }).catch(error => setMovie({msg: error, err: true}))
    }, [])
    return !movie.err ? (
        <div className="container">
            <div className="head">
                <div>
                    <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w185${movie.poster_path}`: null} alt={params.id} />
                </div>
                <div>
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                </div>
            </div>
            <div className="production">
                {
                    movie.production_companies?.map((company) => (
                        <div key={company.id}>
                            <img src={company.logo_path ? `https://image.tmdb.org/t/p/w185${company.logo_path}`: studio} alt={company.id} />
                            <h4>{company.name}</h4>
                        </div>
                    ))
                }
            </div>
            <div className="more">
                <h4>Budget: {movie.budget?.toLocaleString(
                    'ru-RU', {
                        style: "currency",
                        currency: "USD"
                })}</h4>
                <h4>Genres: {movie.genres?.map(({name}, i) => <span key={i}>{name}{movie.genres.length-1!==i && ", "}</span>)}</h4>
                {movie.homepage && <h4>WebSite: <a href={movie.homepage} target={"_blank"}>{movie.homepage}</a></h4>}
                <h4>Language: {movie.original_language}</h4>
                <h4>Popularity: {movie.popularity}</h4>
                <h4>Date: {movie.release_date}</h4>
            </div>
        </div>
    ) : (
        <div>
            <h1 style={{margin: "6rem 0", textAlign: "center"}}>{movie.msg}</h1>
        </div>
    )
}

export default TheMovie;