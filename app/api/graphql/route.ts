import { resolvers } from "../../../graphql/resolvers/index";
import {
  userTypeDefs,
  productTypeDefs,
  orderTypeDefs,
  promotionCodeTypeDefs,
  promotionTypeDefs,
  categoryTypeDefs,
} from "../../../graphql/schemas";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from "next/server";
import connect from "../../../graphql/database/db";
import { mergeTypeDefs } from "@graphql-tools/merge";

connect();
const server = new ApolloServer({
  csrfPrevention: true,
  introspection: true,
  typeDefs: mergeTypeDefs([
    userTypeDefs,
    productTypeDefs,
    orderTypeDefs,
    promotionCodeTypeDefs,
    promotionTypeDefs,
    categoryTypeDefs,
  ]),
  resolvers,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req: any) => ({ req }),
});

export { handler as GET, handler as POST };
