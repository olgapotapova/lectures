import React from 'react'; 
import Image from './image';
import { styled } from "styled-components";
import { device } from './device';


class Lecture extends React.Component {
    // lecture = this.props.lecture

    render(){       
      const { header, src, img } = this.props;
      // const { lecture } = this.props;
      // const lecture = this.props;

      const HeaderContainer = styled.div`
        display: flex;
        flex-direction: column;
        height: 180px;
        max-width: 80%;

        @media ${device.laptop} {
          background-color: #C9DBBF;
          border-radius: 20px;
          max-width: 50%;
          max-height: 50vw;
        }
      `;

      const Lecture = styled.div`
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding-bottom: auto; 
        @media ${device.laptop} {
          padding-bottom: 10%; 
        }
      `;

      const Header = styled.h3`
        position: relative;
        color: #0B0B15;
        margin-left: 0;
        padding-top: 36px;
        padding-left: 45px;
        font-weight: 400;
        font-size: 28px;
        text-indent: 20px;
        @media ${device.laptop} {
          position: absolute;
          margin-left: 50%;
          padding: 0 20px auto;
          margin-top: 0%;
        }
      `;

      const IconContainer = styled.span`
        position: absolute;
        margin-top: -3%;
        margin-left: -20%;
        
      `;

      const LectureImage = styled.img`
        width: 100%;
        @media ${device.laptop} {
          max-width: 50%;
        }
      `;

      return(
        <Lecture className='lecture' key={Lecture.id}>
                    <HeaderContainer>
                      <Header>
                        <IconContainer>
                          <Image image={img} alt={header} style={{ width: '100%'}} /> 
                        </IconContainer>{header}
                      </Header>
                    </HeaderContainer>
                    <LectureImage src={src} alt={header} />
                </Lecture>
      )
    } 
  }
  export default Lecture