import React from "react";
import { styled } from 'styled-components';
import Image from './image';
import Portrait from '../img/Portrait.png';

const LecturerContainer = styled.div `  
/* ... */
` 
const AboutMe = styled.p `  
  width: 80%;
  padding-left: 30px;
  height: 45px;
  font-family: 'Montserrat Alternates';
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  color: #FFFFFF;
`

class Lecturer extends React.Component {
  render() {
    return <LecturerContainer>
        <h2>Лектор:</h2>
        <h4>Олеся Литневски</h4>
        <Image image={ Portrait } alt={Portrait} style={{ width: '100%' }} /> 
        <AboutMe>Музыка – это моя история, мой путь, который продолжается. </AboutMe>
    </LecturerContainer>;
  }
}

export default Lecturer;