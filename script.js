const LIST_SYMBOLS_OPERATIONS = ["-", "+", "/", "*"];
const MESSAGE_ERROR_OPERATION = "Entrada Inválida";

function addNewChar(input, char) {
    const currentlyDisplayValue = input.value || "";
    const isOperator = LIST_SYMBOLS_OPERATIONS.includes(char);
    
    if(!currentlyDisplayValue.length && isOperator) return;
    
    const lastChar = currentlyDisplayValue[currentlyDisplayValue.length - 1];

    if(lastChar === '.' && isOperator) return;

    if(LIST_SYMBOLS_OPERATIONS.includes(lastChar) && LIST_SYMBOLS_OPERATIONS.includes(char)) {
            input.value = currentlyDisplayValue.slice(0, -1) + char;
            return;
    }

    input.value = currentlyDisplayValue + char;
    return;
}

function addDot(input) {
    const currentlyDisplayValue = input.value || "";
    
    if(!currentlyDisplayValue.length) return;
    
    const lastChar = currentlyDisplayValue[currentlyDisplayValue.length - 1];

    if(LIST_SYMBOLS_OPERATIONS.includes(lastChar) || lastChar === '.') return;

    input.value = currentlyDisplayValue + '.';
}

function deleteChar(input) {
    const currentlyDisplayValue = input.value || "";

    if(!currentlyDisplayValue.length) return;

    input.value = currentlyDisplayValue.slice(0,-1);
}

function clearDisplay(input) {
    input.value = "";
}

function confirmOperation(input) {
    const currentlyDisplayValue = input.value || "";    
    const lastChar = currentlyDisplayValue[currentlyDisplayValue.length - 1];
    
    if(!currentlyDisplayValue.length) return;
    if(LIST_SYMBOLS_OPERATIONS.includes(lastChar) || lastChar === '.') {
        input.value = MESSAGE_ERROR_OPERATION;
        
        setTimeout(() => {
            input.value = currentlyDisplayValue;
        }, 1000);
        return;
    }

    input.value = eval(currentlyDisplayValue);
}