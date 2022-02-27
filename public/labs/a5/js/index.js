
// alert('Hello World!');

console.log('Hello World!');
// console.log('Variables and Constants');
// eslint-disable-next-line no-undef
global1 = 10;
var functionScoped = 2;
let blockScoped = 5;
// eslint-disable-next-line no-undef
const constant1 = global1 + functionScoped - blockScoped;
// eslint-disable-next-line no-undef
console.log('', 'Variables and Constants', '\n', global1, '\n', blockScoped, '\n', constant1);

// console.log('Variable types');
let numberVariable = 123;
let floatingPointNumber = 234.345;
let stringVariable = 'Hello World!';
let booleanVariable = true;
let isNumber = typeof numberVariable;
let isString = typeof stringVariable;
let isBoolean = typeof booleanVariable;
console.log('', 'Variable types', '\n', numberVariable, '\n', floatingPointNumber, '\n', stringVariable,
    '\n', booleanVariable, '\n', isNumber, '\n', isString, '\n', isBoolean);

let true1 = true;
let false1 = false;
let false2 = true1 && false1;
let true2 = true1 || false1;
let true3 = !false2;
let true4 = numberVariable === 123;
let true5 = floatingPointNumber !== 321.432;
let false3 = numberVariable < 100;
console.log('', 'Boolean Variables', '\n', true1, '\n', false1, '\n', false2,
    '\n', true2, '\n', true3, '\n', true4, '\n', true5, '\n', false3);

console.log('If else');
if(true1) {
    console.log(true);
}

if(!false1) {
    console.log('!false1');
} else {
    console.log('false1');
}

console.log();
const loggedIn = true;
const greeting = loggedIn ? 'Welcome!' : 'Please login';
console.log('', 'Ternary conditional operator', '\n', greeting)

function add (a, b) {
    return a + b;
}
const twoPlusFour = add(2, 4);
console.log('', 'Legacy ES5 function', '\n', twoPlusFour);

const subtract = (a, b) => {
    return a - b;
}
const threeMinusOne = subtract(3, 1);
console.log('', 'New ES6 functions', '\n', threeMinusOne);

const multiply = (a, b) => a * b;
const fourTimesFive = multiply(4, 5);
console.log('', 'Implied return', '\n', fourTimesFive);

const square = a => a * a;
const plusOne = a => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);
console.log('', 'Parenthesis and parameters', '\n', twoSquared, '\n', threePlusOne);

let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];
let variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1
];
console.log('', numberArray1, '\n', stringArray1, '\n', variableArray1);


const length1 = numberArray1.length;
const index1 = numberArray1.indexOf(3);
console.log('', 'Array index and length', '\n', length1, '\n', index1);

// adding new items
numberArray1.push(6);
stringArray1.push('string3');

// remove 1 item starting on 3rd spot
numberArray1.splice(2, 1);
stringArray1.splice(1, 1);
console.log('', 'Add and remove data to arrays', '\n', numberArray1, '\n', stringArray1);

console.log('for loops');
for (let i=0; i<stringArray1.length; i++) {
    const string1 = stringArray1[i];
    console.log(string1);
}

const squares = numberArray1.map(square);
const cubes = numberArray1.map(a => a * a * a);
console.log('', 'Map function', '\n', numberArray1, '\n', squares, '\n', cubes);

const four = numberArray1.find(a => a === 4);
const string3 = stringArray1.find(a => a === 'string3');
console.log('', 'Find function', '\n', four, '\n', string3);

const fourIndex = numberArray1
    .findIndex(a => a === 4);
const string3Index = stringArray1
    .findIndex(a => a === 'string3');
console.log('', 'Find index', '\n', fourIndex, '\n', string3Index);

const numbersGreaterThan2 = numberArray1
    .filter(a => a > 2);
const evenNumbers = numberArray1
    .filter(a => a % 2 === 0);
const oddNumbers = numberArray1
    .filter(a => a % 2 !== 0);
console.log('', 'Filter function', '\n', numberArray1, '\n', numbersGreaterThan2, '\n', evenNumbers, '\n', oddNumbers);

const five = 2 + 3;
const result1 = "2 + 3 = " + five;
console.log(result1);

const result2 = `2 + 3 = ${2 + 3}`;
console.log(result2);

const username = "alice";
const greeting1 = `Welcome home ${username}`;
console.log(greeting1);

const loggedIn2 = false;
const greeting2 = `Logged in: ${loggedIn2? "Yes" : "No"}`;
console.log(greeting2);

const init = () => {
    console.log('Hello world from jQuery');
    /* do the rest of the lab work here */
}
// eslint-disable-next-line no-undef
$(init);

// eslint-disable-next-line no-undef
const bindById = $('#bind-by-id');
// eslint-disable-next-line no-undef
const bindByClass = $('.bind-by-class');
console.log('Binding to DOM');
console.log(bindById);
console.log(bindByClass);

const changeStyle = $('#change-style');
const changeStyle2 = $('.change-style');
changeStyle.css('color', 'red');
changeStyle2.css('color', 'blue');

const getIdAttr = $("#get-id-attr");
const id = getIdAttr.attr('id');
console.log(id);

const setClassAttr = $("#set-class-attr");
setClassAttr.attr('class', 'class-0');

const addClass1Example = $("#add-class-1");
addClass1Example.addClass('class-1');

const removeClass1Example = $("#remove-class-1");
removeClass1Example.removeClass('class-2');

const hideMe = $("#hide-me");
hideMe.hide();

const showMe = $("#show-me");
showMe.show();

const newLineItem = $("<li>Line item 1</li>");
const anotherLineItem = $("<li>Line item 2</li>");

const ul = $("#append-new-elements");
ul.append(newLineItem);
ul.append(anotherLineItem);

const removeThisLi = $("#remove-this");
const emptyThisUl = $("#empty-this");
removeThisLi.remove();
emptyThisUl.empty();

const changeThisText =
    $("#change-this-text");
const changeThisHtml =
    $("#change-this-html");
changeThisText.html('New text');
changeThisHtml.html(`
    <li>Line item A</li>
    <li>Line item B</li>
    <li>Line item C</li>
`);

const child2 = $("#child-2");
const parent1 =
    child2.parents("#parent");
parent1
    .css('background-color', 'red')
    .css('color', 'white');

const parent = $("#parent");
const child = parent.find("#child-2");
child.css('background-color', 'blue')

const handleClick =
    () => console.log('Handle click');
const clickable = $('.clickable');
clickable.click(handleClick);

const handleEventTarget = (event) => {
    const target = event.target;
    console.log(target);
    $(target)
        .css('background-color', 'blue')
        .css('color', 'white');
}
const eventTarget = $("#event-target");
eventTarget.click(handleEventTarget);

let hideBtn, showBtn, hideShowHeader;
hideBtn = $('#hide');
showBtn = $('#show');
hideShowHeader = $('#hide-show');
const hideHandler = () => {
    hideShowHeader.hide();
}
const showHandler = () => {
    hideShowHeader.show();
}
hideBtn.click(hideHandler);
showBtn.click(showHandler);
