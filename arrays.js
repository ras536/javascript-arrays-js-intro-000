var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, n) {
  var newArr;
  return newArr = [n, ...arr];
}

function destructivelyAddElementToBeginningOfArray(arr, n) {
  return arr.unshift(n);
}

function accessElementInArray(arr, n) {
  return arr[n];
}

function destructivelyRemoveElementFromEndOfArray (arr) {
  arr.unshift();
  return arr;
}

function removeElementFromBeginningOfArray (arr) {
  return arr.slice(1);
}

function destructivelyRemoveElementFromEndOfArray (arr) {
  return arr.pop();
}

function removeElementFromEndOfArray (arr) {
  return arr.slice(0, arr.length - 1);
}

function addElementToEndOfArray (arr, n) {
  var newArr;
  return newArr = [...arr, n];
}

function destructivelyAddElementToEndOfArray (arr, n) {
  return arr.push(n);
}

function destructivelyRemoveElementFromBeginningOfArray (arr) {
  arr.shift();
  return arr;
}
