import React from "react";
import { styled } from "styled-components";
import Image from './image';
import FeedbackPattern from '../img/Feedback_pattern.png';

const FeedbackContainer = styled.div``;

class Feedback extends React.Component {
  render() {
    return <FeedbackContainer className="feedback">
      <h2>Отзывы</h2>
      <Image image={ FeedbackPattern } alt={FeedbackPattern} style={{ width: '100%' }} /> 
      {/* <ClubText>Клуб любителей классической музыки</ClubText> */}



    </FeedbackContainer>;
  }
}

export default Feedback;