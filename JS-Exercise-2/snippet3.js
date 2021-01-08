// store in hashmap

const mostFrequentElement = (array) => {
  let arrayMap = new Map();
  let largestTime = 0;
  let largestIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (arrayMap.has(array[i])) {
      arrayMap.set(array[i], arrayMap.get(array[i]) + 1);
    } else {
      arrayMap.set(array[i], 1);
    }
    if (largestTime < arrayMap.get(array[i])) {
      largestTime = arrayMap.get(array[i]);
      largestIndex = array[i];
    }
  }
  return largestIndex;
};

console.log(mostFrequentElement([0, 1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 7, 8, 9]));

//return the largest key
