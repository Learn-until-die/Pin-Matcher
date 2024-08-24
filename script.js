var pinGenerator = document.getElementById('pingenerator');



var pinCodeGenerator =  document.getElementById('input');


//Random Pin Generator
pinGenerator.addEventListener("click",function(){

  var pin = Math.round(Math.random()*9);
  var tin = Math.round(Math.random()*9);
  var kin = Math.round(Math.random()*9);
  var fin = Math.round(Math.random()*9);


  var pin1 = pin.toString();
  var pin2 = tin.toString();
  var pin3 =  kin.toString();
  var pin4 = fin.toString();





 pinCodeGenerator.value = pin1 + pin2 + pin3 + pin4;


})














// Pin type// Pin type// Pin type// Pin type// Pin type// Pin type// Pin type// Pin type// Pin type// Pin type// Pin type// Pin type// Pin type

var showPin = document.getElementById('enput');

function pinMatcher(){
  showPin.value += this.innerText;
}

document.getElementById('one').addEventListener('click', pinMatcher);
document.getElementById('two').addEventListener('click', pinMatcher);
document.getElementById('three').addEventListener('click', pinMatcher);
document.getElementById('four').addEventListener('click',pinMatcher);
document.getElementById('five').addEventListener('click', pinMatcher);
document.getElementById('six').addEventListener('click', pinMatcher);
document.getElementById('seven').addEventListener('click', pinMatcher);
document.getElementById('eight').addEventListener('click', pinMatcher);
document.getElementById('nine').addEventListener('click', pinMatcher);



//submit button code
var submitButton = document.getElementById('submitbutton');


submitButton.addEventListener('click',function(){

var pinGenerate =  pinCodeGenerator.value ;
var enterredPin = showPin.value;

  if(pinGenerate  === enterredPin){
   document.getElementById("body").style.backgroundColor = 'rgb(8, 235, 129)'
  }
  else{
     document.getElementById("body").style.backgroundColor = 'red'
  }
})
