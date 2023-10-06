const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
} = require("graphql"); // Mengimpor GraphQLInt untuk validasi tipe
const { UserType } = require("../typeData/dataType");
const { studentDatabase } = require("../data/data");

exports.RootQueryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve: (parent, args) => {
        const user = studentDatabase[args.id];
        if (!user) {
          throw new Error(`User with ID ${args.id} not found`);
        }
        return user;
      },
    },
    allUsers: {
      type: new GraphQLList(UserType),
      resolve: () => Object.values(studentDatabase),
    },
    usersInRange: {
      type: new GraphQLList(UserType),
      args: {
        startId: { type: GraphQLInt }, // Mengubah tipe ke GraphQLInt
        endId: { type: GraphQLInt }, // Mengubah tipe ke GraphQLInt
      },
      resolve: (parent, args) => {
        const users = Object.values(studentDatabase);
        return users.filter((user) => {
          const id = parseInt(user.id);
          return id >= args.startId && id <= args.endId;
        });
      },
    },
  },
});
