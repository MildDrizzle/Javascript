const static_string = "This is a sample string";
const input_string = "Insert me";
const input_position = 2;

const stringInserter = (static_string, input_string, input_position) => {
  let str = static_string;

  return (
    str.slice(0, input_position) + input_string + str.slice(input_position)
  );
};

console.log(stringInserter(static_string, input_string, input_position));
