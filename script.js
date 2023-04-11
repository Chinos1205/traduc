// Definimos el alfabeto de emojis
const alphabet = {
    "1": "A",
    "2": "B",
    "3": "C",
    "4": "D",
    "5": "E",
    "6": "F",
    "7": "G",
    "8": "H",
    "9": "I",
    "0": "J",
    "]": "K",
    "#": "L",
    "$": "M",
    "%": "N",
    "&": "O",
    "/": "P",
    "_": "Q",
    "'": "R",
    "=": "S",
    "+": "T",
    "|": "U",
    "°": "V",
    "¬": "W",
    "-": "X",
    "<": "Y",
    ">": "Z",
    "@": ".",
    "[": ",",
    "A": "1",
    "B": "2",
    "C": "3",
    "D": "4",
    "E": "5",
    "F": "6",
    "G": "7",
    "H": "8",
    "I": "9",
    "J": "0",
    "K": "]",
    "L": "#",
    "M": "$",
    "N": "%",
    "O": "&",
    "P": "/",
    "Q": "_",
    "R": "'",
    "S": "=",
    "T": "+",
    "U": "|",
    "V": "°",
    "W": "¬",
    "X": "-",
    "Y": "<",
    "Z": ">",
    ".": "@",
    ",": "[",

  };
  

// Función para traducir texto a emojis
function translateToEmoji(text) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        const letter = text[i].toUpperCase();
        if (letter in alphabet) {
            result += alphabet[letter];
        } else {
            result += letter;
        }
    }
    return result;
}

// Función que se ejecuta cuando se presiona el botón de traducir
function onTranslateBtnClick() {
    const inputText = document.getElementById("input-text");
    const output = document.getElementById("output");
    const text = inputText.value;
    let outputText;
    if (/[\u{1F000}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u.test(text)) {
        outputText = translateToText(text);
    } else {
        outputText = translateToEmoji(text);
    }
    output.innerText = outputText;
}
 
  // Asociamos la función onTranslateBtnClick al botón de traducir
  const translateBtn = document.getElementById("translate-btn");
  translateBtn.addEventListener("click", onTranslateBtnClick);
  