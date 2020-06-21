const User = require('../models/user');

class AddUserService {

    static async addUser(user) {

        // user.first_name = req.body.first_name;
        // user.last_name = req.body.last_name;
        // user.email = req.body.email;
        // user.mobile_number - req.body.mobile_number;

        return await user.save();
    }

    /**
     * check if mobile number already exist
     */
    static async mobileExist(mobile) {
        return User.count({
            mobile: mobile
        })
    }

    /**
     * get user details
     * @param {} name 
     */
    static async getUser(name) {
        return await User.findOne({
            first_name: name
        });
    }
}

module.exports = AddUserService;