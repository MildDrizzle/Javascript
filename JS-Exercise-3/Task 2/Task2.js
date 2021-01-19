const data = [
  { Name: "Ravindra", Sports: ["Chess", "Cricket"] },
  { Name: "Ravi", Sports: ["Cricket", "Football"] },
  { Name: "Rishabh", Sports: ["TableTennis", "Football"] },
];

const groupBySport = (sportsData) => {
  const sport = new Map();
  sportsData.forEach((element) => {
    element.Sports.forEach((sportName) => {
      if (sport.has(sportName)) {
        const tempdata = sport.get(sportName);
        sport.set(sportName, [...tempdata, element.Name]);
      } else {
        sport.set(sportName, [element.Name]);
      }
    });
  });
  const array = [];
  for (let entry of sport) {
    array.push({ [entry[0]]: entry[1] });
  }

  return array;
};

console.log(groupBySport(data));
