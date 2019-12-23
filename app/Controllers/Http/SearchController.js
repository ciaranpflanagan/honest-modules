'use strict'
const Database = use('Database')

class SearchController {
	async search ({ view, params }) {
		const results = await Database.from('modules')
			.where('module_code', params.module_code)

			return view.render('search', {results: results, search: params.module_code})
	}

	async search_form ({ view, request }) {
		const results = await Database.from('modules')
			.where('module_code', request.input('search'))

			return view.render('search', {results: results, search: request.input('search')})
	}
}

module.exports = SearchController
