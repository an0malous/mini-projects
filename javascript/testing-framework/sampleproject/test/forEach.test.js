const assert = require('assert')
const { forEach } = require('../index');

it('should sum an array', ()=> {
   const numbers = [1,2,3];

   let total = 0;
   forEach(numbers, (val)=>{
total+= val;
   });

   assert.strictEqual(total, 6)
})