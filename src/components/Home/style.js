import styled from "styled-components";

export const Container = styled.div`
    p{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(4, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 20px;
        justify-items: center;
    }
`