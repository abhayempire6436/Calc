let screen = document.getElementById('input');
let buttons = document.querySelectorAll('button');
let screenValue = "";

buttons.forEach((item) => {
    item.onclick = (e) => {
        buttonText = e.target.innerText;
        console.log('button is', buttonText);
        if(buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue; 
        }
        else if(item.id == 'backspace'){
            let string = screen.value.toString();
            screen.value = string.substr(0, string.length-1);
            screenValue = screen.value;
        }
        else if(buttonText == 'X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }

        else if(buttonText == '='){
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    }
})

