import React from 'react';
import styled from 'styled-components';

const TileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding: 0.5rem;
  background-color: #e9e9e9;
`;

const Title = styled.div`
  color: black;
  margin: 0.5rem;
  font-weight: bold;
  font-size: 1rem;
`;

const SubTitle = styled.div`
  color: black;
  margin: 0.5rem;
  font-size: 0.8rem;
`;

const Tile = () => (
    <TileWrapper>
      <Title>Title</Title>
      <SubTitle>Sub-title</SubTitle>
    </TileWrapper>
  );

export default Tile;