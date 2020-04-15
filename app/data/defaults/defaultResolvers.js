"use strict";

class defaultResolvers {
  getResolvers(params) {
    const { resolverName, modelName } = params;

    const Model = use(`App/Models/${modelName}`)
    const Service = new (require(`../services/${modelName}Service`))();

    const exportResolvers = {};

    const query = {};
    const mutations = {};

    query[`all${modelName}`] = async (_, { }, { auth, errorName }) => {
      //await auth.check();
      const response = await Model.all();
      return response.toJSON();
    }

    query[`get${modelName}ById`] = async (_, { id }, { auth, errorName }) => {
      //await auth.check();
      const response = await Model.find(id);
      return response.toJSON();
    }

    mutations[`create${modelName}`] = async (_, { data }, { auth, errorName }) => {
      try {
        //await auth.check();
        const validate = await Service.validate(data);
        if (validate) {
          const ModelData = await Model.create(data);


          if (typeof Service.afterCreate === "function") {
            await Service.afterCreate(data, ModelData);
          }

          return ModelData;

        } else {
          throw new Error(errorName.VALIDATION_ERROR)
        }

      } catch (e) {
        return e;
      }
    }

    mutations[`update${modelName}`] = async (_, { data }, { auth, errorName }) => {
      try {
        //await auth.check();

        if (!data.id) {
          throw new Error(errorName.BAD_REQUEST)
        }

        const validate = await Service.validate(data);
        if (validate) {
          const response = await Model.query().where('id', data.id).update(data);

          if (!response) {
            throw new Error(errorName.BAD_REQUEST)
          }

          return data;
        } else {
          throw new Error(errorName.VALIDATION_ERROR)
        }

      } catch (e) {
        return e;
      }
    }

    exportResolvers[`${resolverName}Resolvers`] = {
      Query: query,
      Mutation: mutations,
    };

    return exportResolvers[`${resolverName}Resolvers`];

  }
}
module.exports = defaultResolvers;
