import React, {useState} from 'react';
import './Gallery.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import ReactPlayer from 'react-player'
import "pure-react-carousel/dist/react-carousel.es.css";
import ChevronLeft from '@material-ui/icons/ChevronLeftRounded';
import ChevronRight from '@material-ui/icons/ChevronRightRounded';

const Gallery = (props) => {
    const [index, setIndex] = useState(0);
    return (
        <CarouselProvider
            naturalSlideWidth = {16}
            naturalSlideHeight = {9}
            totalSlides = {props.data.length}
            className = "gallery"
            dragEnabled = {false}
            touchEnabled = {false}
        >
            <Slider className="slider">
                {props.data.map((item, ind) => {
                    const caption = item.caption ? item.caption.trim() : null;
                    if (item.type === "picture") {
                        return (<Slide index={ind} key={`slide-${ind}`} className="slide">
                            <Image src={item.url} className="item"/>
                            {caption && caption.length > 0 &&
                                <div className="caption">{caption}</div>
                            }
                        </Slide>)
                    } else if (item.type === "v") {
                        return (<Slide index={ind} className="slide">
                            <ReactPlayer url={item.url} width={"100%"} height={"100%"} className="item"/>
                        </Slide>)
                    }
                })}
            </Slider>
            {props.data.length > 1 && index != 0 &&
                <ButtonBack className="back-button" onClick={() => setIndex(index-1)}><ChevronLeft style={{color: '#767676', fontSize: 40, background:'white', borderRadius:'.8vw', boxShadow:'1px 1px 4px rgba(0, 0, 0, 0.25)'}}/></ButtonBack>
            }
            {props.data.length > 1 && index != props.data.length - 1 &&
                <ButtonNext className="next-button" onClick={() => setIndex(index+1)}><ChevronRight style={{color: '#767676', fontSize: 40, background:'white', borderRadius:'.8vw', boxShadow:'1px 1px 4px rgba(0, 0, 0, 0.25)'}}/></ButtonNext>
            }
            
        </CarouselProvider>
);
}

export default Gallery;