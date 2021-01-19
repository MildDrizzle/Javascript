const static_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const getFirstLastFromArray = (num) => {
  return [static_array.slice(0, num), static_array.slice(-num)];
};

const list = getFirstLastFromArray(0);
console.log(`First 3 elements : [${list[0]}], Last 3 elements : [${list[1]}]`);
