import { NavLink } from "react-router-dom";
import { Card } from "./style"
import "./index.css"

const CardComp = ({title, description, img, id, type}) => {
    return (
        <Card type={type}>
            <NavLink to={type === "movie" ? `/m/${id}` : `/p/${id}`}>
                <div>
                    <img src={img} alt="movie_img" style={{width: "100%"}}/>
                </div>
                <div className="title wrapper" style={title?.length > 32 ? {paddingLeft: "10px"} : {}}>
                    <div className={title?.length > 32 && "marquee"}>
                        <span>{title}</span>
                    </div>
                </div>
                {description && <p>{description}</p>}
            </NavLink>
        </Card>
    )
}

export default CardComp;