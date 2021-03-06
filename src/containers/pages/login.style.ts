import { Col, Container, Row } from "react-awesome-styled-grid";
import styled, { keyframes } from "styled-components";

import smallElements from "../../assets/smallElements.svg";

const leftRight = keyframes`
  0% {
    left: 32px
  }

  50% {
    left: 50px
  }
  100% {
    left: 32px
  }
`;

const rightLeft = keyframes`
  0% {
    top: 0px
  }

  50% {
    top: -20px
  }
  100% {
    top: 0px
  }
`;

const AbsoluteContainer = styled(Container)`
  height: 100%;
  background-image: url(${smallElements});
`;
const AbsoluteRow = styled(Row)`
  height: inherit;
`;
const AbsoluteCol = styled(Col)`
  align-self: center;
  z-index: 40;
`;

const triangleKeys = keyframes`
  0% {
    left: 0px
  }

  50% {
    left: -20px
  }
  100% {
    left: 0px
  }
`;

const Gradient = styled.div`
  background-image: linear-gradient(
    -225deg,
    #ffe29f 0%,
    #ffa99f 48%,
    #ff719a 100%
  );
  width: 100%;
  height: 100vh;
`;

const DotContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const LoginBtn = styled.button`
  color: #f7f8f9;
  cursor: pointer;
  text-align: left;
  margin: 0 auto;
  margin-top: 30px;
  background: #f5bba0;
  border: none;
  font-size: 15px;
  padding: 7px 12px;
  border-radius: 6px;
  outline: none;
  -webkit-box-shadow: 2px 2px 7px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 2px 7px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 2px 7px -3px rgba(0, 0, 0, 0.75);
`;

const CornerCircle = styled.div`
  background-image: linear-gradient(
    -225deg,
    #ffe29f 0%,
    #ffa99f 48%,
    #ff719a 100%
  );
  height: 300px;
  width: 300px;
  clip-path: circle(70.1% at 19% 18%);
  position: absolute;
  transition: 0.5s ease-in-out;
  animation: ${rightLeft} 1s infinite;
  animation-duration: 8s;
`;
const Polygon = styled.div`
  background-image: linear-gradient(
    -225deg,
    #ffe29f 0%,
    #ffa99f 48%,
    #ff719a 100%
  );
  height: 238px;
  width: 280px;
  clip-path: polygon(25% 0%, 100% 0, 75% 100%, 0% 100%);
  position: absolute;
  top: 260px;
  left: 32px;
  transition: 0.5s ease-in-out;
  animation: ${leftRight} 6s infinite;
  animation-duration: 15s;
`;

const Triangle = styled.div`
  background-image: linear-gradient(
    -225deg,
    #ffe29f 0%,
    #ffa99f 48%,
    #ff719a 100%
  );
  height: 238px;
  width: 280px;
  clip-path: polygon(53% 0, 0% 100%, 100% 100%);
  position: absolute;
  bottom: 0;
  left: 32px;
  transition: 0.5s ease-in-out;
  animation: ${triangleKeys} 2s infinite;
  animation-duration: 5s;
`;

interface InputProp {
  isError: boolean;
}
const Input = styled.input<InputProp>`
  background-color: #f7f8f9;
  border-radius: 6px;
  border: 0;
  color: #000;
  display: block;
  font-size: 15px;
  padding: 10px 15px;
  -webkit-transition: -webkit-box-shadow 0.2s;
  transition: box-shadow 0.2s;
  margin-bottom: 5px;
  &:focus {
    outline: none;
  }

  ${({ isError }) =>
    isError
      ? `
    box-shadow: inset 0 0 1px 2px red;`
      : `
    &:focus {
      outline: none;
      -webkit-box-shadow: 0px 0px 8px -1px rgba(0,0,0,0.75);
      -moz-box-shadow: 0px 0px 8px -1px rgba(0,0,0,0.75);
      box-shadow: 0px 0px 8px -1px rgba(0,0,0,0.75);
    }`}
`;
const FormWrapper = styled.div`
  margin: 0 auto;
  width: 330px;
`;

const Error = styled.div`
  color: white;
  text-align: end;
`;

const RegisterLink = styled.div`
  color: white;
  font-size: 10px;
  text-align: end;
`;

const Title = styled.div`
  font-size: 35px;
  text-align: start;
  padding-bottom: 35px;
  color: #f6bea0;
`;

export {
  Title,
  Gradient,
  CornerCircle,
  Polygon,
  Triangle,
  DotContainer,
  Input,
  FormWrapper,
  AbsoluteContainer,
  AbsoluteRow,
  AbsoluteCol,
  LoginBtn,
  Error,
  RegisterLink
};
