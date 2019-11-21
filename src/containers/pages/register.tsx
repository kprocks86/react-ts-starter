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

import {REGISTER_USER} from './login.mutation'
import {RouteComponentProps} from 'react-router'
import {useMutation} from '@apollo/react-hooks'

const Register: React.FC<RouteComponentProps> = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [nameError, setNameError] = useState(true)
  const [emailError, setEmailError] = useState(true)
  const [passwordError, setPasswordError] = useState(true)

  const [touched, setTouched] = useState(false)

  useEffect(() => {
    name.trim().length <= 0 ? setNameError(true) : setNameError(false)
  }, [name])

  useEffect(() => {
    passwordRegex.test(password)
      ? setPasswordError(false)
      : setPasswordError(true)
  }, [password])

  useEffect(() => {
    emailRegex.test(email) ? setEmailError(false) : setEmailError(true)
  }, [email])

  const isValid = () => !nameError && !emailError && !passwordError
  const [register, {loading, error}] = useMutation(REGISTER_USER)
  return (
    <DotContainer>
      <Gradient>
        <CornerCircle />
        <Polygon />
        <AbsoluteContainer>
          <AbsoluteRow>
            <AbsoluteCol xl={3} lg={3} offset={{xl: 8, lg: 8}}>
              <Input
                value={name}
                onChange={e => setName(e.target.value)}
                isError={touched && nameError}
                placeholder='Name'
              />
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
              <LoginBtn
                onClick={() => {
                  setTouched(true)
                  if (isValid()) {
                    register({variables: {email, password, name}})
                  }
                }}>
                {' '}
                Sign me up!{' '}
              </LoginBtn>
            </AbsoluteCol>
          </AbsoluteRow>
        </AbsoluteContainer>
        <Triangle />
      </Gradient>
    </DotContainer>
  )
}

export default Register
