import { gql } from "apollo-server-express";

export const orderTypeDefs = gql`
  type OrderProduct {
    productId: String!
    size: String!
    quantity: Int!
  }
  type Order {
    id: String!
    products: [OrderProduct!]!
    user: String!
    date: String!
    state: String!
    milkAmount: Int!
    promotionCode: String
  }

  input OrderProductInput {
    productId: String!
    size: String!
    quantity: Int!
  }

  input OrderInput {
    products: [OrderProductInput!]
    user: String!
    state: String!
    milkAmount: Int!
    promotionCode: String
  }

  type Query {
    getAllOrders: [Order!]
  }

  type Mutation {
    createOrder(input: OrderInput): Order!
    editOrder(id: String!, input: OrderInput): Order!
    deleteOrder(id: String!): Order!
  }
`;
