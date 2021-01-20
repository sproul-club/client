import React from 'react';
import './Gallery.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import ReactPlayer from 'react-player'
import "pure-react-carousel/dist/react-carousel.es.css";
import ChevronLeft from '@material-ui/icons/ChevronLeftRounded';
import ChevronRight from '@material-ui/icons/ChevronRightRounded';

const Gallery = (props) => {
    return (
        <CarouselProvider
            naturalSlideWidth = {16}
            naturalSlideHeight = {9}
            totalSlides = {props.data.length}
            className = "gallery"
        >
            <Slider className="slider">
                {props.data.map((item, ind) => {
                    const caption = item.caption ? item.caption.trim() : null;
                    if (item.type === "i") {
                        return (<Slide index={ind} className="slide">
                            <Image src={item.src} className="item"/>
                            {caption && caption.length > 0 &&
                                <div className="caption">{caption}</div>
                            }
                        </Slide>)
                    } else if (item.type === "v") {
                        return (<Slide index={ind} className="slide">
                            <ReactPlayer url={item.src} width={"100%"} height={"100%"} className="item"/>
                        </Slide>)
                    }
                })}
            </Slider>
            {/* <ButtonBack className="back-button"><ChevronLeft style={{color: 'white', fontSize: 40}}/></ButtonBack>
            <ButtonNext className="next-button"><ChevronRight style={{color: 'white', fontSize: 40}}/></ButtonNext> */}
        </CarouselProvider>
);
}

export default Gallery;