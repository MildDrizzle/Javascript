const properties = [
  {
    id: 1,
    name: "kishan",
    age: 21,
  },
  {
    id: 2,
    name: "abx",
    age: 35,
  },
  {
    id: 3,
    name: "fdsd",
    age: 23,
  },
  {
    id: 4,
    name: "dfg",
    age: 77,
  },
  {
    id: 5,
    name: "qwe",
    age: 12,
  },
  {
    id: 6,
    name: "bd",
    age: 27,
  },
  {
    id: 7,
    name: "sgd",
    age: 99,
  },
  {
    id: 8,
    name: "hfdf",
    age: 57,
  },
  {
    id: 9,
    name: "qwe",
    age: 64,
  },
  {
    id: 10,
    name: "nfg",
    age: 41,
  },
];

const ascendingOrder = (obj) => {
  obj.sort((a, b) => a.age - b.age);
  console.log(obj);
};

const descendingOrder = (obj) => {
  obj.sort((a, b) => {
    if (a.name > b.name) return -1;
    else if (a.name < b.name) return 1;
    return 0;
  });
  console.log(obj);
};

ascendingOrder(properties);
descendingOrder(properties);
