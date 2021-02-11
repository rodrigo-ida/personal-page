import React from "react";
import styled from "styled-components";
import StyledBurgerBtn from "./S.burgerBtn";

const StyledBurgerBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 30px;
  padding: 1px;

  @media (min-width: 600px) {
    display: none;
  }
`;



const BurgerBtn = (props) => {




  return (
    <StyledBurgerBtnContainer className="styled-burgerbtn-container"
      onClick={() => props.setclicked((prevState) => !prevState)}
    >
      <StyledBurgerBtn className="burgerbtn-lines" clicked={props.clicked} position="top" />
      <StyledBurgerBtn className="burgerbtn-lines" clicked={props.clicked} position="middle" />
      <StyledBurgerBtn className="burgerbtn-lines" clicked={props.clicked} position="bottom" />
    </StyledBurgerBtnContainer>
  );
};

export default BurgerBtn;
