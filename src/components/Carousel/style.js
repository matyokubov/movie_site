import styled from "styled-components";
import { ReactComponent as arrowIcon } from "../../assets/icon/arrow.svg";

export const Container = styled.div`
    position: relative;
    height: 380px;
    user-select: none;
    margin-bottom: 4rem;
    margin-top: 1.5rem;
    .productImg{
        filter: blur(25px);
    }
    .slick-track{
        height: 380px;
    }
    .arrow{
        position: absolute;
        transform: translateY(-200px);
        width: 100%;
        padding: 0 32px;
        display: flex;
        justify-content: space-between;
        >div{
            background: rgba(255, 255, 255, 0.2);
            width: 45px;
            height: 45px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            user-select: none;
            cursor: pointer;
        }
    }
    .productImg{
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const Content = styled.div`
    position: relative;
    z-index: 3;
    >*{
        color: #fff;
    }
    .title{
        font-size: 36px;
        font-weight: 700;
    }
    .subtitle{
        font-size: 14px;
        font-weight: 300;
        width: 550px;
        max-width: 100%;
    }
    .settings{
        margin: 24px 0;
        display: inline-flex;
        column-gap: 24px;
        >div{
            display: inline-flex;
            flex-direction: column;
            align-items: center;
            row-gap: 6.7px;
        }
    }
    .price{
        font-size: 28px;
        font-weight: 600;
        margin-bottom: 34px;
    }
    .readmore>button{
        height: 50px;
        width: 178px;
        margin: 0 1rem;
        margin-bottom: 1rem;
    }
`

export const DarkLayer = styled.div`
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.65);
`
export const Arrow = styled(arrowIcon)`
    transform: ${({right}) => right && "rotateY(-180deg)"}
`
