const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const user = {
    login: (req,res) => {
        res.render ('./user/login', { styles: 'styles-login.css'})
    },
    register: (req,res) => {
        res.render ('./user/register', { styles: 'styles-register.css'})
    },
    saveUser: (req,res) => {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('./user/register', { styles: 'styles-register.css', errors: errors.mapped(), old: req.body });
        } else {

            let newUser = {

				id: users[users.length - 1].id + 1,
				...req.body,
				profilePicture: req.file ? req.file.filename : req.body.profilePicture,
				category: 'user'

			};
            newUser.password = bcrypt.hashSync(req.body.password, 10);
			delete newUser.rePassword;

            let usersNew = [...users, newUser];
			fs.writeFileSync(usersFilePath, JSON.stringify(usersNew, null, ' '));

            res.redirect ('/user/login');
        }
    },
    userProfile: (req,res) => {
        res.render ('./user/userProfile', { styles: 'styles-userProfile.css'})
    },
}

module.exports = user;