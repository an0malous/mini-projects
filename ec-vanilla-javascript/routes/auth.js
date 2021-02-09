const express = require('express');
const UserRepository = require('../repos/users');
const userRepo = new UserRepository('users.json')
const { check } = require('express-validator');

const router = express.Router();
const signupTemplate = require('../views/admin/auth/signup');
const signinTemplate = require('../views/admin/auth/signin');

router.get('/signup', (req, res) => {
	res.send(signupTemplate({ req }));
});

router.post('/signup', async (req, res) => {
	const { email, password, passwordConfirmation } = req.body;
	const existingUser = await userRepo.getOneBy({ email });

	if (existingUser) {
		return res.send('Email already in use');
	}

	if (password !== passwordConfirmation) {
		return res.send('Password must match');
	}

	const user = await userRepo.create({ email, password });
	req.session.userId = user.id;
	res.send('Account Created');
});

router.get('/signout', (req, res)=>{
   req.session = null;
   return res.send('signed out')
});

router.get('/signin', (req, res)=>{
   res.send(
   signinTemplate()
   )
})

router.post('/signin', async(req, res)=>{
   const { email, password } = req.body;

   const user = await userRepo.getOneBy({ email });

   const validPassword = await userRepo.comparePasswords(user.password, password);
   if(!user || !validPassword){
      return res.send("invalid password or Email")
   }
   req.session.userId = user.id;

   res.send('Signed in')
})

module.exports = router;