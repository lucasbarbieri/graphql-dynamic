'use strict'
const User = use('App/Models/User');

class UserService {
    async validate(data) {
        return true;
    }
}

module.exports = UserService;
