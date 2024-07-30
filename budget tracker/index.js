
        function addTransaction() {
    // Get form values
    const type = document.getElementById('type').value;
    const name = document.getElementById('name').value;
    const amount = document.getElementById('amount').value;

    // Validate form inputs
    if (!type || !name || !amount) {
        alert('Please fill in all fields');
        return;
    }

    // Create new row and cells
    const table = document.getElementById('transactionsTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    const typeCell = newRow.insertCell(0);
    const nameCell = newRow.insertCell(1);
    const amountCell = newRow.insertCell(2);
    const optionsCell = newRow.insertCell(3);

    // Insert data into cells
    typeCell.textContent = type;
    nameCell.textContent = name;
    amountCell.textContent = amount;
    optionsCell.innerHTML = '<a onclick="deleteTransaction(this)">Delete</a>';

    // Clear form inputs
    document.getElementById('type').value = '';
    document.getElementById('name').value = '';
    document.getElementById('amount').value = '';
}

function deleteTransaction(element) {
    // Get the row to be deleted and remove it
    const row = element.parentElement.parentElement;
    row.remove();
}



    