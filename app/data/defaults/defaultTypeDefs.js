'use strict';

class defaultTypeDefs {

  getSchema(params) {
    const { modelName, fields } = params;

    const modelType = JSON.stringify(fields).replace(/,/g, ' ').replace(/"/g, '').replace(/'/g, '');
    const paramsUpdateFields = JSON.stringify(fields).replace(/"/g, '').replace(/'/g, '').replace(/{/g, '').replace(/}/g, '');
    delete fields.id;
    const paramsCreateFields = JSON.stringify(fields).replace(/"/g, '').replace(/'/g, '').replace(/{/g, '').replace(/}/g, '');


    const schema = `
    type ${modelName} ${modelType}

    type Query {
      all${modelName}: [${modelName}]
      get${modelName}ById(id: Int!): ${modelName}
    }

    type Mutation {
      create${modelName}(${paramsCreateFields}): ${modelName}
      update${modelName}(${paramsUpdateFields}): ${modelName}
    }
  `;
    return schema;
  }

}

module.exports = defaultTypeDefs;

