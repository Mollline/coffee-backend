import { gql } from "apollo-server-express";

export const categoryTypeDefs = gql`
  type Category {
    id: ID!
    name: String!
  }

  input CreateCategoryInput {
    name: String!
  }

  input EditCategoryInput {
    name: String!
  }

  extend type Query {
    getAllCategories: [Category!]
  }

  extend type Mutation {
    createCategory(input: CreateCategoryInput!): Category
    editCategory(id: ID!, input: EditCategoryInput!): Category
    deleteCategory(id: ID!): Category
  }
`;
