"use strict";

const resolverName = 'didKnowUs';
const modelName = 'DidKnowUs';
const defaultResolvers = new (require('../defaults/defaultResolvers'))();

const didKnowUsResolvers = () => {
  return defaultResolvers.getResolvers({ resolverName, modelName });
}


module.exports = didKnowUsResolvers();

