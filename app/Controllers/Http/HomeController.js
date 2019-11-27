'use strict'
const Database = use('Database')
const Module = use('App/Models/Module')

class HomeController {
	// Shows homepage
	async index ({ request, response, view }) {
		 const mods = await Module.all();

		return view.render('home', {mods: mods.toJSON() })
	}
}

module.exports = HomeController
