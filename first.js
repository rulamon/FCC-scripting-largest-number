function largestOfFour(arr) {
  // You can do this!
  let largestArr = [];
  for (let i = 0; i < arr.length; i++){
    largestArr.push(Math.max(...arr[i]));
  }
  return largestArr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));