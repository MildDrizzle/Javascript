//Function is used for loading all the courses assigned to the Logged in User.
const loadStudentCourses = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const dom = document.getElementById("myCourses");
  const courses = JSON.parse(localStorage.getItem("courses"));
  let myCourses = [];
  //Finding the courses alloted to the user

  // for (let i = 0; i < courses.length; i++) {
  //   for (let j = 0; j < courses[i].users.length; j++) {
  //     if (courses[i].users[j] === currentUser.id) {
  //       myCourses.push(courses[i].id);
  //     }
  //   }
  // }
  const getUsers = (users) => {
    let isFound = users.indexOf(currentUser.id);
    if (isFound !== -1) {
      return true;
    } else return false;
  };
  console.log(courses.length);
  const getCourses = (i) => {
    if (i >= courses.length) {
      return;
    }
    if (getUsers(courses[i].users)) {
      myCourses.push(courses[i].id);
      getCourses(i + 1);
    } else {
      getCourses(i + 1);
    }
  };

  getCourses(0);
  // console.log(myCourses);

  //Displaying the alloted courses into the DOM.
  myCourses.forEach((courseId) => {
    const course = courses.filter((courseee) => courseee.id === courseId)[0];
    // console.log(course);
    dom.innerHTML += `
              <div class="col-lg-4"><div class="card" style="width: 18rem;">
                <img src="${course.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${course.name}</h5>
                </div>
              </div>
  `;
  });
};
