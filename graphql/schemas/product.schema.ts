import { gql } from "apollo-server-express";

export const productTypeDefs = gql`
  type Product {
    id: ID!
    imageUrl: String!
    name: String!
    price: Price!
    description: String!
    category: String!
    size: Size!
  }

  type Price {
    small: Float
    medium: Float
    large: Float
  }

  enum Size {
    small
    medium
    large
  }

  type Query {
    getAllProducts: [Product]
  }

  input PriceInput {
    small: Float
    medium: Float
    large: Float
  }

  input CreateProductInput {
    imageUrl: String!
    name: String!
    price: PriceInput!
    description: String!
    category: String!
    size: Size!
  }

  input EditProductInput {
    imageUrl: String
    name: String
    price: PriceInput
    description: String
    category: String
    size: Size
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product
    editProduct(id: ID!, input: EditProductInput!): Product
    deleteProduct(id: ID!): Product
  }
`;
