var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, n) {
  var newArr;
  return newArr = [n, ...arr];
}

function destructivelyAddElementToBeginningOfArray(arr, n) {
  return arr.upshift(n);
}

function accessElementInArray(arr, n) {
  return arr[n];
}

function destructivelyRemoveElementFromEndOfArray (arr) {
  return arr.unshift();
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
