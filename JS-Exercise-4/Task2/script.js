let currentOperation = "add";
let currentUpdateId;

const addData = () => {
  const data1 = document.getElementById("data1");
  const data2 = document.getElementById("data2");
  if (data1.value === "" || data2.value === "") return;
  const randomId = Date.now().toString();
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
  if (currentUpdateId === id) {
    document.getElementById("data1").value = "";
    document.getElementById("data2").value = "";
  }
  document.getElementById(id).remove();
};

const updateData = (id) => {
  const data1 = document.getElementById("data1");
  const data2 = document.getElementById("data2");
  document.getElementById(id).childNodes[0].innerHTML = data1.value;
  document.getElementById(id).childNodes[1].innerHTML = data2.value;
  document.getElementById("addBtn").innerHTML = "Add";
  document.getElementById("addBtn").classList = "btn-add";
  document.getElementById("addBtn").setAttribute("onclick", `addData()`);
  data1.value = data2.value = "";
  currentUpdateId = "";
};
