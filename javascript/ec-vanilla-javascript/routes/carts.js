const express = require('express');
const router = express.Router();
const cartsRepo = require('../repos/carts')
const productsRepo = require('../repos/products');
const cartShowTemplate = require('../views/carts/show');


router.post('/cart/products/:id', async(req, res)=>{
   let cart;
   const productId = req.params.id;

   if (!req.session.cartId) {
     // We dont have a cart, we need to create one,
     // and store the cart id on the req.session.cartId
     // property
     cart = await cartsRepo.create({ items: [] });
     req.session.cartId = cart.id;
   } else {
     // We have a cart! Lets get it from the repository
     cart = await cartsRepo.getOne(req.session.cartId);
   }
 
   const existingItem = cart.items.find(item => item.id === productId);
   if (existingItem) {
     // increment quantity and save cart
     existingItem.quantity++;
   } else {
     // add new product id to items array
     cart.items.push({ id: productId, quantity: 1 });
   }
   await cartsRepo.update(cart.id, {
     items: cart.items
   });
   res.redirect('/cart')
   
   

 });

router.get('/cart', async(req, res)=>{
   if(!req.session.cartId){
      return res.redirect('/');
   }
   let cartQuantity;
   
   const cart = await cartsRepo.getOne(req.session.cartId);
   cartQuantity = cart.items.length
   for(let item of cart.items){
      const product = await productsRepo.getOne(item.id);
      item.product = product;
   }
 
   res.send(cartShowTemplate({ items: cart.items, cartQuantity }));
  
})

router.post('/cart/products/:id/delete', async(req, res)=>{
   const itemId = req.params.id;
   const cart = await cartsRepo.getOne(req.session.cartId);

   const items = cart.items.filter(item=>item.id !== itemId);

   await cartsRepo.update(req.session.cartId, { items })

   res.redirect('/cart')
})

module.exports = router;

