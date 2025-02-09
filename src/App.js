import React from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Lectures from "./components/Lectures";
import Footer from "./components/Footer";
import Club from "./components/Club";
import Lecturer from "./components/Lecturer";
import Feedback from "./components/Feedback";
import Slider from "./components/Slider";
import { styled } from "styled-components";
import Image from "./components/image";
import background from './img/Mobil_main_background.svg';
import SmallBackground from './img/Small_background.svg';
import MobilePattern from './img/Mobile_pattern.svg';

const MainDiv = styled.div`
    width: 100%;
    overflow: hidden;
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
          <Image image={ SmallBackground } alt={SmallBackground} style={{ width: '100%' }} /> 
          <Image className='mobile_pattern' image={ MobilePattern } alt={MobilePattern} style={{ width: '100%' }} />
          <section style={{ width: '100%' }}>
            <Club />
            <Button />
            <Lecturer />
            <Feedback />
            <Slider />
            <Button />
          </section>
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