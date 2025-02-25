import React from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Lectures from "./components/Lectures";
import Footer from "./components/Footer";
import Club from "./components/Club";
import Lecturer from "./components/Lecturer";
import Slider from "./components/Slider";
import { styled } from "styled-components";
// import Image from "./components/image";
import background from './img/Mobil_main_background.svg';
import SmallBackground from './img/Small_background.svg';
import MobilePattern from './img/Mobile_pattern.svg';
// import './css/main.css'

const MainDiv = styled.div`
    width: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
`;

const Background = styled.img`
position: relative;
z-index: -1;
  width: 100%;
  /* position: absolute; */
  margin: 0;
  padding: 0;
  margin-bottom: -5%;
`;

const MobPattern = styled.img`
  position: absolute;
  z-index: 1000;
`;

const Section = styled.section`
  width: 100%;
  margin: 0;
  padding-bottom: 10vw;
`;

class App extends React.Component {
  render() {
    return (
      <MainDiv >
        <img className='backgrounding'  src={background} alt={background} />
        <Header title="header" />
        
        {/* <Image image={Lecture_image1} /> */}
        <main>
          <Lectures />
          <Background src={ SmallBackground } alt={SmallBackground} /> 
          <MobPattern className='mobile_pattern' src={ MobilePattern } alt={MobilePattern} />
          <Section >
            <Club />
            <Button />
            <Lecturer />
            <Slider />
            <Button />
          </Section>
        </main>
        <Footer />
      </MainDiv>
    );
  }
}




  // class App extends React.Component{
  //   constructor(props){
  //       super(props)
  //       this.state = {
  //           helpText: "Help text",
  //           uaerData: ""
  //       }
  //       this.inputClick = this.inputClick.bind(this)
  //   }

  //   helpText = "Help text"
  //   render(){
  //     return (<div className='name'>
  //     <h1>{this.state.helpText}</h1>
  //     <h2>{this.state.userData}</h2>
  //     <Header title="Sapka"></Header>
  //     <input placeholder={this.state.helpText}
  //     onClick={this.inputClick}
  //     onChange={event => this.setState({userData: event.target.value})}
  //     onMouseEnter={this.mouseOver}/>
  //     <p>{this.state.helpText === "Help text!" ? "Yes" : "No"}</p>
  //     <Image image={logo} />
  //   </div>)
  //   }
    // inputClick(){
    //     this.setState({helpText: "Changed"})
    //     console.log("Clicked")
    // }
    // mouseOver(){
    //     console.log("Mouse over")
    // }
  
  // }

  export default App