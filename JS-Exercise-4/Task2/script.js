let currentOperation = "add";
let currentUpdateId;
let dataArray = [];
const addData = () => {
  const data1 = document.getElementById("data1");
  const data2 = document.getElementById("data2");
  if (data1.value === "" || data2.value === "") {
    alert("Cannot enter blank values");
    return;
  }
  let present;
  if (dataArray.length !== 0) {
    for (let i = 0; i < dataArray.length; i++) {
      if (
        dataArray[i].firstName === data1.value &&
        dataArray[i].lastName === data2.value
      ) {
        present = true;
        break;
      } else {
        present = false;
      }
    }
  }

  if (present) {
    alert("Duplicate Data Entry Detected");
    return;
  }
  const randomId = Date.now().toString();
  dataArray.push({
    id: randomId,
    firstName: data1.value,
    lastName: data2.value,
  });
  const row = document.getElementById("data").insertRow(-1);
  row.id = randomId;
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);
  cell1.classList = cell2.classList = "data-field";
  cell1.innerHTML = data1.value;
  cell2.innerHTML = data2.value;
  cell3.innerHTML =
    cell3.innerHTML +
    `<button class="btn-success" onclick="update(${randomId})">Update</button>`;
  cell4.innerHTML =
    cell4.innerHTML +
    `<button class="btn-danger" onclick="deleteRow(${randomId})">Delete</button>`;
  data1.value = data2.value = "";
};

const update = (id) => {
  const oldData1 = document.getElementById(id).childNodes[0].innerHTML;
  const oldData2 = document.getElementById(id).childNodes[1].innerHTML;
  document.getElementById("data1").value = oldData1;
  document.getElementById("data2").value = oldData2;
  document.getElementById("addBtn").classList = "btn-update";
  document.getElementById("addBtn").innerHTML = "Update";
  document
    .getElementById("addBtn")
    .setAttribute("onclick", `updateData(${id})`);
  currentUpdateId = id;
};
const deleteRow = (id) => {
  if (!confirm("Are you sure you want to delete the data?")) {
    return;
  }
  if (currentUpdateId === id) {
    document.getElementById("data1").value = "";
    document.getElementById("data2").value = "";
    document.getElementById("addBtn").innerHTML = "Add";
    document.getElementById("addBtn").classList = "btn-add";
    document.getElementById("addBtn").setAttribute("onclick", `addData()`);
  }
  document.getElementById(id).remove();
  dataArray = dataArray.filter((data) => {
    return data.id !== id.toString();
  });
};

const updateData = (id) => {
  const data1 = document.getElementById("data1");
  const data2 = document.getElementById("data2");
  document.getElementById(id).childNodes[0].innerHTML = data1.value;
  document.getElementById(id).childNodes[1].innerHTML = data2.value;
  document.getElementById("addBtn").innerHTML = "Add";
  document.getElementById("addBtn").classList = "btn-add";
  document.getElementById("addBtn").setAttribute("onclick", `addData()`);
  let index;
  for (let i = 0; i < dataArray.length; i++) {
    if (dataArray[i].id === id.toString()) {
      index = i;
      break;
    }
  }
  dataArray[index].firstName = data1.value;
  dataArray[index].secondName = data2.value;
  data1.value = data2.value = "";
  currentUpdateId = "";
};
