const { GraphQLInputObjectType, GraphQLString } = require("graphql");
const { Fields } = require("./field");

exports.UserInputType = new GraphQLInputObjectType({
  name: "UserInput",
  fields: Fields,
});
