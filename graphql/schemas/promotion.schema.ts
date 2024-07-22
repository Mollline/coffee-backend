import { gql } from "apollo-server-express";

export const promotionTypeDefs = gql`
  type Promotion {
    id: ID!
    productId: String!
    title: String!
    description: String!
  }

  input CreatePromotionInput {
    productId: String!
    title: String!
    description: String!
  }

  input EditPromotionInput {
    title: String!
    description: String!
  }

  extend type Query {
    getAllPromotions: [Promotion!]
  }

  extend type Mutation {
    createPromotion(input: CreatePromotionInput!): Promotion
    editPromotion(id: ID!, input: EditPromotionInput!): Promotion
    deletePromotion(id: ID!): Promotion
  }
`;
