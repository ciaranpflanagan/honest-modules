'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', 'HomeController.index')

Route.get('users/:id', 'UserController.show').middleware('auth')

// Modules Routes
Route.get('/:module_code', 'ModuleController.index')
Route.post('/add-review', 'ModuleController.add')

// User Account Routes
Route.get('/login', 'UserController.show_login')
Route.get('/logout', 'UserController.logout')
Route.get('/register', 'UserController.show_register')
Route.post('/register', 'UserController.register')
Route.post('login', 'UserController.login').middleware('guest')
Route.get('users/:id', 'UserController.show').middleware('auth')
