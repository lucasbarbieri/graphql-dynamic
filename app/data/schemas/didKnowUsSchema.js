"use strict";

const resolverName = 'didKnowUs';
const modelName = 'DidKnowUs';
const fields = {
  id: 'Int!',
  name: 'String!'
};

const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require(`../resolvers/${resolverName}Resolvers`);
const defaultTypeDefs = new (require(`../defaults/defaultTypeDefs`))();

const getTypeDefs = () => {
  const typeDefs = defaultTypeDefs.getSchema({ modelName, fields });
  return makeExecutableSchema({ typeDefs, resolvers });
}

module.exports = getTypeDefs();
