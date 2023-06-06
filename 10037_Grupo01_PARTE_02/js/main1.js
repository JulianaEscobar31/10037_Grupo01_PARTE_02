
/* Navegacion */


var navegacion = function () {
  document.getElementById("f2").innerHTML = document.getElementById("fila4").innerHTML;
  document.getElementById("f3").innerHTML = document.getElementById("fila2").innerHTML;
  document.getElementById("f4").innerHTML = document.getElementById("fila3").innerHTML;
}

var nodeList = function () {
  const nodeList = document.querySelectorAll("input");
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].style.background = "#e474f1";
    nodeList[i].style.color = "green";
  }
}

var changeColor=function(obj){
  obj.style.background= "rgb(245, 145, 210)";
}


var changes = function(){
  var buttonText = document.getElementById('input-text');
  buttonText.addEventListener("click",clicked)
  
  var input = document.getElementById('input')
  input.addEventListener("keydown", textModified)
}

var textModified = function(){
    var inputText = document.getElementById("input-text")
    inputText.innerText = input.value
}
function clicked(){
  alert('Has hecho click!')
}
// Generating animations

container.animate({
  transform: [
    'rotateX(60deg) rotateZ(0deg)',
    'rotateX(60deg) rotateZ(360deg)',
  ],
}, {
  duration: 20000,
  iterations: Infinity,
});

for (var y = -7; y <= 7; y++) {
  for (var x = -7; x <= 7; x++) {
    var box = createBox();
    box.animate({
      transform: [
        'translateZ(0px)',
        'translateZ(20px)',
      ],
      opacity: [1, 0],
    }, {
      delay: (x * x + y * y) * 20,
      duration: 2000,
      iterations: Infinity,
      direction: 'alternate',
      easing: 'ease-in',
    });
  }
}

function createBox() {
  var box = document.createElement('div');
  box.className = 'box';
  container.appendChild(box);
  return box;
}


var agregarparrafo = function(){
  var min=1;
  var max=6;

  const para = document.createElement("p");
  const node = document.createTextNode(Math.floor(Math.random()*(max-min+1)+min));
  para.appendChild(node);
  const element = document.getElementById("div1");
  element.appendChild(para);
}

var contarForms = function (){
  let collection = document.forms.length;
  document.querySelector(".count").innerHTML = collection;
}