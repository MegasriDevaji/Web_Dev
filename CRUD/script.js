let data = [];
let editId = null;

function addData() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill all fields");
        return;
    }

    const obj  = {
        id: Date.now(),
        name: name,
        email: email
    };

    data.push(obj);
    displayData();
    clearFields();
}

function displayData() {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

    data.forEach((item, index) => {
        tableBody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>
                    <button class="edit" onclick="editData(${item.id})">Edit</button>
                    <button class="delete" onclick="deleteData(${item.id})">Delete</button>
                </td>
            </tr>
        `;
    });
}

function editData(id) {
    const item = data.find(d => d.id === id);
    document.getElementById("name").value = item.name;
    document.getElementById("email").value = item.email;

    editId = id;
    document.getElementById("updateBtn").disabled = false;
}

function updateData() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const item = data.find(d => d.id === editId);
    item.name = name;
    item.email = email;

    displayData();
    clearFields();

    editId = null;
    document.getElementById("updateBtn").disabled = true;
}

function deleteData(id) {
    data = data.filter(d => d.id !== id);
    displayData();
}

function clearFields() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
}
   