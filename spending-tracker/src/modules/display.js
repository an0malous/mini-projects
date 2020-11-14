import { itemsData } from '../index.js'
import eventsBus from '../modules/events-bus.js';
const displayContainer = document.querySelector('.display');

class Display {
  constructor(displayContainer){
    this.itemsData = itemsData;
    this.displayContainer = displayContainer;
  }

  init() {
    this.render()
    eventsBus.subscribe('itemAdded', this.render)
  }

render(){
  displayContainer.innerHTML=`
    <header>Items bought this month</header>
    <article>
      <ul>
        ${itemsData.map(item=>`<li>${item.itemName} -  ${item.itemPrice}円</li>`).join('')}
      <ul>
    </acrticle>
  `
}

}

export default new Display( displayContainer);