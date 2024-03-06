//calculator 

const display=document.getElementById("display");

function appendIn(input){
    if (display.value=="Error") {
        display.value="";
    }
    display.value+=input;
}
function clearDisplay(){
    display.value="";
}
function Calculate(){
    try{
    display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
}





var buttons = document.getElementsByClassName('my-button');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseover', function() {
        document.getElementById('hover-sound').play();
    });
}

var buttons = document.getElementsByClassName('my-button');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        document.getElementById('hover-sound2').play();
    });
}
