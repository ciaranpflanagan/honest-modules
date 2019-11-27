'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ModulesSchema extends Schema {
  up () {
    this.table('modules', (table) => {
      table.integer('college').notNullable().alter()
    })
  }

  down () {
    this.table('modules', (table) => {
      table.string('college').notNullable().alter()
    })
  }
}

module.exports = ModulesSchema
