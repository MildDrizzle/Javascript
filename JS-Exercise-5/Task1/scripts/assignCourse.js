//function to get all the courses for the selected user from the select menu
const getCourses = () => {
  //Empty all the courses if it were rendered by previous selected user
  document.getElementById("table").innerHTML = "";
  const data = JSON.parse(localStorage.getItem("courses"));
  let count = 1;
  //get the selected user from the select input
  const selectedUser = document.getElementById("names").value;
  //for each course print the data for the corresponding user
  data.forEach((element) => {
    const row = document.getElementById("table").insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    cell1.innerHTML = count++;
    cell2.innerHTML = element.name;
    const userId = document.getElementById("names").value;
    //if the users for that course are greater then zero then only print these buttons
    if (element.users.length > 0) {
      //check if the user has been allotted the course or not
      element.users.forEach((courseId) => {
        //if the course has been allotted display revoke button
        if (selectedUser === courseId) {
          cell3.innerHTML = `<button class="btn btn-danger" onclick="deleteCourse(${element.id})">Revoke</button>`;
        }
        //if the course has not been allotted then show the assign button
        else {
          cell3.innerHTML = `<button class="btn btn-success" onclick="assignCourse(${element.id})">Assign</button>`;
        }
      });
      //if there are currenlty no users for that course then no need to check just display assign button
    } else {
      cell3.innerHTML = `<button class="btn btn-success" onclick="assignCourse(${element.id})">Assign</button>`;
    }
  });
};

//Funciton to get all the users registered into the LMS and show as option of the select input
const getUsers = () => {
  //If the localstorage dosen;t have any users the return
  if (localStorage.getItem("users") === null) {
    return;
  }
  //Else get all the users and filter out the admin users so we are only left with the simple user
  else {
    const users = JSON.parse(localStorage.getItem("users")).filter(
      (data) => data.type !== "admin"
    );
    //Get the select input
    const select = document.getElementById("names");
    //display all the user names as the options of the select input
    users.forEach((user) => {
      let newOption = new Option(user.username, user.id);
      select.add(newOption, undefined);
    });
  }
};

//Function to assign the course to the user on the click of assign button
const assignCourse = (id) => {
  const userId = document.getElementById("names").value;
  //get the course in which the user has to be added
  const data = JSON.parse(localStorage.getItem("courses")).filter(
    (course) => course.id === id
  )[0];
  //get the course in which user is not to be added.
  const oldData = JSON.parse(localStorage.getItem("courses")).filter(
    (course) => course.id !== id
  );
  //push the userid in the course in which the user has to be added
  data.users.push(userId);
  //push the course in which the user has been added to the filtered courses.
  oldData.push(data);
  //set the courses in the localstorage
  localStorage.setItem("courses", JSON.stringify(oldData));
  //print the courses to the DOM
  getCourses();
};

//Function to delete the user from the course
const deleteCourse = (id) => {
  const userId = document.getElementById("names").value;
  //get the course from which the user has to be deleted from all courses
  let data = JSON.parse(localStorage.getItem("courses")).filter(
    (course) => course.id === id
  )[0];
  //get the courses from which the user is not to be deleted.
  const oldData = JSON.parse(localStorage.getItem("courses")).filter(
    (course) => course.id !== id
  );
  //Filtere out the user which has to be deleted from the course
  data.users = data.users.filter((el) => el !== userId);
  //Add the course to all course
  oldData.push(data);
  localStorage.setItem("courses", JSON.stringify(oldData));
  getCourses();
};
