function generateText() {

    var inputText = document.getElementById("textInput").value
    var text = inputText.toUpperCase();

    for (var i = 0; i < 5; i++) {
        fullTextArray[i] = new Array(text.length * 5);
    }

    fullTextArray = lettersToArray(text, fullTextArray);
    var output = ""
    for (var i = 0; i < fullTextArray.length; i++) {
        for (var col = 0; col < fullTextArray[i].length; col++) {
            var number = fullTextArray[i][col];
            if (number == 2) {
                output += '<font color="black">' + number + " ";
            }
            else {
                output += '<font color="gray">' + number + " ";
            }

            if (col % 5 == 4) {
                output += ' ';
            }
            if (col == fullTextArray[i].length - 1) {
                output += '<br />'
            }
        }
    }
    document.getElementById("output").innerHTML = output;
};

var lettersToArray = function(text, fullTextArray) {
    for (var i = 0; i < text.length; i++) {
        var ltr = text[i];
        var startPos = i * 5;
        var bigLetterArray = getArray(ltr);

        for (var row = 0; row < 5; row++) {
            for (var col = 0; col < 5; col++) {
                fullTextArray[row][col + startPos] = bigLetterArray[row][col];
            }
        }
    }

    return fullTextArray;
};

var getArray = function(ltr) {
    if (ltr == ' ') {
        return arraySpace;
    } else return eval('array' + ltr);
}

var arrayA = [
    [1, 1, 2, 2, 1],
    [1, 2, 1, 1, 2],
    [1, 2, 2, 2, 2],
    [1, 2, 1, 1, 2],
    [1, 2, 1, 1, 2]
];

var arrayB = [
    [1, 2, 2, 2, 1],
    [1, 2, 1, 1, 2],
    [1, 2, 2, 2, 1],
    [1, 2, 1, 1, 2],
    [1, 2, 2, 2, 2]
];

var arrayC = [
    [1, 1, 2, 2, 1],
    [1, 2, 1, 1, 2],
    [2, 1, 1, 1, 1],
    [1, 1, 1, 1, 2],
    [1, 2, 2, 2, 2]
];

var arrayD = [
    [1, 2, 2, 2, 1],
    [1, 2, 1, 1, 2],
    [1, 2, 1, 1, 2],
    [1, 2, 1, 1, 2],
    [1, 2, 2, 2, 1]
];

var arrayE = [
    [1, 2, 2, 2, 2],
    [1, 2, 1, 1, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 1, 1, 1],
    [1, 2, 2, 2, 2]
];

var arrayF = [
    [1, 2, 2, 2, 1],
    [1, 2, 1, 1, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 1, 1, 1],
    [1, 2, 1, 1, 1]
];

var arrayG = [
    [1, 1, 2, 2, 1],
    [1, 2, 1, 1, 1],
    [1, 2, 1, 2, 1],
    [1, 2, 1, 1, 2],
    [1, 2, 2, 2, 2]
];

var arrayH = [
    [1, 2, 1, 1, 2],
    [1, 2, 1, 1, 2],
    [1, 2, 2, 2, 2],
    [1, 2, 1, 1, 2],
    [1, 2, 1, 1, 2]
];

var arrayI = [
    [1, 2, 2, 2, 1],
    [1, 1, 2, 1, 1],
    [1, 1, 2, 1, 1],
    [1, 1, 2, 1, 1],
    [1, 2, 2, 2, 1]
];

var arrayJ = [
    [1, 1, 1, 2, 1],
    [1, 1, 1, 2, 1],
    [1, 1, 1, 2, 1],
    [1, 2, 1, 2, 1],
    [1, 2, 2, 2, 1]
];

var arrayK = [
    [1, 2, 1, 1, 2],
    [1, 2, 1, 2, 1],
    [1, 2, 2, 1, 1],
    [1, 2, 1, 2, 1],
    [1, 2, 1, 1, 2]
];

var arrayL = [
    [1, 2, 1, 1, 1],
    [1, 2, 1, 1, 1],
    [1, 2, 1, 1, 1],
    [1, 2, 1, 1, 1],
    [1, 2, 2, 2, 2]
];

var arrayM = [
    [2, 1, 1, 1, 2],
    [2, 2, 1, 2, 2],
    [2, 1, 2, 1, 2],
    [2, 1, 1, 1, 2],
    [2, 1, 1, 1, 2]
];

var arrayN = [
    [1, 2, 1, 1, 2],
    [1, 2, 1, 1, 2],
    [1, 2, 2, 1, 2],
    [1, 2, 1, 2, 2],
    [1, 2, 1, 1, 2]
];

var arrayO = [
    [1, 2, 2, 2, 1],
    [2, 1, 1, 1, 2],
    [2, 1, 1, 1, 2],
    [2, 1, 1, 1, 2],
    [1, 2, 2, 2, 1]
];

var arrayP = [
    [1, 2, 2, 1, 1],
    [1, 2, 1, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 1, 1, 1],
    [1, 2, 1, 1, 1]
];

var arrayQ = [
    [1, 2, 2, 2, 1],
    [2, 1, 1, 1, 2],
    [2, 1, 1, 1, 2],
    [2, 1, 1, 2, 2],
    [1, 2, 2, 2, 2]
];

var arrayR = [
    [1, 2, 2, 2, 1],
    [1, 2, 1, 2, 1],
    [1, 2, 2, 1, 1],
    [1, 2, 1, 2, 1],
    [1, 2, 1, 1, 2]
];

var arrayS = [
    [1, 2, 2, 1, 1],
    [2, 1, 1, 2, 1],
    [1, 2, 2, 1, 1],
    [2, 1, 1, 2, 1],
    [1, 2, 2, 1, 1]
];

var arrayT = [
    [1, 2, 2, 2, 1],
    [1, 1, 2, 1, 1],
    [1, 1, 2, 1, 1],
    [1, 1, 2, 1, 1],
    [1, 1, 2, 1, 1]
];

var arrayU = [
    [1, 2, 1, 1, 2],
    [1, 2, 1, 1, 2],
    [1, 2, 1, 1, 2],
    [1, 2, 1, 1, 2],
    [1, 1, 2, 2, 1]
];

var arrayV = [
    [2, 1, 1, 1, 2],
    [2, 1, 1, 1, 2],
    [1, 2, 1, 2, 1],
    [1, 2, 1, 2, 1],
    [1, 1, 2, 1, 1]
];

var arrayW = [
    [2, 1, 1, 1, 2],
    [2, 1, 1, 1, 2],
    [2, 1, 2, 1, 2],
    [2, 1, 2, 1, 2],
    [1, 2, 1, 2, 1]
];

var arrayX = [
    [2, 1, 1, 1, 2],
    [1, 2, 1, 2, 1],
    [1, 1, 2, 1, 1],
    [1, 2, 1, 2, 1],
    [2, 1, 1, 1, 2]
];

var arrayY = [
    [2, 1, 1, 1, 2],
    [1, 2, 1, 2, 1],
    [1, 2, 1, 2, 1],
    [1, 1, 2, 1, 1],
    [1, 1, 2, 1, 1]
];

var arrayZ = [
    [1, 2, 2, 2, 2],
    [1, 1, 1, 2, 1],
    [1, 1, 2, 1, 1],
    [1, 2, 1, 1, 1],
    [1, 2, 2, 2, 2]
];

var arraySpace = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1]
];
