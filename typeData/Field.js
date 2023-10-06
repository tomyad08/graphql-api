const { GraphQLString } = require("graphql");

exports.Fields = {
  id: { type: GraphQLString },
  name: { type: GraphQLString },
  born: { type: GraphQLString },
  address: { type: GraphQLString },
  university: { type: GraphQLString },
  numberStudent: { type: GraphQLString },
  faculty: { type: GraphQLString },
};
