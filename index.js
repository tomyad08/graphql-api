const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { GraphQLSchema } = require("graphql");
const { RootQueryType } = require("./rootData/RootQuery");
const { RootMutationType } = require("./rootData/RootInput");
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: new GraphQLSchema({
      query: RootQueryType,
      mutation: RootMutationType,
    }),
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Server GraphQL berjalan di http://localhost:4000/graphql");
});
