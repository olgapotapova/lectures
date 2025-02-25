import React from "react";
import { styled } from "styled-components";
import Image from "./image";
import MobilePattern from '../img/Mobile_pattern.svg';

const FooterContainer = styled.footer`
  background: #9EC1C4;
  padding-left: 30px;
  padding-bottom: 10vw;
`;

const Header = styled.h3`
    color: #0B0B15;
    padding-top: 40px;
    padding-bottom: 20px;
    // padding: 30px 20px 30px;
    width: 254px;
    height: 28px;
    left: 39px;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
`;

const ImagePattern = styled.img`
  width: 100vw;
  min-width: 100vw;
  padding-bottom: 5%;
`;

class Footer extends React.Component {
  render() {
    return (
      <div style={{ background: '#9EC1C4' }}>
        <FooterContainer className="footer">
          <Header>Полезные ссылки:</Header>
          <p>Политика безопасности</p>
          <p>Куки файлы</p>
          <p>Соц. сети</p>
          <Header>Лекции:</Header>
          <ol>
            <li>Музыкальные салоны, их патронессы и вообще...</li>
            <li>Эпоха Belle Époque в музыке и мужская мода</li>
            <li>Женщины в эпоху Belle Époque, музыка и мода</li>
          </ol>
          <Header>Контакт:</Header>
          <p>Тел.: 6565754747</p>
          
        </FooterContainer>
        <ImagePattern src={ MobilePattern } alt={MobilePattern} />
      </div>
    );
  }
}

export default Footer;