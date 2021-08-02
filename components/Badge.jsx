import styled from "styled-components/native";

export default Badge = styled.Text`
  background: ${(props) =>
    props.colors
      ? props.colors.background
      : props.active
      ? "#2A86FF"
      : "#e9f5ff"};
  color: ${(props) =>
    props.colors ? props.colors.color : props.active ? "#fff" : "#4294ff"};
  border-radius: 18px;
  font-weight: bold;
  font-size: 14px;
  width: 70px;
  height: 32px;
  text-align: center;
  line-height: 30px;
`;
