'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MakingModulesModulesSchema extends Schema {
  up () {
    this.create('modules', (table) => {
      table.increments()
      table.string('module_code').notNullable().unique()
      table.string('name').notNullable()
      table.string('description').nullable()
      table.string('college').notNullable()
      table.string('level').nullable()
      table.string('link').notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('making_modules_modules')
  }
}

module.exports = MakingModulesModulesSchema
