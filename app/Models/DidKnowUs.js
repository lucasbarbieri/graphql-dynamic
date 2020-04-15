'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class DidKnowUs extends Model {
  static get table() {
    return "did_know_us";
  }
}

module.exports = DidKnowUs
