'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReviewsSchema extends Schema {
  up () {
    this.table('reviews', (table) => {
      table.integer('user_id').notNullable().after('module_id')
    })
  }

  down () {
    this.table('reviews', (table) => {
      table.dropColumn('user_id')
    })
  }
}

module.exports = ReviewsSchema
