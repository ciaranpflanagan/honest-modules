'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReviewsSchema extends Schema {
  up () {
    this.table('reviews', (table) => {
      table.integer('rating').notNullable().after('body')
    })
  }

  down () {
    this.table('reviews', (table) => {
      table.dropColumn('rating')
    })
  }
}

module.exports = ReviewsSchema
