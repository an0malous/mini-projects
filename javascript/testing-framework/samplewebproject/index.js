document.querySelector('form').addEventListener('submit', (event)=>{
   event.preventDefault()
   const { value } = document.querySelector('input');
   const header = document.querySelector('h1')
   if(value.includes('@')){
      header.textContent = 
      'Looks good'
   } else {
      header.textContent ='Invalid email'
   }
});