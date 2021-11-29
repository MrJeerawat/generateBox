import styled from "styled-components";
import React from "react";
import Card from "./Card";

const Container = styled.div`
  margin: 10px;
`;
const Title = styled.h1`
  color: ${props=>props.color};
  border-bottom: 3px solid #000;
  width: 200px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Content = ({ num, xy, title }) => {
  const data = () =>{
    const data = []
    while (num !== 0) {
        data.push(num);
        num --;
      }
    return data
  }

  return (
    <Container>
      <Title color={title[1]}>{title[0]}</Title>
      <Wrapper>
        {data().map((key) => {
          return <Card width={xy[0]} height={xy[1]} key={key} />;
        })}
      </Wrapper>
    </Container>
  );
};

export default Content;
