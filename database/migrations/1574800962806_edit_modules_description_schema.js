'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EditModulesDescriptionSchema extends Schema {
  up () {
    this.table('modules', (table) => {
      table.text('description').notNullable().alter()
    })
  }

  down () {
    this.table('modules', (table) => {
      table.string('description').nullable().alter()
    })
  }
}

module.exports = EditModulesDescriptionSchema
