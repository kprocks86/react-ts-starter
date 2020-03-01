import { gql } from "apollo-boost";

const REGISTER_USER = gql`
  mutation register($name: String!, $password: String!, $email: String!) {
    register(name: $name, password: $password, email: $email) {
      user {
        name
        email
      }
      errors {
        path
        message
      }
    }
  }
`;

export { REGISTER_USER };
