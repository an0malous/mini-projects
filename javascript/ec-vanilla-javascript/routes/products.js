const express = require('express')
const router = express.Router();
const cartsRepo = require('../repos/carts')
const productsRepo = require('../repos/products')
const productsIndexTemplate = require('../views/products/index')

router.get('/', async(req, res)=>{
   const products = await productsRepo.getAll();
   let cartQuantity = 0
   if(req.session.cartId){
      cart = await cartsRepo.getOne(req.session.cartId);
      cartQuantity = cart.items.length;
      
   }
   res.send(productsIndexTemplate({ products, cartQuantity }))
});

module.exports = router;