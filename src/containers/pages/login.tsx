import {
  AbsoluteCol,
  AbsoluteContainer,
  AbsoluteRow,
  CornerCircle,
  DotContainer,
  Error,
  Gradient,
  Input,
  LoginBtn,
  Polygon,
  RegisterLink,
  Title,
  Triangle
} from "./login.style";
import React, { useEffect, useState } from "react";
import { emailRegex, passwordRegex } from "../../constant";

import { LOGIN_USER } from "./login.mutation";
import { Link } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import { useMutation } from "@apollo/react-hooks";

const Login: React.FC<RouteComponentProps> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);

  const [touched, setTouched] = useState(false);

  const [login, { loading, error }] = useMutation(LOGIN_USER);

  useEffect(() => {
    passwordRegex.test(password)
      ? setPasswordError(false)
      : setPasswordError(true);
  }, [password]);

  useEffect(() => {
    emailRegex.test(email) ? setEmailError(false) : setEmailError(true);
  }, [email]);

  const isValid = () => !emailError && !passwordError;

  return (
    <DotContainer>
      <Gradient>
        <CornerCircle />
        <Polygon />
        <AbsoluteContainer>
          <AbsoluteRow>
            <AbsoluteCol xl={3} lg={3} offset={{ xl: 8, lg: 8 }}>
              <Title>
                {" "}
                Hello there, <br /> welcome back{" "}
              </Title>
              <Input
                value={email}
                onChange={e => setEmail(e.target.value)}
                isError={touched && emailError}
                placeholder="Email"
              />
              <Input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                isError={touched && passwordError}
                placeholder="Password"
              />
              <RegisterLink>
                New here ? <Link to="register"> Sign Up insted </Link>
              </RegisterLink>
              <LoginBtn
                onClick={() => {
                  setTouched(true);
                  if (isValid()) {
                    login({ variables: { email, password } });
                  }
                }}
              >
                Login
              </LoginBtn>
            </AbsoluteCol>
          </AbsoluteRow>
        </AbsoluteContainer>
        <Triangle />
      </Gradient>
    </DotContainer>
  );
};

export default Login;
