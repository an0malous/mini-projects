const express  = require('express');

const app = express();
app.get('/', (req, res)=>{
   res.send(`
   <div>
      <form method="POST">
         <input name="email" placeholder="email" />
         <input name="password" placeholder="password" />
         <input name="passwordConfirmation placeholder="passwordConfirmation" />
         <button>Sign Up </button>
      </form>
   </div>
   
   `)
})

app.listen(3000, ()=>console.log('Listening on port 3000'))