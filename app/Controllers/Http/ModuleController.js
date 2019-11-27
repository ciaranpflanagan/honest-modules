'use strict'
const Database = use('Database')
const { validate } = use('Validator')
const moment = require('moment');

const Module = use('App/Models/Module')

class ModuleController {
  // Shows Single Module Page
  async index ({ request, response, view, params }) {
  	const mod = await Database.from('modules')
  		.where('module_code', params.module_code)
  	const reviews = await Database.from('reviews')
  		.where('module_id', Module.get_id_from_code(params.module_code))

    return view.render('modules/index', {mod: mod, reviews: reviews})
  }

  // Add review method
  async add ({ request, session, response, auth }) {
    const rules = {
      title: 'required',
      body: 'required',
    }

    // Validation
    const validation = await validate(request.all(), rules)
    if (validation.fails()) {
      session
        .withErrors(validation.messages())

      return response.redirect('back')
    }

    // Setting rating default
    if (!request.input('rating')) {
      var rating = 2.5;
    } else {
      var rating = request.input('rating')
    }

    // Insert review into database
  	const insert = await Database
    .insert({
      module_id: Module.get_id_from_code(request.input('module_code')),
      user_id: auth.user.id,
      title: request.input('title'),
      body: request.input('body'),
      rating: rating,
      created_at: moment().format('YYYY-MM-DD hh:mm:ss'),
      updated_at: moment().format('YYYY-MM-DD hh:mm:ss')
    })
    .into('reviews')

  return response.redirect('back')
  }
}

module.exports = ModuleController
