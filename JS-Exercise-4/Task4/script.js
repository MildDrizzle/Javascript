document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("mainCheckbox").disabled = true;
  document.getElementById("deleteAll").disabled = true;
});
let currentOperation = "add";
let currentUpdateId;
const data = [];
const selected = [];

const handleSelectScenarios = () => {
  if (data.length === selected.length && data.length > 0) {
    document.getElementById("mainCheckbox").checked = true;
  } else {
    document.getElementById("mainCheckbox").checked = false;
  }
  if (data.length === 0) {
    document.getElementById("mainCheckbox").disabled = true;
  } else {
    document.getElementById("mainCheckbox").disabled = false;
  }

  if (selected.length === 0) {
    document.getElementById("deleteAll").disabled = true;
  } else {
    document.getElementById("deleteAll").disabled = false;
  }
  selectedString();
};

const addData = () => {
  const data1 = document.getElementById("data1");
  const data2 = document.getElementById("data2");
  if (data1.value === "" || data2.value === "") {
    alert("Blank Values cannot be inserted.");
    return;
  }
  const randomId = Date.now().toString();
  const row = document.getElementById("data").insertRow(-1);
  row.id = randomId;
  data.push(randomId);
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);
  const cell5 = row.insertCell(4);
  cell2.classList = cell3.classList = "data-field";
  cell1.innerHTML = `<input type="checkbox" onchange="selectDeselect(${randomId})" /> `;
  cell2.innerHTML = data1.value;
  cell3.innerHTML = data2.value;
  cell4.innerHTML =
    cell4.innerHTML +
    `<button  class="btn-success"  onclick="update(${randomId})">Update Data</button>`;
  cell5.innerHTML =
    cell5.innerHTML +
    `<button class="btn-danger" onclick="deleteRow(${randomId})">Delete Data</button>`;
  data1.value = data2.value = "";
  handleSelectScenarios();
};

const update = (id) => {
  const oldData1 = document.getElementById(id).childNodes[1].innerHTML;
  const oldData2 = document.getElementById(id).childNodes[2].innerHTML;
  document.getElementById("data1").value = oldData1;
  document.getElementById("data2").value = oldData2;
  document.getElementById("addBtn").innerHTML = "Update";
  document.getElementById("addBtn").classList = "btn-update";
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
    document.getElementById("addBtn").classList = "btn-add";
    document.getElementById("addBtn").innerHTML = "Add";
    document.getElementById("addBtn").setAttribute("onclick", `addData()`);
  }
  document.getElementById(id).remove();
  data.splice(data.indexOf(id.toString()), 1);
  selected.splice(selected.indexOf(id.toString()), 1);
  handleSelectScenarios();
};

const updateData = (id) => {
  const data1 = document.getElementById("data1");
  const data2 = document.getElementById("data2");
  document.getElementById(id).childNodes[1].innerHTML = data1.value;
  document.getElementById(id).childNodes[2].innerHTML = data2.value;
  document.getElementById("addBtn").classList = "btn-add";
  document.getElementById("addBtn").innerHTML = "Add";
  document.getElementById("addBtn").setAttribute("onclick", `addData()`);
  data1.value = data2.value = "";
  currentUpdateId = "";
};

const selectAll = () => {
  if (document.getElementById("mainCheckbox").checked) {
    selected.length = 0;
    data.forEach((id) => {
      document.getElementById(id).childNodes[0].childNodes[0].checked = true;
      selected.push(id.toString());
    });
  } else {
    data.forEach((id) => {
      document.getElementById(id).childNodes[0].childNodes[0].checked = false;
      selected.splice(selected.indexOf(id.toString()), 1);
    });
  }
  selectedString();
  handleSelectScenarios();
};

const selectDeselect = (id) => {
  selected.includes(id.toString())
    ? selected.splice(selected.indexOf(id.toString()), 1)
    : selected.push(id.toString());
  selectedString();
  handleSelectScenarios();
};

const deleteSelcted = () => {
  if (selected.length > 0) {
    if (!confirm("Are you sure you want to delete the selected data?")) {
      return;
    }
    selected.forEach((value) => {
      document.getElementById(value).remove();
      data.splice(data.indexOf(value.toString()), 1);
    });
    selected.length = 0;
    selectedString();
    handleSelectScenarios();
  }
};

const selectedString = () => {
  document.getElementById(
    "totalSelected"
  ).innerHTML = `Total ${selected.length} selected row(s)`;
};
