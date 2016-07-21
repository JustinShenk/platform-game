/*
Copyright (c) 2013 dissimulate at codepen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

/* Customisable map data */
var rootContext = document.body.getAttribute("data-root");
var tickCount = 0;
var inputText = document.getElementById('textInput').value;

var fullTextArray = new Array(5);
var consoleImg = new Image(16,16);

for (var i = 0; i < 5; i++) {
    fullTextArray[i] = new Array(inputText.length);
};

function textToArray(text) {

    var inputText = text;
    var inputText = inputText.toUpperCase();

    for (var i = 0; i < 5; i++) {
        fullTextArray[i] = new Array(text.length*5);
    }

    fullTextArray = lettersToArray(text,fullTextArray);

    return fullTextArray;
};

function lettersToArray(text,fullTextArray) {
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

function getArray(ltr) {
    if (ltr == ' ') {
        return arraySpace;
    }
    else return eval('array' + ltr);
};

var arrayA = [
[1,1,2,2,1],
[1,2,1,1,2],
[1,2,2,2,2],
[1,2,1,1,2],
[1,2,1,1,2]
];

var arrayB = [
[1,2,2,2,1],
[1,2,1,1,2],
[1,2,2,2,1],
[1,2,1,1,2],
[1,2,2,2,2]];

var arrayC = [
[1,1,2,2,1],
[1,2,1,1,2],
[2,1,1,1,1],
[1,1,1,1,2],
[1,2,2,2,2]
];

var arrayD = [
[1,2,2,2,1],
[1,2,1,1,2],
[1,2,1,1,2],
[1,2,1,1,2],
[1,2,2,2,1]
];

var arrayE = [
[1,2,2,2,2],
[1,2,1,1,1],
[1,2,2,2,1],
[1,2,1,1,1],
[1,2,2,2,2]
];

var arrayF = [
[1,2,2,2,1],
[1,2,1,1,1],
[1,2,2,2,1],
[1,2,1,1,1],
[1,2,1,1,1]
];

var arrayG = [
[1,1,2,2,1],
[1,2,1,1,1],
[1,2,1,2,1],
[1,2,1,1,2],
[1,2,2,2,2]
];

var arrayH = [
[1,2,1,1,2],
[1,2,1,1,2],
[1,2,2,2,2],
[1,2,1,1,2],
[1,2,1,1,2]
];

var arrayI = [
[1,2,2,2,1],
[1,1,2,1,1],
[1,1,2,1,1],
[1,1,2,1,1],
[1,2,2,2,1]
];

var arrayJ = [
[1,1,1,2,1],
[1,1,1,2,1],
[1,1,1,2,1],
[1,2,1,2,1],
[1,2,2,2,1]
];

var arrayK = [
[1,2,1,1,2],
[1,2,1,2,1],
[1,2,2,1,1],
[1,2,1,2,1],
[1,2,1,1,2]
];

var arrayL = [
[1,2,1,1,1],
[1,2,1,1,1],
[1,2,1,1,1],
[1,2,1,1,1],
[1,2,2,2,2]
];

var arrayM = [
[2,1,1,1,2],
[2,2,1,2,2],
[2,1,2,1,2],
[2,1,1,1,2],
[2,1,1,1,2]
];

var arrayN = [
[1,2,1,1,2],
[1,2,1,1,2],
[1,2,2,1,2],
[1,2,1,2,2],
[1,2,1,1,2]
];

var arrayO = [
[1,2,2,2,1],
[2,1,1,1,2],
[2,1,1,1,2],
[2,1,1,1,2],
[1,2,2,2,1]
];

var arrayP = [
[1,2,2,1,1],
[1,2,1,2,1],
[1,2,2,2,1],
[1,2,1,1,1],
[1,2,1,1,1]
];

var arrayQ = [
[1,2,2,2,1],
[2,1,1,1,2],
[2,1,1,1,2],
[2,1,1,2,2],
[1,2,2,2,2]
];

var arrayR = [
[1,2,2,2,1],
[1,2,1,2,1],
[1,2,2,1,1],
[1,2,1,2,1],
[1,2,1,1,2]
];

var arrayS = [
[1,2,2,1,1],
[2,1,1,2,1],
[1,2,2,1,1],
[1,1,1,2,1],
[1,2,2,1,1]
];

var arrayT = [
[1,2,2,2,1],
[1,1,2,1,1],
[1,1,2,1,1],
[1,1,2,1,1],
[1,1,2,1,1]
];

var arrayU = [
[1,2,1,1,2],
[1,2,1,1,2],
[1,2,1,1,2],
[1,2,1,1,2],
[1,1,2,2,1]
];

var arrayV = [
[2,1,1,1,2],
[2,1,1,1,2],
[2,1,1,1,2],
[1,2,1,2,1],
[1,1,2,1,1]
];

var arrayW = [
[2,1,1,1,2],
[2,1,1,1,2],
[2,1,2,1,2],
[2,1,2,1,2],
[1,2,1,2,1]
];

var arrayX = [
[2,1,1,1,2],
[1,2,1,2,1],
[1,1,2,1,1],
[1,2,1,2,1],
[2,1,1,1,2]
];

var arrayY = [
[2,1,1,1,2],
[1,2,1,2,1],
[1,2,1,2,1],
[1,1,2,1,1],
[1,1,2,1,1]
];

var arrayZ = [
[1,2,2,2,2],
[1,1,1,2,1],
[1,1,2,1,1],
[1,2,1,1,1],
[1,2,2,2,2]
];

var arraySpace = [
[1,1,1,1,1],
[1,1,1,1,1],
[1,1,1,1,1],
[1,1,1,1,1],
[1,1,1,1,1]
];

var map = {

    tile_size: 16,

    /*

    Key vairables:

    id       [required] - an integer that corresponds with a tile in the data array.
    colour   [required] - any javascript compatible colour variable.
    solid    [optional] - whether the tile is solid or not, defaults to false.
    bounce   [optional] - how much velocity is preserved upon hitting the tile, 0.5 is half.
    jump     [optional] - whether the player can jump while over the tile, defaults to false.
    friction [optional] - friction of the tile, must have X and Y values (e.g {x:0.5, y:0.5}).
    gravity  [optional] - gravity of the tile, must have X and Y values (e.g {x:0.5, y:0.5}).
    fore     [optional] - whether the tile is drawn in front of the player, defaults to false.
    script   [optional] - refers to a script in the scripts section, executed if it is touched.

    */

    keys: [
    {id: 0, colour: '#333', solid: 0},
    {id: 1, colour: '#888', solid: 0},
    {id: 2,colour: '#555',solid: 1,bounce: 0.35},
    {id: 3,colour: 'rgba(121, 220, 242, 0.4)',friction: {x: 0.9,y: 0.9},gravity: {x: 0,y: 0.1},jump: 1,fore: 1},
    {id: 4,colour: '#777',jump: 1},
    {id: 5,colour: '#E373FA',solid: 1,bounce: 1.1},
    {id: 6,colour: '#666',solid: 1,bounce: 0},
    // {id: 7,colour: '#73C6FA',solid: 0,script: 'change_colour'},
    {id: 7,colour: '#FFC04C',solid: 1,script: 'prompt',img:'/img/console.png'},
    {id: 8,colour: '#FADF73',solid: 0,script: 'next_level'},
    {id: 9,colour: '#C93232',solid: 0,script: 'death'},
    {id: 10,colour: '#555',solid: 1},
    {id: 11,colour: '#0FF',solid: 0,script: 'unlock'},
    {id: 12,colour: '#03C6FA',solid: 0,script: 'load_text'},
    {id: 13,colour: '#71C1FA',solid: 0,script: 'move_platform'}
    ],

    /* An array representing the map tiles. Each number corresponds to a key */
    // data:  [
    // [1,1,1,1,1],
    // [1,1,1,1,1],
    // [1,1,1,1,1],
    // [1,1,1,1,1],
    // [1,1,1,1,1],
    // [1,1,1,1,1],
    // [1,1,1,1,1]
    // ],

    data: [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 2, 2, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 2, 2, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 8, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2],
    [2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 9, 9, 9, 2, 10, 10, 10, 10, 10, 10, 1, 1, 1, 1, 1, 1, 1, 11, 2, 2, 2, 2, 4, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 1, 1, 1, 1, 1, 1, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2],
    [2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 2, 2, 2, 2, 2, 2, 6, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 2, 5, 5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    ],

    /* Default gravity of the map */

    gravity: {
        x: 0,
        y: 0.3
    },

    /* Velocity limits */

    vel_limit: {
        x: 2,
        y: 16
    },

    /* Movement speed when the key is pressed */

    movement_speed: {
        jump: 6,
        left: 0.3,
        right: 0.3
    },

    /* The coordinates at which the player spawns and the colour of the player */

    player: {
        x: 2,
        y: 2,
        colour: '#FF9900'

    },

    /* scripts refered to by the "script" variable in the tile keys */

    scripts: {
        /* you can just use "this" instead of your engine variable ("game"), but Codepen doesn't like it */
        load_text: 'game.load_map(map);',
        change_colour: 'game.player.colour = "#"+(Math.random()*0xFFFFFF<<0).toString(16);',
        /* you could load a new map variable here */
        next_level: 'alert("May you live to 120!");game.load_map(map);',
        death: 'alert("You died - how unpleasant!");game.load_map(map);',
        prompt: 'game.firstPrompt = prompt("Don\'t just stand there, say something.");game.player.vel.x = 0;game.player.vel.y = 0;this.update_player();',
        unlock: 'game.current_map.keys[10].solid = 0;game.current_map.keys[10].colour = "#888";'
    }

};

/* Clarity engine */

var Clarity = function () {

    this.alert_errors   = false;
    this.log_info       = true;
    this.tile_size      = 16;
    this.limit_viewport = false;
    this.jump_switch    = 0;
    this.firstPrompt = '';

    this.viewport = {
        x: 400,
        y: 400
    };

    this.camera = {
        x: 0,
        y: 0
    };

    this.key = {
        left: false,
        right: false,
        up: false
    };

    this.player = {

        loc: {
            x: 0,
            y: 0
        },

        vel: {
            x: 0,
            y: 0
        },
        can_jump: true,
        img: new Image(),

    };

    window.onkeydown = this.keydown.bind(this);
    window.onkeyup   = this.keyup.bind(this);
};

Clarity.prototype.error = function (message) {

    if (this.alert_errors) alert(message);
    if (this.log_info) console.log(message);
};

Clarity.prototype.insertText = function (fullMap, wordsMap,rowLoc,colLoc) {
    for (var i = 0; i < wordsMap.length; i++) {
        for (var j = 0; j < wordsMap[0].length; j++) {
            fullMap.data[rowLoc + i][colLoc + j] = wordsMap[i][j];
        }
    }
};

Clarity.prototype.log = function (message) {

    if (this.log_info) console.log(message);
};

Clarity.prototype.set_viewport = function (x, y) {

    this.viewport.x = x;
    this.viewport.y = y;
};

Clarity.prototype.keydown = function (e) {

    var _this = this;

    switch (e.keyCode) {
        case 37:
        _this.key.left = true;
        break;
        case 38:
        _this.key.up = true;
        break;
        case 39:
        _this.key.right = true;
        break;
    }
};

Clarity.prototype.keyup = function (e) {

    var _this = this;

    switch (e.keyCode) {
        case 37:
        _this.key.left = false;
        break;
        case 38:
        _this.key.up = false;
        break;
        case 39:
        _this.key.right = false;
        break;
    }
};

Clarity.prototype.load_map = function (map) {

    if (typeof map      === 'undefined'
     || typeof map.data === 'undefined'
     || typeof map.keys === 'undefined') {

        this.error('Error: Invalid map data!');

    return false;

};

Clarity.prototype.load_bd_msg = function (text, pos) {
    text = "Happy Birthday Mom ";
    text = text.toUpperCase();
    var data = this.current_map.data;
    var fullTextArray = textToArray(text);
    for (var i = 0; i < fullTextArray.length; i++) {
        for (var j = 0; j < 5*5; j++) {
            data[i+14][j + 2] = fullTextArray[i][j];
        }
        for (var j = 0; j < 5*9; j++) {
            data[i+20][j + 2] = fullTextArray[i][j + 26];
        }
        for (var j = 0; j < 5*4; j++) {
            data[i+29][j + 5] = fullTextArray[i][j + 74];
        }
    }
};

Clarity.prototype.load_text = function (text, pos) {
    if (text == '')
        text=document.getElementById('textInput').value;
    text = text.toUpperCase();
    var data = this.current_map.data;
    var fullTextArray = textToArray(text);
    for (var i = 0; i < fullTextArray.length; i++) {
        for (var j = 0; j < fullTextArray[0].length; j++) {
            data[i+22][j + 2] = fullTextArray[i][j];
        }
    }
};

this.current_map = map;

this.current_map.background = map.background || '#333';
this.current_map.gravity = map.gravity || {x: 0, y: 0.3};
this.tile_size = map.tile_size || 16;

var _this = this;

this.current_map.width = 0;
this.current_map.height = 0;

map.keys.forEach(function (key) {

    map.data.forEach(function (row, y) {

        _this.current_map.height = Math.max(_this.current_map.height, y);

        row.forEach(function (tile, x) {

            _this.current_map.width = Math.max(_this.current_map.width, x);

            if (tile == key.id)
                _this.current_map.data[y][x] = key;
        });
    });
});

this.current_map.width_p = this.current_map.width * this.tile_size;
this.current_map.height_p = this.current_map.height * this.tile_size;

this.player.loc.x = map.player.x * this.tile_size || 0;
this.player.loc.y = map.player.y * this.tile_size || 0;
this.player.colour = map.player.colour || '#000';
this.player.img.src ="../img/skate.png";
this.key.left  = false;
this.key.up    = false;
this.key.right = false;

this.camera = {
    x: 0,
    y: 0
};

this.player.vel = {
    x: 0,
    y: 0
};

this.log('Successfully loaded map data.');

return true;
};

Clarity.prototype.get_tile = function (x, y) {

    return (this.current_map.data[y] && this.current_map.data[y][x]) ? this.current_map.data[y][x] : 0;
};

Clarity.prototype.draw_tile = function (x, y, tile, context) {

    if (!tile || !tile.colour) return;

    // if (tile.id == 7) {
    //     consoleImg.src = tile.img;
    //     consoleImg.
    //     context.drawImage(consoleImg,x-this.camera.x-10,y-this.camera.y);
    // }

    context.fillStyle = tile.colour;
    context.fillRect(
        x,
        y,
        this.tile_size,
        this.tile_size
        );

};

Clarity.prototype.draw_map = function (context, fore) {

    for (var y = 0; y < this.current_map.data.length; y++) {

        for (var x = 0; x < this.current_map.data[y].length; x++) {

            if ((!fore && !this.current_map.data[y][x].fore) || (fore && this.current_map.data[y][x].fore)) {

                var t_x = (x * this.tile_size) - this.camera.x;
                var t_y = (y * this.tile_size) - this.camera.y;

                if(t_x < -this.tile_size
                    || t_y < -this.tile_size
                    || t_x > this.viewport.x
                    || t_y > this.viewport.y) continue;

                    this.draw_tile(
                        t_x,
                        t_y,
                        this.current_map.data[y][x],
                        context
                        );
            }
        }
    }

    if (!fore) this.draw_map(context, true);
};

Clarity.prototype.move_player = function () {

    var tX = this.player.loc.x + this.player.vel.x;
    var tY = this.player.loc.y + this.player.vel.y;

    if (this.player.vel.x > 0)
        this.player.img.src = "../img/skate.png";
    else if (this.player.vel.x < 0)
        this.player.img.src = "../img/skate-left.png";

    var offset = Math.round((this.tile_size / 2) - 1);

    var tile = this.get_tile(
        Math.round(this.player.loc.x / this.tile_size),
        Math.round(this.player.loc.y / this.tile_size)
        );

    if(tile.gravity) {

        this.player.vel.x += tile.gravity.x;
        this.player.vel.y += tile.gravity.y;

    } else {

        this.player.vel.x += this.current_map.gravity.x;
        this.player.vel.y += this.current_map.gravity.y;
    }

    if (tile.friction) {

        this.player.vel.x *= tile.friction.x;
        this.player.vel.y *= tile.friction.y;
    }

    var t_y_up   = Math.floor(tY / this.tile_size);
    var t_y_down = Math.ceil(tY / this.tile_size);
    var y_near1  = Math.round((this.player.loc.y - offset) / this.tile_size);
    var y_near2  = Math.round((this.player.loc.y + offset) / this.tile_size);

    var t_x_left  = Math.floor(tX / this.tile_size);
    var t_x_right = Math.ceil(tX / this.tile_size);
    var x_near1   = Math.round((this.player.loc.x - offset) / this.tile_size);
    var x_near2   = Math.round((this.player.loc.x + offset) / this.tile_size);

    var top1    = this.get_tile(x_near1, t_y_up);
    var top2    = this.get_tile(x_near2, t_y_up);
    var bottom1 = this.get_tile(x_near1, t_y_down);
    var bottom2 = this.get_tile(x_near2, t_y_down);
    var left1   = this.get_tile(t_x_left, y_near1);
    var left2   = this.get_tile(t_x_left, y_near2);
    var right1  = this.get_tile(t_x_right, y_near1);
    var right2  = this.get_tile(t_x_right, y_near2);


    if (tile.jump && this.jump_switch > 15) {

        this.player.can_jump = true;

        this.jump_switch = 0;

    } else this.jump_switch++;

    this.player.vel.x = Math.min(Math.max(this.player.vel.x, -this.current_map.vel_limit.x), this.current_map.vel_limit.x);
    this.player.vel.y = Math.min(Math.max(this.player.vel.y, -this.current_map.vel_limit.y), this.current_map.vel_limit.y);

    this.player.loc.x += this.player.vel.x;
    this.player.loc.y += this.player.vel.y;

    this.player.vel.x *= .9;

    if (left1.solid || left2.solid || right1.solid || right2.solid) {

        /* fix overlap */

        while (this.get_tile(Math.floor(this.player.loc.x / this.tile_size), y_near1).solid
            || this.get_tile(Math.floor(this.player.loc.x / this.tile_size), y_near2).solid)
            this.player.loc.x += 0.1;

        while (this.get_tile(Math.ceil(this.player.loc.x / this.tile_size), y_near1).solid
            || this.get_tile(Math.ceil(this.player.loc.x / this.tile_size), y_near2).solid)
            this.player.loc.x -= 0.1;

        /* tile bounce */

        var bounce = 0;

        if (left1.solid && left1.bounce > bounce) bounce = left1.bounce;
        if (left2.solid && left2.bounce > bounce) bounce = left2.bounce;
        if (right1.solid && right1.bounce > bounce) bounce = right1.bounce;
        if (right2.solid && right2.bounce > bounce) bounce = right2.bounce;

        this.player.vel.x *= -bounce || 0;

    }

    if (top1.solid || top2.solid || bottom1.solid || bottom2.solid) {

        /* fix overlap */

        while (this.get_tile(x_near1, Math.floor(this.player.loc.y / this.tile_size)).solid
            || this.get_tile(x_near2, Math.floor(this.player.loc.y / this.tile_size)).solid)
            this.player.loc.y += 0.1;

        while (this.get_tile(x_near1, Math.ceil(this.player.loc.y / this.tile_size)).solid
            || this.get_tile(x_near2, Math.ceil(this.player.loc.y / this.tile_size)).solid)
            this.player.loc.y -= 0.1;

        /* tile bounce */

        var bounce = 0;

        if (top1.solid && top1.bounce > bounce) bounce = top1.bounce;
        if (top2.solid && top2.bounce > bounce) bounce = top2.bounce;
        if (bottom1.solid && bottom1.bounce > bounce) bounce = bottom1.bounce;
        if (bottom2.solid && bottom2.bounce > bounce) bounce = bottom2.bounce;

        this.player.vel.y *= -bounce || 0;

        if ((bottom1.solid || bottom2.solid) && !tile.jump) {

            this.player.on_floor = true;
            this.player.can_jump = true;
        }

    }

    // adjust camera

    var c_x = Math.round(this.player.loc.x - this.viewport.x/2);
    var c_y = Math.round(this.player.loc.y - this.viewport.y/2);
    var x_dif = Math.abs(c_x - this.camera.x);
    var y_dif = Math.abs(c_y - this.camera.y);

    if(x_dif > 5) {

        var mag = Math.round(Math.max(1, x_dif * 0.1));

        if(c_x != this.camera.x) {

            this.camera.x += c_x > this.camera.x ? mag : -mag;

            if(this.limit_viewport) {

                this.camera.x =
                Math.min(
                    this.current_map.width_p - this.viewport.x + this.tile_size,
                    this.camera.x
                    );

                this.camera.x =
                Math.max(
                    0,
                    this.camera.x
                    );
            }
        }
    }

    if(y_dif > 5) {

        var mag = Math.round(Math.max(1, y_dif * 0.1));

        if(c_y != this.camera.y) {

            this.camera.y += c_y > this.camera.y ? mag : -mag;

            if(this.limit_viewport) {

                this.camera.y =
                Math.min(
                    this.current_map.height_p - this.viewport.y + this.tile_size,
                    this.camera.y
                    );

                this.camera.y =
                Math.max(
                    0,
                    this.camera.y
                    );
            }
        }
    }

    if(this.last_tile != tile.id && tile.script) {

        eval(this.current_map.scripts[tile.script]);
    }

    this.last_tile = tile.id;
};

Clarity.prototype.update_player = function () {

    if (this.key.left) {

        if (this.player.vel.x > -this.current_map.vel_limit.x)
            this.player.vel.x -= this.current_map.movement_speed.left;
    }

    if (this.key.up) {

        if (this.player.can_jump && this.player.vel.y > -this.current_map.vel_limit.y) {

            this.player.vel.y -= this.current_map.movement_speed.jump;
            this.player.can_jump = false;
        }
    }

    if (this.key.right) {

        if (this.player.vel.x < this.current_map.vel_limit.x)
            this.player.vel.x += this.current_map.movement_speed.left;
    }

    this.move_player();
};

Clarity.prototype.draw_player = function (context) {

    // context.fillStyle = this.player.colour;

    // context.beginPath();

    // context.arc(
    //     this.player.loc.x + this.tile_size / 2 - this.camera.x,
    //     this.player.loc.y + this.tile_size / 2 - this.camera.y,
    //     this.tile_size / 2 - 1,
    //     0,
    //     Math.PI * 2

    //     );

    // context.fill();

    context.drawImage(this.player.img,this.player.loc.x-this.camera.x-10,this.player.loc.y-this.camera.y-20);

};

Clarity.prototype.update = function () {

    this.update_player();
};

Clarity.prototype.draw = function (context) {

    this.draw_map(context, false);

    this.draw_player(context);
};

/* Setup of the engine */

window.requestAnimFrame =
window.requestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.mozRequestAnimationFrame ||
window.oRequestAnimationFrame ||
window.msRequestAnimationFrame ||
function(callback) {
    return window.setTimeout(callback, 1000 / 60);
};


var canvas = document.getElementById('canvas'),
ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 500;

var game = new Clarity();
game.set_viewport(canvas.width, canvas.height);
// game.insertText(map,arrayTest,10,1);
game.load_map(map);
// game.load_text(fullTextArray);
/* Limit the viewport to the confines of the map */
game.limit_viewport = true;

function reload_Map() {
    map.keys.forEach(function (key) {

        map.data.forEach(function (row, y) {

            game.current_map.height = Math.max(game.current_map.height, y);

            row.forEach(function (tile, x) {

                game.current_map.width = Math.max(game.current_map.width, x);

                if (tile == key.id)
                    game.current_map.data[y][x] = key;
            });
        });

    });
};

function loadPrompt(num) {
    if (num == 1) {
        game.load_text(game.firstPrompt,1);
    }
    if (num == 7)
        game.load_bd_msg("",1);
}

var Loop = function() {
    tickCount+=1;
    ctx.fillStyle = '#333';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    game.update();
    game.draw(ctx);
    var inputText = document.getElementById('textInput').value;
    if (inputText != '' && tickCount % 200 == 0) {
        game.load_text();
        reload_Map();
    }
    if (game.firstPrompt == '') {
        loadPrompt(7);
        reload_Map();
    }
    // if (tickCount % 100 == 0 && inputText != null) {
        // game.load_text();
        // for (var i = 0; i < 10; i++)
            // alert(game.map.data[20][1][1]);
    // }
    window.requestAnimFrame(Loop);
};

Loop();
