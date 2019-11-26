'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfessorsSchema extends Schema {
  up () {
    this.create('professors', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.integer('college').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('professors')
  }
}

module.exports = ProfessorsSchema
