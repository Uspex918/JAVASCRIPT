const buttonElement = document.querySelector('.button');
const secondBoxElement = document.querySelector('.box-2');

// buttonElement.addEventListener('click', (e) => {
//    console.log('clicked', e);
// })
// buttonElement.addEventListener('mousemove', (e) => {
//    console.log('движение мыши над элементом кнопки', e)
// })
// buttonElement.addEventListener('mouseover', (e) => {
//    console.log('курсор навели на элемент', e)
//    console.log(e.target)
//    console.log(e.relatedTarget)
// })
// buttonElement.addEventListener('mouseout', (e) => {
//    console.log('курсор увели с элемента', e)
//    console.log(e.target)
//    console.log(e.relatedTarget)
// })

// buttonElement.addEventListener('mouseout', (e) => {
//    console.log("курсор увели с этого элемента")
//    console.log(e.relatedTarget)
// })


// secondBoxElement.addEventListener('mouseover', e => {
//    console.log("курсор НАВЕЛИ на  box-2 или его дочерний элемент")
//    console.log("target", e.target)
//    console.log(e.relatedTarget)
// })
// secondBoxElement.addEventListener('mouseout', e => {
//    console.log("курсор УВЕЛИ с  box-2 или его дочернего элемента")
//    console.log("target", e.target)
//    console.log(e.relatedTarget)
// })

// secondBoxElement.addEventListener('mouseenter', e => {
//    console.log("курсор НАВЕЛИ на  box-2 или его дочерний элемент")
// })
// secondBoxElement.addEventListener('mouseleave', e => {
//    console.log("курсор УВЕЛИ с  box-2 или его дочернего элемента")
// })


// buttonElement.addEventListener('mousedown', (e) => {
//    console.log("1. mousedown")
//    console.log(e.target)
//    console.log(e.currentTarget)
// })
// buttonElement.addEventListener('mouseup', (e) => {
//    console.log("2. mouseup")
//    console.log(e.target)
//    console.log(e.currentTarget)
// })
// buttonElement.addEventListener('click', (e) => {
//    console.log("3. click")
//    console.log(e.target)
//    console.log(e.currentTarget)
// })

// const boxElement = document.querySelector('.box');

// boxElement.addEventListener('click', (e) => {
//    console.log('click');
// })
// boxElement.addEventListener('dblclick', (e) => {
//    console.log('dblclick');
// })

// boxElement.addEventListener('contextmenu', (e) => {
//    e.preventDefault();
//    console.log('Context menu');
// })
// boxElement.addEventListener('pointerdown', (e) => {
//    console.log(e);
// })


// const addCircleElement = (x,y,isRed,label) => {
//    const circleElementMarkup = `
//    <div class="circle ${isRed ? 'red':''}"
//    style="
//    top: ${y}px; left: ${x}px;
//    ">
//    <span class="circle__label">${label}</span>
//    </div>
//    `
//    document.body.insertAdjacentHTML('beforeend', circleElementMarkup);
// }
//
// document.addEventListener('pointerdown', event => {
//    console.log(event)
//    const {x, y, isPrimary, pointerId} = event;
//    addCircleElement(x, y, isPrimary, pointerId);
// });

class DragAndDrop {
   selectors = {
      root: "[data-js-dnd]",
   }

   stateClasses = {
      isDragging: "is-dragging",
   }

   initialState = {
      offsetX: null,
      offsetY: null,
      isDragging: false,
      currentDraggingElement: null,
   }

   constructor() {
      this.state = {...this.initialState}
      this.bindEvents()
   }

   resetState() {
      this.state = {...this.initialState}
   }

   onPointerDown(event) {
      const {target, x, y} = event
      console.log("event", x, y, event)
      const isDraggable = target.matches(this.selectors.root)
      if (!isDraggable) {
         return
      }
      target.classList.add(this.stateClasses.isDragging)
      const {left, top} = target.getBoundingClientRect()
      console.log(left, top)

      this.state = {
         offsetX: x - left,
         offsetY: y - top,
         isDragging: true,
         currentDraggingElement: target,
      }
   }
   onPointerMove(event) {
      if (!this.state.isDragging) {
         return
      }
      console.log("X", event.pageX)
      console.log("Y", event.pageY)
      const x = event.pageX - this.state.offsetX
      const y = event.pageY - this.state.offsetY

      this.state.currentDraggingElement.style.left = `${x}px`
      this.state.currentDraggingElement.style.top = `${y}px`
   }
   onPointerUp(event) {
      if (!this.state.isDragging) {
         return
      }
      this.state.currentDraggingElement.classList.remove(this.stateClasses.isDragging)
      this.resetState()
   }

   bindEvents() {
      document.addEventListener('pointerdown', (event) => this.onPointerDown(event));
      document.addEventListener('pointermove', (event) => this.onPointerMove(event));
      document.addEventListener('pointerup', (event) => this.onPointerUp());
   }
}


new DragAndDrop()





