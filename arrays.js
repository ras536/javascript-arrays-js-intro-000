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