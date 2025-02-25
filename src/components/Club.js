import React from "react";
import { styled } from "styled-components";
import ArtPattern from '../img/Art_pattern.svg';

const ClubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 0;
`;

const Header = styled.h2`
  padding-top: 10%;
  padding-bottom: 8%;
`;

const ClubBackground = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100vw;
  background-image: url('${ArtPattern}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center; 
`;

const TextContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  margin-top: 150px;
  margin-bottom: 200px;
`;

const ClubText = styled.p`
  width: 38%;
  text-align: center;
  font-family: 'Montserrat Alternates';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  text-decoration-line: underline;
  color: #5689FF;
  z-index: 2;
`;

class Club extends React.Component {
  render() {
    return <ClubContainer> 
              <Header>Наш клуб:</Header>
              <TextContainer >
                <ClubBackground/>
                <ClubText>Клуб любителей классической музыки</ClubText>
              </TextContainer>
            </ClubContainer>;
          }
        }

export default Club;
