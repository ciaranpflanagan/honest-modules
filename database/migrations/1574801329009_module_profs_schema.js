'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ModuleProfsSchema extends Schema {
  up () {
    this.create('module_profs', (table) => {
      table.increments()
      table.integer('module_id').notNullable()
      table.integer('professor_id').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('module_profs')
  }
}

module.exports = ModuleProfsSchema
