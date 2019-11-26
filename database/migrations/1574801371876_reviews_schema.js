'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReviewsSchema extends Schema {
  up () {
    this.create('reviews', (table) => {
      table.increments()
      table.integer('module_id').notNullable()
      table.string('title').notNullable()
      table.string('body').notNullable()
      // Rating system to be worked out and added later
      table.timestamps()
    })
  }

  down () {
    this.drop('reviews')
  }
}

module.exports = ReviewsSchema
