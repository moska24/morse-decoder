const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let symbols = [];
    let masResult = '';

    for (let i = 0; i < expr.length; i = i + 10){
        let symbol = expr.slice(i, i + 10);
        symbols.push(symbol);
    }
    console.log(symbols);
    for (let i = 0; i < symbols.length; i++){
        if (symbols[i] === '**********'){
            masResult  = masResult + ' ';
        }
        else masResult = masResult + morseDecoder(symbols[i]);
    }
   console.log(masResult);
   return masResult;
}

function morseDecoder(symbol) {
    let strMorse = '';
    console.log(symbol);
    for (let i = 0; i < symbol.length; i = i + 2){
        let combination = symbol.slice(i, i + 2);
        console.log(combination);
        if (combination === '10') {
            strMorse = strMorse + '.';
            console.log(strMorse);
        }
        else if (combination === '00') {
            console.log('here');
            strMorse = strMorse + '';
        }
        else if (combination === '11') {
            strMorse = strMorse + '-';
        }
    }
    return MORSE_TABLE[strMorse];
}


module.exports = {
    decode
}