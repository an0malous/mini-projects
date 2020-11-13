import { itemsData } from '../index.js'
const displayContainer = document.querySelector('.display');

class Display {
  constructor(displayContainer){
    this.itemsData = itemsData;
    this.displayContainer = displayContainer;
  }

  init() {
    this.render()
  }

render(){
  displayContainer.innerHTML=`
    <header>Items bought this month</header>
    <article>
      <ul>
        ${itemsData.map(item=>`<li>${item}</li>`).join('')}
      <ul>
    </acrticle>
  `
}

}

export default new Display( displayContainer);