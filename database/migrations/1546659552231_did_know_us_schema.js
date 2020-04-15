'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DidKnowUsSchema extends Schema {
  up() {
    this.create('did_know_us', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('did_know_us')
  }
}

module.exports = DidKnowUsSchema
