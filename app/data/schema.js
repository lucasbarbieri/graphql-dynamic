const { mergeSchemas } = require('graphql-tools');
const userSchema = require("./schemas/userSchema");
const didKnowUsSchema = require("./schemas/didKnowUsSchema");

const schemas = [userSchema, didKnowUsSchema];

module.exports = mergeSchemas({ schemas })
