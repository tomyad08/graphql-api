const { GraphQLObjectType, GraphQLString } = require("graphql");
const { Fields } = require("./field");

exports.UserType = new GraphQLObjectType({
  name: "User",
  fields: Fields,
});
