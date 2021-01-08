let static_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const shuffleArray = (array) => {
  let count = array.length;

  for (i = 0; i < array.length; i++) {
    let randomIndex = Math.floor(Math.random(0, count) * 10);
    let temp = array[i];
    array[i] = array[randomIndex];
    array[randomIndex] = temp;
    count--;
  }
  return array;
};

static_array = shuffleArray(static_array);
console.log(static_array);
