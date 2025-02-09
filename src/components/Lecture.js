import React from 'react'; 
import Image from './image';
import { styled } from "styled-components";


class Lecture extends React.Component {
    //  lecture = this.props.lecture
    render(){       
      const { header, src, img } = this.props;
      const Lecture = styled.div`
      // margin-top: -5px;
`;
        // const { lecture } = this.props;
        // const lecture = this.props;

      return(
        <Lecture className='lecture' key={Lecture.id}>
                    <h3>
                      <span style={{ margin: '5%'}}>
                        <Image image={img} alt={header} style={{ width: '100%', maxWidth: '30px' }} /> 
                      </span>{header}
                    </h3>
                    {/* <h3>{this.lecture.header}</h3>
                    <p>{this.lecture.description}</p> */}
                    {/* <Image image={ReactDOM.renderToString(this.lecture.img)} /> */}
                    {/* <img src={src} alt='ok' style={{width: '100px', height: 'auto'}}/> */}
                    <Image image={src} alt={header} style={{ width: '100%', maxWidth: '50%' }} />

                    {/* <Image image='{this.lecture.img}'></Image> */}
                    {/* <Image Image={this.lecture.src}></Image> */}
                </Lecture>
      )
    } 
  }
  export default Lecture