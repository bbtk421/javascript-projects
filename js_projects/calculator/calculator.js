// KEEPS TRACK OF VALUES

const Calculator = {
    dispvalue: "0",
    firstop: null,
    waitsecop: false,
    operator: null,
};

// MODIFY VALUES WHEN YOU CLICK BUTTONS

function inputDigit(digit) {
    const { dispvalue, waitsecop } = Calculator;
    if (waitsecop === true) {
        Calculator.dispvalue = digit;
        Calculator.waitsecop = false;
    } else {
        Calculator.dispvalue = dispvalue === '0' ? digit : dispvalue + digit;
    }
}

// HANDLES DECIMALS

function inputDecimal(dot) {
    if (Calculator.waitsecop === true) return;
    if (!Calculator.dispvalue.includes(dot)) {
        Calculator.dispvalue += dot;
    }
}

// HANDLES OPERATORS

function handleOperator(nextop) {
    const { firstop, dispvalue, operator } = Calculator
    const valueofinput = parseFloat(dispvalue);
    if (operator && Calculator.waitsecop) {
        Calculator.operator = nextop;
        return;
    }
    if (firstop == null) {
        Calculator.firstop = valueofinput;
    } else if (operator) {
        const valuenow = firstop || 0;
        let result = performcalc[operator](valuenow, valueofinput);
        result = Number(result).toFixed(9)
        result = (result * 1).toString()
        Calculator.dispvalue = parseFloat(result);
        Calculator.firstop = parseFloat(result);
    }
    Calculator.waitsecop = true;
    Calculator.operator = nextop;
}

const performcalc = {
    '/': (firstop, secondop) => firstop / secondop,
    '*': (firstop, secondop) => firstop * secondop,
    '+': (firstop, secondop) => firstop + secondop,
    '-': (firstop, secondop) => firstop - secondop,
    '=': (firstop, secondop) => secondop
};

function calcReset() {
    Calculator.dispvalue = '0';
    Calculator.firstop = null;
    Calculator.waitsecop = false;
    Calculator.operator = null;
}

// UPDATES SCREEN DISPLAY VALUE

function updatedisp() {
    const display = document.querySelector('.calc-screen');
    display.value = Calculator.dispvalue;
}

// MONITOR BUTTON CLICKS

updatedisp();
const keys = document.querySelector('.calc-keys');
keys.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        handleOperator(target.value);
        updatedisp();
        return;
    }

    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updatedisp();
        return;
    }

    if (target.classList.contains('allclear')) {
        calcReset();
        updatedisp();
        return;
    }

    inputDigit(target.value);
    updatedisp();
})
