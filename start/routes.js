"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");
const GraphqlAdonis = use("ApolloServer");
const FormatError = require('easygraphql-format-error')
const schema = require("../app/data/schema");

const formatError = new FormatError([
  {
    name: 'INVALID_EMAIL',
    message: 'The email is not valid',
    statusCode: 400
  },
  {
    name: 'INVALID_FORGET_TOKEN',
    message: 'The recovery token is not valid or not exist',
    statusCode: 400
  },
  {
    name: 'INVALID_FORGET_NEW_PASSWORD',
    message: 'Invalid new password, check the data.',
    statusCode: 400
  },
  {
    name: 'VALIDATION_ERROR',
    message: 'Check the fields and values.',
    statusCode: 400
  },
  { name: 'GENERAL_FAIL', message: 'Ops, something wrong', statusCode: 400 }
])
const errorName = formatError.errorName

Route.route(
  "/graphql",
  ({ request, auth, response }) => {
    return GraphqlAdonis.graphql(
      {
        schema,
        context: { auth, errorName },
        formatError: (err) => {
          return formatError.getError(err)
        }
      },
      request,
      response
    );
  },
  ["GET", "POST"]
);

Route.get("/graphiql", ({ request, response }) => {
  return GraphqlAdonis.graphiql({ endpointURL: "/graphql" }, request, response);
});

Route.on("/").render("welcome");
