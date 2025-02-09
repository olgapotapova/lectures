import React from "react";
import { styled } from 'styled-components';
import Image from './image';
import Portrait from '../img/Portrait.png';

const LecturerContainer = styled.div `  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
` ;

const Header = styled.h2 `  
  margin-bottom: 10vw;
` ;
const Name = styled.h4 `  
  margin-bottom: 10vw;
    /* margin-left: -30vw; */
    top: 3927px;
    font-family: 'Gogol';
    font-style: italic;
    font-weight: 400;
    font-size: 64px;
    line-height: 32px;
    color: #FFFFFF;
` ;

const ImageLecturer = styled.img `  
  height: auto;
  max-width: 500px;
` ;
const AboutMe = styled.p `  
  width: 60%;
  margin-top: 10vw;
  margin-left: -30vw;
  height: 45px;
  font-family: 'Montserrat Alternates';
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  color: #FFFFFF;
`;

class Lecturer extends React.Component {

  render() {
    return <LecturerContainer>
        <Header>Лектор:</Header>
        <Name>Олеся Литневски</Name>
        <ImageLecturer src={ Portrait } alt={Portrait} style={{ width: '100%' }} /> 
        <AboutMe>Музыка всегда была частью моей жизни. Еще в детстве воспитатели заметили мою любовь к импровизированным концертам и посоветовали родителям отдать меня в музыкальную школу.</AboutMe>
        <AboutMe>Музыка – это моя история, мой путь, который продолжается. </AboutMe>
    </LecturerContainer>;
  }
}

export default Lecturer;