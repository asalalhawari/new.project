
var selectedRow = null;

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["Car name"] = document.getElementById("Car name").value;
    formData["Country"] = document.getElementById("Country").value;
    formData["Make"] = document.getElementById("Make").value;
    formData["Model"] = document.getElementById("Model").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data["Car name"];
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Country;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Make;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Model;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("Car name").value = "";
    document.getElementById("Country").value = "";
    document.getElementById("Make").value = "";
    document.getElementById("Model").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Car name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Country").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Make").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Model").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData["Car name"];
    selectedRow.cells[1].innerHTML = formData.Country;
    selectedRow.cells[2].innerHTML = formData.Make;
    selectedRow.cells[3].innerHTML = formData.Model;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("Car name").value == "") {
        isValid = false;
        document.getElementById("carNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("carNameValidationError").classList.contains("hide"))
            document.getElementById("carNameValidationError").classList.add("hide");
    }
    return isValid;
}
