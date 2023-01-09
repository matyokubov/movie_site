import styled from "styled-components";

const getType = ({type}) => {
    switch(type){
        case "person":
            return `
                width: 170px;
                height: 400px;
            `
        case "movie":
            return `
                width: 230px;
                height: 400px;
            `
        default:
            return ``
    }
}

export const Card = styled.div`
    img{
        width: 100%;
    }
    .title{
        overflow-x: hidden;
        span{
            margin: 0 10px;
            font-size: 14px;
            white-space: nowrap;
        }
    }
    color: #fff;
    background-color: var(--card);
    ${getType}
`