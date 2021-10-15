import styled from 'styled-components'


export const GalleryStyles = styled.div`
.gallery {
    position: relative;

}
.slider {
    border-radius: 10px;
    display: flex;
    flex-direction: column;
}

.slide .caption {
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 0.5em 2em 0.5em 2em;
    border-top-right-radius: 10px;
    text-align: center;
    color: white;
    font-size: 1em;
}

.gallery button {
    position: absolute;
    background: none;
    border: none;
    top: 0;
    bottom: 0;
    padding: 0 1em 0 1em;
    /* transition: all 0.3s ease-out; */
}
/* 
.gallery button:hover {
    transform: scale(1.3);
} */

.back-button {
    left: 0;
}

.next-button {
    right: 0;
}
`