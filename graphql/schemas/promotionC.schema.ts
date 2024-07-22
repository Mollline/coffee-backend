import { gql } from "apollo-server-express";

export const promotionCodeTypeDefs = gql`
  type PromotionCode {
    id: ID!
    code: String!
    discount: Float!
    expirationDate: String!
  }

  input CreatePromotionCodeInput {
    code: String!
    discount: Float!
    expirationDate: String!
  }

  input EditPromotionCodeInput {
    code: String!
    discount: Float!
    expirationDate: String!
  }

  extend type Query {
    getAllPromotionCodes: [PromotionCode!]
  }

  extend type Mutation {
    createPromotionCode(input: CreatePromotionCodeInput!): PromotionCode
    editPromotionCode(id: ID!, input: EditPromotionCodeInput!): PromotionCode
    deletePromotionCode(id: ID!): PromotionCode
  }
`;
