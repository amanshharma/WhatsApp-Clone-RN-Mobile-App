import gql from "graphql-tag";

export default gql`
  query GetChats {
    getChats {
      id
      name
      friends {
        id
      }
    }
  }
`;
