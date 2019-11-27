'use strict'
const Database = use('Database')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Module extends Model {
	// Returns module ID from module code
	static get_id_from_code(module_code) {
		return Database.select('id').from('modules').where('module_code', module_code).first()
	}
}

module.exports = Module
