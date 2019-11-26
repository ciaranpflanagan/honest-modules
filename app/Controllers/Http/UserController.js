'use strict'
const { validate } = use('Validator')
const Database = use('Database')
const Hash = use('Hash')
const moment = require('moment');

class UserController {
  // Login method
  async login ({ auth, request, response, session }) {
    const {email, password} = request.all();

    try {
      await auth.attempt(email, password);
      return response.redirect('/')
    } catch (error) {
      session.withErrors({ email: "Wrong username or password!"});
      return response.redirect('/login');
    }
  }

  async logout ({ auth, response }) {
    await auth.logout()

    return response.redirect('/')
  }

  // Register method
  async register ({ request, session, response }) {
    const rules = {
      username: 'required',
      email: 'required|email|unique:users,email',
      password: 'required'
    }

    const validation = await validate(request.all(), rules)

    if (validation.fails()) {
      session
        .withErrors(validation.messages())
        .flashExcept(['password'])

      return response.redirect('back')
    }

    const hashed_password = await Hash.make(request.input('password'))

    // Insert user into database
  const insert = await Database
    .insert({
      username: request.input('username'),
      email: request.input('email'),
      password: hashed_password,
      created_at: moment().format('YYYY-MM-DD hh:mm:ss'),
      updated_at: moment().format('YYYY-MM-DD hh:mm:ss')
    })
    .into('users')

  return response.redirect('/login')
  }

  // Returns user
  show ({ auth, params }) {
    if (auth.user.id !== Number(params.id)) {
      return "You cannot see someone else's profile"
    }
    return auth.user
  }

  /*
  -----------------------
  Login & Register Forms
  -----------------------   
  */

  // Shows login form
  show_login ({ request, response, view }) {
    return view.render('auth/login')
  }

  // Show registration form
  show_register ({ request, response, view }) {
    return view.render('auth/register')
  }
}

module.exports = UserController