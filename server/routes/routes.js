const express = require('express');
const routes = express.Router();
const authController = require('../controllers/AddUserController');
const upload = require('../services/FIleUploadService');

// Home page route.
routes.get('/', function (req, res) {
    res.send('Wiki home page');
})

routes.post('/add', authController.addUser);
routes.get('/getUser/:name', authController.getUser);
routes.put('/updateUser/:name', authController.updateUserbyName);
routes.post('/upload', upload.single('file'), authController.addImage);

module.exports = routes;