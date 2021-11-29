import React from 'react'
import styled from 'styled-components'

const Component = styled.div`
    display: flex;
`;
const ContentBanner = styled.div`
    width: 100%;
    height: ${props=>props.height}px;
    background-color: #bbb;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Banner = ({y}) => {
    return (
        <Component>
            <ContentBanner height={y}>
                Hello
            </ContentBanner>
        </Component>
    )
}

export default Banner
