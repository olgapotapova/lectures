import React from 'react';
import { styled } from "styled-components";
import Image from './image';
import LogoIcon from '../img/Logo_icon.svg';
import Bird from '../img/Bird.svg';
import Button from './Button';
import { device } from './device';

const HeaderContainer = styled.div`
  position: absolute;
  color: white;
  margin: 0;
  padding-top: 40px;
  height: auto;
  left: 0px;
  top: 0px;
  width: 100%;
  overflow: hidden;
  @media ${device.laptop} {
    padding-top: 46px;
  }
`;

const MainHeader = styled.header`
  font-family: 'ForestSmooth';
  font-style: normal;
  font-weight: 400;
  font-size: calc(64px + 106 * ((100vw - 440px) / (14400 - 440)));
  color: #FFFFFF;
  width: 90%;
  max-width: 90%;
  padding-left: 10%;
  @media ${device.laptop} {
    padding-left: 4%;
    font-size: calc(64px + (106 + 106 * 0.45) * ((100vw - 440px) / 1440));
  }
`;
const  TextHeader = styled.p`
  margin-left: 48%;
  margin-top: 6vw; 
  max-width: 45%;
  font-size: 20px;
  @media ${device.laptop} {
    margin-left: 4%;
    max-width: 17%;
    margin-top: 3.9%; 
    margin-bottom: 0;
    font-size: 24px;
  }
`;
const  ListContainer = styled.div`
  margin-top: calc(100vw * 0.6 - 50vw);
`;

const Line = styled.hr `  
    color: white;
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    width: 82%;
    margin: 7px auto 4px;
    padding: 0;
    @media ${device.laptop} {
      margin: 25px auto 15px;
      width: 92%;
  }
`;

const List = styled.div `  
    color: black;
    margin-left: 48%;
    font-size: 14px;
    margin-top: 4vw;
    max-width: 40%;
    @media ${device.laptop} {
      margin-left: 54%; 
  }
`;

const Logo = styled.img `  
    margin-left: 10%;
    color: white;
    @media ${device.laptop} {
      min-height: 50px;
      margin-left: 4%;
  }
`;

class Header extends React.Component {
    render(){
      return(
        
        <HeaderContainer>
           <Logo  src={LogoIcon} alt={LogoIcon} />
          <Line></Line>
          <MainHeader>лекции о музыке и моде</MainHeader>
          <TextHeader>Олеся Литневски и другие....</TextHeader>
          <ListContainer>
            <List>
              Вам будет интересно, если: 
            </List>
            <List>
            <span style={{ position: 'absolute', marginLeft: '-20px' }}><Image image={Bird} /></span> вы утончённая натура и постоянно поднимаете свой культурный уровень;
            </List>
            <List style={{ 'margin-bottom': '16%' }}>
            <span style={{ position: 'absolute', marginLeft: '-20px'}}><Image image={Bird} /></span> красота и искусство придают вам силы
            </List>
          </ListContainer>

          <Button>{this.props.title}</Button>
          


        </HeaderContainer>
      )
    }
  }

  export default Header