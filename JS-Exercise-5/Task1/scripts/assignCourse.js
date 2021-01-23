const getCourses = () => {
  document.getElementById("table").innerHTML = "";
  const data = JSON.parse(localStorage.getItem("courses"));
  let count = 1;
  const selectedUser = document.getElementById("names").value;
  data.forEach((element) => {
    const row = document.getElementById("table").insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    cell1.innerHTML = count++;
    cell2.innerHTML = element.name;
    const userId = document.getElementById("names").value;
    console.log(element);
    if (element.users.length > 0) {
      element.users.forEach((courseId) => {
        if (selectedUser === courseId) {
          console.log("in if");
          cell3.innerHTML = `<button class="btn btn-danger" onclick="deleteCourse(${element.id})">Revoke</button>`;
        } else {
          cell3.innerHTML = `<button class="btn btn-success" onclick="assignCourse(${element.id})">Assign</button>`;
        }
      });
    } else {
      console.log("in else");
      cell3.innerHTML = `<button class="btn btn-success" onclick="assignCourse(${element.id})">Assign</button>`;
    }
  });
};

const getUsers = () => {
  if (localStorage.getItem("users") === null) {
    return;
  } else {
    const users = JSON.parse(localStorage.getItem("users")).filter(
      (data) => data.type !== "admin"
    );
    const select = document.getElementById("names");
    users.forEach((user) => {
      let newOption = new Option(user.username, user.id);
      select.add(newOption, undefined);
    });
  }
};

const assignCourse = (id) => {
  const userId = document.getElementById("names").value;
  const data = JSON.parse(localStorage.getItem("courses")).filter(
    (course) => course.id === id
  )[0];
  const oldData = JSON.parse(localStorage.getItem("courses")).filter(
    (course) => course.id !== id
  );
  data.users.push(userId);
  oldData.push(data);
  localStorage.setItem("courses", JSON.stringify(oldData));
};

const deleteCourse = (id) => {
  const userId = document.getElementById("names").value;
  let data = JSON.parse(localStorage.getItem("courses")).filter(
    (course) => course.id === id
  )[0];
  const oldData = JSON.parse(localStorage.getItem("courses")).filter(
    (course) => course.id !== id
  );
  console.log(data.users);
  data.users = data.users.filter((el) => el !== userId);
  console.log(data.users);
  console.log(oldData);
  oldData.push(data);
  localStorage.setItem("courses", JSON.stringify(oldData));
};
