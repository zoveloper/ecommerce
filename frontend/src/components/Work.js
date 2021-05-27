import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";

function Work({work}) {
    return (
        <WorkWrapper>
        <Workpost>
            <Link to = {`/works/${work._id}`}>
                <Thumbnail src={work.image} />
            </Link>
            <Overlay>
                <Link to = {`/works/${work._id}`}>
                    <WorkName>
                        <div>{work.name}</div>
                    </WorkName>
                </Link>
            </Overlay>  
        </Workpost>
        </WorkWrapper>
    )
};

export default Work
const WorkWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    flex-direction: column;
`

const Workpost = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3.5em;
    font-style: normal;
    width: 200px;
    height: 270px;
    
    &:hover {
        transform: scale(1.0);}
    `
    
    const Overlay = styled.div`
        display: none;
        position: absolute;
        
        
        @media screen and (min-width: 768px) {  
        
        ${Workpost}:hover & {
        
        display: flex;
        
        justify-content: center; 
        align-items: center;   
        opacity: 0.95;

        transition: background-color 500ms ease-in 1s;
        background-color: rgb(255, 161, 77);
        
        height: 100%;
        width: 100%;
        font-size: .3em;
        }}
        
    `
    const WorkName = styled.div`
        color: green;
    `
    const Thumbnail = styled.img`
    
    object-fit: cover;
    width: 200px;
    height: 270px;
    `