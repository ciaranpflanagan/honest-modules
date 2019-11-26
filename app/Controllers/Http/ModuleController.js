'use strict'

class ModuleController {
	// Shows Single Module Page
	  index ({ request, response, view }) {
	    return view.render('modules/index')
	  }
}

module.exports = ModuleController
