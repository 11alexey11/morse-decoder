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
    let arraySymbol = [];
    debugger;
    for (let i = 0; i < expr.length; i += 10) {
        let element = MORSE_TABLE[expr
                                 .slice(i, i+ 10)
                                 .replace(/00/g, '')
                                 .replace(/10/g, '.')
                                 .replace(/11/g, '-')];
        if (element === undefined) {
            arraySymbol.push(' ');
        } else {
            arraySymbol.push(element);
        }
    }
    return arraySymbol.join('');
}

module.exports = {
    decode
}
