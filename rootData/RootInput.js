const { GraphQLObjectType } = require("graphql");
const { UserType } = require("../typeData/dataType");
const { UserInputType } = require("../typeData/inputType");
const { studentDatabase } = require("../data/data");
const { DataType } = require("../typeData/Type");

exports.RootMutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    updateUser: {
      type: UserType,
      args: {
        input: { type: UserInputType },
      },
      resolve: (parent, args) => {
        const { id, name, email } = args.input;
        const userToUpdate = studentDatabase[id];

        if (!userToUpdate) {
          throw new Error(`User with ID ${id} not found.`);
        }

        // Update data pengguna
        userToUpdate.name = name;
        userToUpdate.email = email;

        return userToUpdate;
      },
    },

    deleteUser: {
      type: UserType,
      args: {
        input: { type: DataType[0] },
      },
      resolve: (parent, args) => {
        const { id } = args.input;
        const userToDelete = studentDatabase[id];
        if (!userToDelete) {
          throw new Error(`User with ID ${id} not found.`);
        }
        delete studentDatabase[id];
        return userToDelete;
      },
    },
  },
});
