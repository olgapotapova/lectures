import React from "react";
import { styled } from "styled-components";
import Image from './image';
import ArtPattern from '../img/Art_pattern.svg';

const ClubContainer = styled.div`
  color: white;
`;

const ClubText = styled.p`
  position: absolute;
  width: 188px;
  height: 126px;
  left: calc(50% - 188px/2 + 2px);
  top: 3294px;
  font-family: 'Montserrat Alternates';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 32px;
  display: flex;
  align-items: flex-end;
  text-align: center;
  text-decoration-line: underline;
  color: #5689FF;
`;

class Club extends React.Component {
  render() {
    return <ClubContainer> 
        <h2>Наш клуб:</h2>
        <Image image={ ArtPattern } alt={ArtPattern} style={{ width: '100%' }} /> 
        <ClubText>Клуб любителей классической музыки</ClubText>

    </ClubContainer>;
  }
}

export default Club;
