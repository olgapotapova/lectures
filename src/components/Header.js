import React from 'react';
import { styled } from "styled-components";
import Image from './image';
import LogoIcon from '../img/Logo_icon.svg';
import Bird from '../img/Bird.svg';
import Button from './Button';

const HeaderContainer = styled.div`
  position:absolute;
  color: white;
  margin: 0;
  padding-top: 36px;
  height: auto;
  left: 0px;
  top: 0px;
  width: 100%;
`;

const MainHeader = styled.header`
  font-family: 'ForestSmooth';
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 70px;
  color: #FFFFFF;
  width: 100%; 
  padding-left: 6%;
`;
const Line = styled.hr `  
    color: white;
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    width: 88%;
    margin: 7px auto;
    padding: 0;
`;

const List = styled.div `  
    color: black;
    margin-left: 50%;
    font-size: 14px;
    margin-top: 5%;
`;

const Logo = styled.img `  
    margin-left: 6%;
    color: white;
    
`;

class Header extends React.Component {
    render(){
      return(
        
        <HeaderContainer>
           <Logo  src={LogoIcon} alt={LogoIcon} />
          <Line></Line>
          <MainHeader>лекции о музыке и моде</MainHeader>
          <p style={{ marginLeft: '50%',  marginTop: '10%', marginBottom: '40%'}}>Олеся Литневски и другие....</p>

          <List>
            Вам будет интересно, если: 
          </List>
          <List>
          <span style={{ position: 'absolute', marginLeft: '-20px' }}><Image image={Bird} /></span> вы утончённая натура и постоянно поднимаете свой культурный уровень;
          </List>
          <List style={{ 'margin-bottom': '20%' }}>
          <span style={{ position: 'absolute', marginLeft: '-20px'}}><Image image={Bird} /></span> красота и искусство придают вам силы
          </List>

          <Button>{this.props.title}</Button>
          


        </HeaderContainer>
      )
    }
  }

  export default Header