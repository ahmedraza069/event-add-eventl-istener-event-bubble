console.log('hello js world');

// option 1
//     <button onclick="document.body.style.backgroundColor = 'red'" type="button">Make Red</button>

// option 2
//     <button onclick="makeYellow()" type="button">Make Yellow </button>
function makeYellow(){
    document.body.style.backgroundColor = 
    'yellow';
}

// option 3
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

// option 3 another
const makePurpleButton = document.getElementById('make-purple');
// console.log(makePurpleButton);
makePurpleButton.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple'
}

// option 4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);
function makePink(){
    document.body.style.backgroundColor = 'pink';
}
// option 4 another
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green';
});

// option 4 final implement

document.getElementById('make-orange').addEventListener('click', function makeOrange() {
    document.body.style.backgroundColor = 'orange';   
   });