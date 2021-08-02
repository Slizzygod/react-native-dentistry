import React from "react";
import styled from "styled-components/native";

const ButtonPrimary = ({ children, color }) => {
  return (
    <ButtonWraper color={color}>
      <ButtonText>{children}</ButtonText>
    </ButtonWraper>
  );
};

export default ButtonPrimary;

ButtonPrimary.defaultProps = {
  color: "#2a86ff",
};

const ButtonWraper = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: ${(props) => props.color};
  height: 45px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-weight: 500;
  font-size: 15px;
`;
