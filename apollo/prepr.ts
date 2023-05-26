// ./apollo/prepr.ts 

import { defineApolloClient } from "@nuxtjs/apollo";

export default defineApolloClient({
  httpEndpoint: "https://graphql.prepr.io/graphql",
  defaultOptions: {},
  inMemoryCacheOptions: {},
  tokenName: "apollo:prepr.token",
  tokenStorage: "cookie",
  authType: "Bearer",
  authHeader: "Authorization",
  httpLinkOptions: {
    headers: {
      Authorization: `Bearer ${process.env.PREPR_ACCESS_TOKEN || '7f05e9e2f17f1b3d5e08dab3a565acbea8b87745473917e159f70ae1cf0334b9'}`,
    },
  },
});
