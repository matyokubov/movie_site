import { NavLink } from "react-router-dom";

const Card = ({title, description, img, id}) => {
    return (
        <div style={{width: "300px"}}>
            <div>
                <img src={img} alt="movie_img" style={{width: "100%"}}/>
            </div>
            <h3>
                <NavLink to={`/m/${id}`}>{title}</NavLink>
            </h3>
            <p>{description}</p>
        </div>
    )
}

export default Card;