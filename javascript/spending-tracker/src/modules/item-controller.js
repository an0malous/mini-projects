import { itemsData } from '../index.js';
import eventsBus from '../modules/events-bus.js'
const itemControllerContainer = document.querySelector('.add-item');

class ItemController {
  constructor(container){
    this.container = container;
    this.itemName = '';
    this.itemPrice = 0;
  }

  updateInputValue (e){ 
    this[e.target.name] = e.target.value   
  }

  addItem (){
   itemsData.push({itemName: this.itemName, itemPrice: this.itemPrice})
   eventsBus.publish('itemAdded')
 }

  init() {
    this.render()
    this.addEventListeners()
  }

  addEventListeners(){
    const inputs = document.querySelectorAll('.item-inputs');
    for(let i = 0; i < inputs.length; i++){
      inputs[i].addEventListener('change', (e)=>this.updateInputValue(e));
    };
    const addBtn = document.querySelector('#add')
    addBtn.addEventListener('click', (e)=>this.addItem(e)) 
  }

  render (){
    this.container.innerHTML=`
      <header>Add a new item</header>
      <input id="item-name" class="item-inputs" type="text" name="itemName" placeholder="product name" />
      <input id="item-price" class="item-inputs" type="number" name="itemPrice" placeholder="product price" />
      <button id="add">Add</button>
    `  
    console.log("render")
  }
}

export default new ItemController(itemControllerContainer)

