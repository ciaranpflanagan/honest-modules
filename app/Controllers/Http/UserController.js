'use strict'

class UserController {

  async login ({ request, auth }) {
    const { email, password } = request.all()
    await auth.attempt(email, password)

    return 'Logged in successfully'
  }

  // Show user profile
  show ({ auth, params }) {
    if (auth.user.id !== Number(params.id)) {
      return 'You cannot see someone else\'s profile'
    }
    return auth.user
  }

  register ({ view }) {
    return view.render('auth.register')
  }

}

module.exports = UserController
