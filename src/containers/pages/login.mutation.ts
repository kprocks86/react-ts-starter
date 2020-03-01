import { gql } from "apollo-boost";

const LOGIN_USER = gql`
  mutation login($password: String!, $email: String!) {
    login(password: $password, email: $email) {
      ok
      token
      errors {
        message
      }
    }
  }
`;

export { LOGIN_USER };
