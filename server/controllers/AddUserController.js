const addUserService = require('../services/AddUserService');
const User = require('../models/user');


class AddUserController {

    static async addUser(req, res) {
        const mobileExist = await addUserService.mobileExist(req.body.mobile);
        if (mobileExist) {
            return res.status(500).json({
                status: "User with this mobile number already exist"
            })
        }

        const user1 = new User(req.body);
        await addUserService.addUser(user1);

        return res.status(200).json({
            status: "success",
            user: user1
        })
    }

    static async getUser(req, res) {
        const name = req.params.name;
        const user = await addUserService.getUser(name);
        if (!user) {
            return res.send(401).json({
                status: "User not found",
            })
        }

        return res.send(200).json({
            status: "Success",
            user: user
        })
    }

    static async updateUserbyName(req, res) {
        const name = req.params.name;
        const user = await addUserService.getUser(name);
        console.log("User:", user);
        console.log("dsfdf: ", req.body);

        if (user === null) {
            return res.send(404).json({
                status: "User not found",
            })
        }

        user.first_name = req.body.first_name;
        user.last_name = req.body.last_name;
        user.email = req.body.email;
        user.mobile_number = req.body.mobile_number;

        await addUserService.addUser(user);

        return res.status(200).json({
            status: "User updated successfully"
        })
    }

    static async addImage(req, res) {
        const file = req.file;
        console.log("file: ", file);

        // if (!file) {
        //     res.status(400).json({
        //         status: 'File upload error.'
        //     })
        // }

        res.send(file);
    }
}

module.exports = AddUserController;