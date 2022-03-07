//ETCH A SKETCH

//get slider value 
let square = document.getElementById('slider').value;

//let click =true;

let trigger =false;

let colorInput =document.querySelector('input');
let color = colorInput.value;

//get buttons that will change when clicked
let buttons =document.getElementsByTagName('button');


//populate a grid with the slider value as the width and height
const grid=document.getElementById('grid');

const display = document.getElementById('slider-display');

//Allow grid divs to be changed by given color
//Reset board
function populateBoard(value){
  //when the value is changed change the display html
  display.innerHTML=value+' x '+value;

  //reset the grid innerhtml everytime the value is chanfed
  grid.innerHTML=''
  //square the board value 
  let squared = value*value
  //Set grid column and rows equal to value
  grid.style.gridTemplateColumns = `repeat(${value},1fr)`;
  grid.style.gridTemplateRows = `repeat(${value},1fr)`;

  //
  for (let i=0; i<squared; i++){
    let newDiv = document.createElement('div');
    newDiv.style.backgroundColor='white';
    newDiv.addEventListener('mouseover',colorSquare)
    grid.appendChild(newDiv)
  }
}

function colorSquare(){
  if(trigger){

    if (color==='random'){
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      this.style.backgroundColor='#'+randomColor
    }
    else{
      this.style.backgroundColor=color
    }
  }
}

populateBoard(16)

//
function changeValue(value){
 populateBoard(value)
}

//change color
function changeColor(newColor){
  colorMode(newColor) 
    color=newColor 
}

//function to highlight active button to show what mode
//User is in
function colorMode(newColor){
  //when a button is pressed change color mode
  //SHow this by changing active button class
  switch(newColor){
    case 'random':
      buttons[2].classList.add('active')
      //Turn off active class from other buttons
      buttons[0].classList.remove('active')
      buttons[1].classList.remove('active')
      colorInput.classList.remove('active')
      break;
    case '#FFFFFF':
      buttons[1].classList.add('active')
      //Turn off active class from other buttons
      buttons[0].classList.remove('active')
      buttons[2].classList.remove('active')
      colorInput.classList.remove('active')
      break;
    case '#000000':
      buttons[0].classList.add('active')
      //Turn off active class from other buttons
      buttons[1].classList.remove('active')
      buttons[2].classList.remove('active')
      colorInput.classList.remove('active')
      break;
    default:
      colorInput.classList.add('active')
      
      //Turn off active class from other buttons
      buttons[0].classList.remove('active')
      buttons[2].classList.remove('active')
      buttons[1].classList.remove('active')
  }
}

function reset(){
  let gridDivs = grid.childNodes;
  gridDivs.forEach(element => {
    element.style.backgroundColor='white'
  });
}

document.body.onmousedown(e)=>{
  trigger = true;
} 

document.body.addEventListener(mouseup,(e)=>{
  trigger=false
  console.log(trigger)
})
// document.querySelector('body').addEventListener('click',(e)=>{
//     if (e.target.tagName != 'BUTTON'&& e.target.tagName !='INPUT'){
//       console.log('click')
//       click = !click;
//       if (click){
//         document.querySelector('.drawing-mode').textContent = "Mode: Drawing"
//       }
//       else{
//         document.querySelector('.drawing-mode').textContent = "Mode: Not Drawing"
//       }
//     }
    
// });
