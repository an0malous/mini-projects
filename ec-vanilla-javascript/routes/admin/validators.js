const { check } = require('express-validator');
const userRepo = require('../../repos/users');


	module.exports = {
		requireEmail: check('email')
		  .trim()
		  .normalizeEmail()
		  .isEmail()
		  .withMessage('Must be a valid email')
		  .custom(async email => {
			 const existingUser = await userRepo.getOneBy({ email });
			 if (existingUser) {
				throw new Error('Email in use');
			 }
		  }),
		requirePassword: check('password')
		  .trim()
		  .isLength({ min: 4, max: 20 })
		  .withMessage('Must be between 4 and 20 characters'),
		requirePasswordConfirmation: check('passwordConfirmation')
		  .trim()
		  .isLength({ min: 4, max: 20 })
		  .withMessage('Must be between 4 and 20 characters')
		  .custom( (passConfirm, {req} ) =>{
			if (passConfirm !== req.body.password) {
				 throw new Error('Password does not match password confirmation');
			} else {
				 return true;
			}
	  }),
		requireEmailExists: check('email')
		  .trim()
		  .normalizeEmail()
		  .isEmail()
		  .withMessage('Must provide a valid email')
		  .custom(async email => {
			 const user = await userRepo.getOneBy({ email });
			 if (!user) {
				throw new Error('Email not found!');
			 }
		  }),
		requireValidPasswordForUser: check('password')
		  .trim()
		  .custom(async (password, { req }) => {
			 const user = await userRepo.getOneBy({ email: req.body.email });
			 if (!user) {
				throw new Error('Invalid password');
			 }
	 
			 const validPassword = await userRepo.comparePasswords(
				user.password,
				password
			 );
			 if (!validPassword) {
				throw new Error('Invalid password');
			 }
		  })
	 
};
