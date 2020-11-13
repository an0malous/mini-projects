import { itemsData } from '../index.js';
const itemControllerContainer = document.querySelector('.add-item');


class ItemController {
  constructor(container){
    this.container = container;
    this.itemName = '';
    this.itemPrice = 0;
  }

  init() {
    this.render()
  }

updateInputValue (event){
  this.itemName = event.target.value
  
}


  render (){
    this.container.innerHTML=`
      <header>Add a new item</header>
      <input id="item-name class="item-inputs" type="text" name="itemName" placeholder="product name" />
      <input id="item-price class="item-inputs" type="number" name="itemPrice" placeholder="product price" />
      <button id="add">Add</button>
    `
    const inputs = document.querySelectorAll('.item-inputs');
    inputs.addEventListener('change', this.updateInputValue());
    const addBtn = document.querySelector('#add');
    addBtn.addEventListener('click', ()=>{
      itemsData.push([this.itemName, this.itemPrice])
      
    })
  }
}

export default new ItemController(itemControllerContainer)

echo "# mini-projects" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:an0malous/mini-projects.git