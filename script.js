let display = document.querySelector('.display');

//el boton del boton lo idetifico con el id  y desde momento, la variable siete tiene todos los atributos del objeto button. 
let siete = document.getElementById('siete');


//Selecciono todos los componentes de la clase button ,la variable buttons es un array de todos los botones y todos sus atributos. 
let buttons = document.querySelectorAll('button');



let operand1 = null;
let operand2 = null;
let operator = null;
let decimal = false;

//por cada boton agrego un evento click y ejecuto una funcion anonima la cual realiza las tareas deseadas. 4
buttons.forEach(button => {
    button.addEventListener('click', function() {
        if (button.classList.contains('number')) {
            if (display.textContent === '0' || operator === '=') {
                display.textContent = button.textContent;
                operator = null;
            } else {
                display.textContent += button.textContent;
            }
        } else if (button.classList.contains('operator')) {
            if (operand1 === null) {
                operand1 = parseFloat(display.textContent);
                operator = button.textContent;
            } else if (operator !== null) {
                operand2 = parseFloat(display.textContent);
                operand1 = calculate(operand1, operand2, operator);
                display.textContent = operand1;
                operand2 = null;
                operator = button.textContent;
            } else {
                operator = button.textContent;
            }
            decimal = false;
        } else if (button.classList.contains('function')) {
            if (button.textContent === 'C') {
                display.textContent = '0';
                operand1 = null;
                operand2 = null;
                operator = null;
                decimal = false;
            } else if (button.textContent === '.') {
                if (!decimal) {
                    display.textContent += '.';
                    decimal = true;
                }
            } else if (button.textContent === '%') {
                operand1 = parseFloat(display.textContent) / 100;
                display.textContent = operand1;
            } else if (button.textContent === '√') {
                operand1 = Math.sqrt(parseFloat(display.textContent));
                display.textContent = operand1;
            } else if (button.textContent === 'AC') {
                display.textContent = '0';
            } else if (button.textContent === '=') {
                if (operator !== null) {
                    operand2 = parseFloat(display.textContent);
                    operand1 = calculate(operand1, operand2, operator);
                    display.textContent = operand1;
                    operand2 = null;
                    operator = '=';
                }
            }
            decimal = false;
        }
    });
});

function calculate(operand1, operand2, operator) {
    switch(operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '×':
            return operand1 * operand2;
        case '÷':
            //Controlo si es mayor que 0 para poder realizar la division
            if (operand2 > 0) {
                return operand1 / operand2;
            } else {
                return 0;
            }
            
    }
}