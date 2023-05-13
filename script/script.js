const button_calculator = [];
const pressed_numbers = document.querySelector('#number-now');
for (let c = 1; c <= 9; c++) {
    button_calculator.push(document.querySelector(`#number${c}`));

    button_calculator[c - 1].addEventListener('click', () => {
        if (pressed_numbers.innerText.length < 9) {
            pressed_numbers.innerText += c;
        }
    });     
}

button_calculator.push(document.querySelector(`#number00`));
button_calculator[9].addEventListener('click', () => {
    if (pressed_numbers.innerText.length < 8) {
        pressed_numbers.innerText += '00';
    }
}); 

button_calculator.push(document.querySelector(`#clear`));
button_calculator[10].addEventListener('click', () => {
    pressed_numbers.innerText = '';
}); 


/* button_calculator[0].addEventListener('click', () => {
    pressed_numbers.innerText = 1;
}); 

button_calculator[1].addEventListener('click', () => {
    pressed_numbers.innerText = 2;
}); 

button_calculator[2].addEventListener('click', () => {
    pressed_numbers.innerText = 3;
}); 

button_calculator[3].addEventListener('click', () => {
    pressed_numbers.innerText = 4;
}); 

button_calculator[4].addEventListener('click', () => {
    pressed_numbers.innerText = 5;
}); 

button_calculator[5].addEventListener('click', () => {
    pressed_numbers.innerText = 6;
}); 

button_calculator[6].addEventListener('click', () => {
    pressed_numbers.innerText = 7;
}); 

button_calculator[7].addEventListener('click', () => {
    pressed_numbers.innerText = 8;
}); 

button_calculator[8].addEventListener('click', () => {
    pressed_numbers.innerText = 9;
});  */