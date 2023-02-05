import { useGetParams } from "../../utils/urlParams"

const SearchMovie = () => {
    const query = useGetParams()
    return (
        <div>
            "{query.get("m")}" was searched
        </div>
    )
}

export default SearchMovie;