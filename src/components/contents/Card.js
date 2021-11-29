import React from 'react'
import styled from 'styled-components'
const CardStyle = styled.div`
    width: ${props=>props.x}px;
    height:${props=>props.y}px;
    border: 1px solid;
    border-radius: 20px;
    margin: 10px 10px;
    border-color:#ccc;
`;
const Card = ({width,height}) => {
    return (
        <div>
            <CardStyle x={width} y ={height}></CardStyle>
        </div>
    )
}

export default Card
