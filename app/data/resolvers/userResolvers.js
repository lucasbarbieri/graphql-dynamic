"use strict";

const resolverName = 'user';
const modelName = 'User';
const defaultResolvers = new (require('../defaults/defaultResolvers'))();

const userResolvers = () => {
  return defaultResolvers.getResolvers({ resolverName, modelName });
}


module.exports = userResolvers();

