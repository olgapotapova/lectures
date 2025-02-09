import React from 'react';
import { styled } from "styled-components";

const MainButton = styled.button`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 350px;
  height: 108px;
  justify-content: center;
  background: #E4E08F;
  border: 1px solid #000000;
  border-radius: 30px;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  align-items: center;
  color: #000000;
`;

class Button extends React.Component {
    render(){
      return(
        <MainButton className='button'>Перейти к покупке</MainButton>
      )
    }
  }

  export default Button