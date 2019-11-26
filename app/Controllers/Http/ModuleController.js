'use strict'
const Database = use('Database')

class ModuleController {
	// Shows Single Module Page
	  async index ({ request, response, view, params }) {
	  	const mod = await Database.from('modules')
	  		.where('module_code', params.module_code)

	    return view.render('modules/index', {mod: mod})
	  }
}

module.exports = ModuleController
