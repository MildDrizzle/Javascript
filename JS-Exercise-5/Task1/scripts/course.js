const handleFormSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(document.getElementById("courseForm"));
  const courseName = formData.get("cname");
  const image = formData.get("image");
  const id = Date.now();
  if (localStorage.getItem("courses") === null) {
    const courses = [{ id, name: courseName, image, users: [] }];
    localStorage.setItem("courses", JSON.stringify(courses));
  } else {
    const courses = JSON.parse(localStorage.getItem("courses"));
    courses.push({ id, name: courseName, image, users: [] });
    localStorage.setItem("courses", JSON.stringify(courses));
  }
  cancelAddCourse();
};

const showAddCourseForm = () => {
  document.getElementById("courses").classList.add("none");
  document.getElementById("addCourse").classList.remove("none");
};

const cancelAddCourse = () => {
  document.getElementById("courses").classList.remove("none");
  document.getElementById("addCourse").classList.add("none");
  getCourses();
};

const getCourses = () => {
  document.getElementById("table").innerHTML = "";
  const data = JSON.parse(localStorage.getItem("courses"));
  let count = 1;
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

const deleteCourse = (id) => {
  const data = JSON.parse(localStorage.getItem("courses"));
  localStorage.setItem(
    "courses",
    JSON.stringify(data.filter((obj) => obj.id !== id))
  );
  getCourses();
};
