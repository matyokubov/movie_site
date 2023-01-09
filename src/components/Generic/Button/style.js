import styled from "styled-components"

const getType = ({type}) => {
    switch(type){
        case "light":
            return {
                background: "#42FF00",
                border: "0",
                borderRadius: "10px",
                color: "#fff",
                boxShadow: "1px 1px 14px #A1F483"
            }
        case "dark":
            return {
                background: "transparent",
                borderColor: "#fff",
                color: "#fff"
            }
        default:
            return {
                background: "#0061DF",
                border: "0",
                color: "#fff"
            }
    }
}

export const Button = styled.button`
    font-size: 20px;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    border-radius: 3px;
    height: ${({height}) => height ? height : "44px"};
    width: ${({width}) => width ? width : "130px"};
    column-gap: 8px;
    font-family: 'Montserrat', sans-serif;
    position: relative;
    cursor: pointer;
    ${getType}
    :active{
        opacity: 0.7;
    }
`