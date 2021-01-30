const checkIfCourseExsists = (course) => {
  const data = JSON.parse(localStorage.getItem("courses"));
  for (let i = 0; i < data.length; i++) {
    if (data[i].name.toLowerCase() === course.toLowerCase()) {
      return true;
    }
  }
  return false;
};

//Function for adding new course
const handleFormSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(document.getElementById("courseForm"));
  const courseName = formData.get("cname");
  const image = formData.get("image");
  const id = Date.now();
  //If there are no courses yet then add the first course
  if (localStorage.getItem("courses") === null) {
    if (checkIfCourseExsists(courseName)) {
      alert("Course Already exists");
      document.getElementById("courseForm").reset();
      return;
    }
    const courses = [{ id, name: courseName, image, users: [] }];
    localStorage.setItem("courses", JSON.stringify(courses));
  }
  //If there are courses then push the new course to the array.
  else {
    if (checkIfCourseExsists(courseName)) {
      alert("Course Already exists");
      document.getElementById("courseForm").reset();
      return;
    }
    const courses = JSON.parse(localStorage.getItem("courses"));
    courses.push({ id, name: courseName, image, users: [] });
    localStorage.setItem("courses", JSON.stringify(courses));
  }
  //Hide the course add form when the course is added
  document.getElementById("courseForm").reset();
  cancelAddCourse();
};
//Show course add form initially the status is show all courses
const showAddCourseForm = () => {
  document.getElementById("courses").classList.add("none");
  document.getElementById("addCourse").classList.remove("none");
};
//Hide course add form and show all courses
const cancelAddCourse = () => {
  document.getElementById("courses").classList.remove("none");
  document.getElementById("addCourse").classList.add("none");
  //Function to load if the user has entered any new courses then
  // they will also get displayed without page load
  getCourses();
};

//Function to get all courses and print into to the DOM.
const getCourses = () => {
  //Get the table where the courses are to be shown
  document.getElementById("table").innerHTML = "";
  const data = JSON.parse(localStorage.getItem("courses"));
  let count = 1;
  //Grab all the courses and print it to the DOM using table id
  data.forEach((element) => {
    const row = document.getElementById("table").insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    cell1.innerHTML = count++;
    cell2.innerHTML = element.name;
    cell3.innerHTML = `<button class="btn btn-danger" onclick="deleteCourse(${element.id})">Delete</button>`;
  });
};

//Delete the course when the delete button is pressed in context to the course name
const deleteCourse = (id) => {
  //Grab all the courses
  const data = JSON.parse(localStorage.getItem("courses"));
  //Filter out the course which has to be deleted and set it to the localstorage
  localStorage.setItem(
    "courses",
    JSON.stringify(data.filter((obj) => obj.id !== id))
  );
  //Call the getCourse function to render all the course again so that the
  //deleted course gets removed from the DOM without page reoload.
  getCourses();
};
