function addExpense() {
    let amountInput = document.getElementById("amount");
    let descInfo = document.getElementById("description");
    let categoryList = document.getElementById("category");

    let amount = amountInput.value;
    let desc = descInfo.value;
    let category = categoryList.value;

    // if no feild is fill then return this alert
    if (!amount || !desc || !category) {
        alert("Please enter all the details!");
        return;
    }
    //creating basic object format to store data
    let expense = {
        amount,
        desc,
        category,
        date: new Date()
    };
    amountInput.value = "";
    desc.value = "";
    categorySelect.selectedIndex = 0;

    //either empty array or storing data in array (object in array)
    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    expenses.push(expense);
    localStorage.setItem("expenses", JSON.stringify(expenses));

   
    displayExpenses();
}

//display list of expenses
function displayExpenses() {

    let expenseList = document.getElementById("expense-list");
    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

    expenseList.innerHTML = "";

    expenses.forEach((expense, index) => {

        let li = document.createElement("li");

        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", () => deleteExpense(index));

        let editBtn = document.createElement("button");
        editBtn.innerHTML = "Edit";
        editBtn.classList.add("edit-btn");
        editBtn.addEventListener("click", () => editExpense(index));

        //making bundle of items required to show
        li.innerHTML = expense.amount +"      " + expense.category + "      " + expense.desc;
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        //budle hit the UI
        expenseList.appendChild(li);
    });
}
function deleteExpense(index) {
    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

    expenses.splice(index, 1);

    localStorage.setItem("expenses", JSON.stringify(expenses));

    displayExpenses();
}

function editExpense(index) {
    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    const expense = expenses[index];

    const amountInput = document.getElementById("amount");
    const desc = document.getElementById("description");
    const categorySelect = document.getElementById("category");

    amountInput.value = expense.amount;
    desc.value = expense.desc;
    categorySelect.value = expense.category;

    expenses.splice(index, 1);

    localStorage.setItem("expenses", JSON.stringify(expenses));

    displayExpenses();
}

displayExpenses();