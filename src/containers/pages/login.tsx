import {
  AbsoluteCol,
  AbsoluteContainer,
  AbsoluteRow,
  CornerCircle,
  DotContainer,
  Gradient,
  Input,
  LoginBtn,
  Polygon,
  Triangle
} from './login.style'
import React, {useEffect, useState} from 'react'
import {emailRegex, passwordRegex} from '../../constant'

import {RouteComponentProps} from 'react-router'

const Login: React.FC<RouteComponentProps> = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [emailError, setEmailError] = useState(true)
  const [passwordError, setPasswordError] = useState(true)

  const [touched, setTouched] = useState(false)

  useEffect(() => {
    passwordRegex.test(password)
      ? setPasswordError(false)
      : setPasswordError(true)
  }, [password])

  useEffect(() => {
    emailRegex.test(email) ? setEmailError(false) : setEmailError(true)
  }, [email])

  const isValid = () => !emailError && !passwordError

  function submit() {
    setTouched(true)
    if (isValid()) {
      // make mandotory calls
    }
  }

  return (
    <DotContainer>
      <Gradient>
        <CornerCircle />
        <Polygon />
        <AbsoluteContainer>
          <AbsoluteRow>
            <AbsoluteCol xl={3} lg={3} offset={{xl: 8, lg: 8}}>
              <Input
                value={email}
                onChange={e => setEmail(e.target.value)}
                isError={touched && emailError}
                placeholder='Email'
              />
              <Input
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                isError={touched && passwordError}
                placeholder='Password'
              />
              <LoginBtn onClick={submit}> Login </LoginBtn>
            </AbsoluteCol>
          </AbsoluteRow>
        </AbsoluteContainer>
        <Triangle />
      </Gradient>
    </DotContainer>
  )
}

export default Login
