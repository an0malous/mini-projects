
const assert = require('assert');
const render = require('../render');
it('has a text input', async ()=>{
   const dom = await render('index.html');

   const input = dom.window.document.querySelector('input');

   assert(input);
 

});

it('shows a success message with a valid email', async ()=> {
   const dom = await render('index.html');

   const input = dom.window.document.querySelector('input');
   input.value = 'anomalous@.com'
   dom.window.document
   .querySelector('form')
   .dispatchEvent(new dom.window.Event('submit'));

   const h1 = dom.window.document.querySelector('h1');
   console.log('contents of h1 ', h1.textContent)
})