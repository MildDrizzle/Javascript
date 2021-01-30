let currentOperation = "add";
let currentUpdateId;
let dataArray = [];

const addData = () => {
  const data1 = document.getElementById("data1");
  const data2 = document.getElementById("data2");
  let present = false;
  for (let i = 0; i < dataArray.length; i++) {
    if (
      dataArray[i].firstName === data1.value &&
      dataArray[i].secondName === data2.value
    ) {
      present = true;
    }
  }
  if (present) {
    alert("Data Exists");
    data1.value = data2.value = "";
    return;
  }
  if (data1.value === "" || data2.value === "") {
    alert("Empty Values cannot be inserted");
    return;
  }
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
  dataArray.push({
    id: randomId,
    firstName: data1.value,
    secondName: data2.value,
  });
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
  if (!confirm("Are you You want to delete")) {
    return;
  }
  if (currentUpdateId === id) {
    document.getElementById("addBtn").innerHTML = "Add";
    document.getElementById("addBtn").classList = "btn-add";
    document.getElementById("addBtn").setAttribute("onclick", `addData()`);
    document.getElementById("data1").value = "";
    document.getElementById("data2").value = "";
  }
  document.getElementById(id).remove();
  dataArray.filter((data) => {
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

const renderData = () => {
  const data = [
    {
      "First Name": "Kishan",
      "Last Name": "Sheth",
    },
    {
      "First Name": "Romit",
      "Last Name": "Gandhi",
    },
    {
      "First Name": "Yash",
      "Last Name": "Mehta",
    },
    {
      "First Name": "Herin",
      "Last Name": "Zaveri",
    },
    {
      "First Name": "Chaitanya",
      "Last Name": "Rana",
    },
    {
      "First Name": "Savan",
      "Last Name": "Aghera",
    },
    {
      "First Name": "Smit",
      "Last Name": "Hapani",
    },
    {
      "First Name": "Smit",
      "Last Name": "Panchal",
    },
    {
      "First Name": "Rupesh",
      "Last Name": "Suryavanshi",
    },
    {
      "First Name": "Ravindra",
      "Last Name": "Singh",
    },
  ];
  let count = 1213;
  data.forEach((dt) => {
    const { "First Name": data1, "Last Name": data2 } = dt;
    let present = false;
    for (let i = 0; i <= dataArray.length; i++) {
      if (
        dataArray[i] &&
        dataArray[i].firstName === data1 &&
        dataArray[i].secondName === data2
      ) {
        present = true;
      }
    }
    if (!present) {
      const randomId = (Date.now() + count).toString();
      count += 1000;
      const row = document.getElementById("data").insertRow(-1);
      row.id = randomId;
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);
      const cell4 = row.insertCell(3);
      cell1.classList = cell2.classList = "data-field";
      cell1.innerHTML = data1;
      cell2.innerHTML = data2;
      cell3.innerHTML =
        cell3.innerHTML +
        `<button class="btn-success" onclick="update(${randomId})">Update</button>`;
      cell4.innerHTML =
        cell4.innerHTML +
        `<button class="btn-danger" onclick="deleteRow(${randomId})">Delete</button>`;
      dataArray.push({ id: randomId, firstName: data1, secondName: data2 });
    }
  });
};
