const express  = require('express');
const UserRepository = require('./repos/users');
const userRepo = new UserRepository('users.json')


const app = express();
app.use(express.json())

app.get('/', (req, res)=>{
   res.send(`
   <div>
      <form method="POST">
         <input name="email" placeholder="email" />
         <input name="password" placeholder="password" />
         <input name="passwordConfirmation" placeholder="password confirmation" />
         <button>Sign Up </button>
      </form>
   </div>
   
   `)
})

app.post('/', async (req, res)=>{
   const { email, password, passwordConfirmation } = req.body;

   const existingUser = await usersRepo.getOneBy({ email });

   if(existingUser){
      return res.send('Email already in use')
   }

   if(password !== passwordConfirmation){
      return res.send('Password must match');
   }

   res.send("Account Created")
})

app.listen(3000, ()=>console.log('Listening on port 3000'))