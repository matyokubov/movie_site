import { Carousel } from 'antd';
import { useRef } from 'react';
import { Container, Arrow, Content, DarkLayer} from "./style.js"
import { Button } from '../Generic'
import "./index.css"

const contentStyle = {
  height: '380px',
  color: '#fff',
  textAlign: 'center',
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  background: '#364d79',
  position: "relative"
};

const GenCarousel = ({data}) => {
    const slider = useRef()
    const onMove = ({target: {dataset: {name}}}) => {
        console.log(name)
        if(name === "next") slider.current.next();
        else if(name === "prev") slider.current.prev();
    }
    return (
        <Container>
            <Carousel autoplay ref={slider}>
                {
                    data?.map(({id, title, overview, original_title, backdrop_path, poster_path, video}) => {
                        return (
                            <div key={id}>
                                <div style={contentStyle}>
                                    <img src={`https://image.tmdb.org/t/p/w185${backdrop_path}`} alt={title} className="productImg"/>
                                    <DarkLayer/>
                                    <Content>
                                        <div className='info'>
                                            <img src={`https://image.tmdb.org/t/p/w185${poster_path}`} alt={title}/>
                                            <div>
                                                <div>
                                                    <div className='title'>{original_title}</div>
                                                    <div className='subtitle'>{overview}</div>
                                                </div>
                                                <div className='readmore'>
                                                    <Button type={"light"}>See more</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Content>
                                </div>
                            </div>
                        )
                    })
                }
            </Carousel>
            <div className="arrow">
                <div data-name="prev" onClick={onMove}>
                    <Arrow/>
                </div>
                <div data-name="next" onClick={onMove}>
                    <Arrow right='true'/>
                </div>
            </div>
        </Container>
    )
}

export default GenCarousel;