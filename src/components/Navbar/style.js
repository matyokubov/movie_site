import styled from "styled-components"
import { ReactComponent as logo} from "../../assets/icon/logo.svg"
import { ReactComponent as bar} from "../../assets/icon/bar.svg"
import { ReactComponent as search} from "../../assets/icon/search.svg"

export const SearchInput = styled.div`
    display: inherit;
    padding: 9px 14px;
    background-color: var(--navbar);
    column-gap: 15px;
    box-shadow: 0px 2px 12px 7px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    width: 450px;
    max-width: 100%;
    margin: 0 1rem;
    >input{
        background-color: inherit;
        border: none;
        outline: none;
        color: #707070;
        font-size: 15px;
        width: 100%;
    }
`
export const Logo = styled(logo)``
export const Menu = styled(bar)``
export const Search = styled(search)``
