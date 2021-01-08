let static_array = [
  { name: "Jack", age: 23 },
  { name: "Sam", age: 12 },
  { name: "Max", age: 20 },
];

const deleteUser = (key) => {
  if (key > static_array.length) return "Position does not exist";
  static_array = static_array.filter((id, index) => index != key);
  return static_array;
};

const insertUser = (item, index) => {
  static_array.splice(index, 0, item);
  return static_array;
};

console.log(deleteUser(55));
console.log(insertUser({ name: "Kishan Sheth", age: 20 }, 2));

// Implement Switch Case
// Also Check if the value exists or else print error
