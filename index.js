function addExpense(){
    let amountInput = document.getElementById("amount");
    let descInput = document.getElementById("description");
    let categorySelect = document.getElementById("category");

    let amount = amountInput.value;
    let desc = descInput.value;
    let category = categorySelect.value;

    // console.log(amount,desc, category)
    if (!amount || !desc || !category) {
        alert("Please enter all the details!");
        return;
    };


    //creating basic object format to store data
        let expense = {
            amount,
            desc,
            category,
            date: new Date()
        };
    
    //either empty array or storing data in array (object in array)
        let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
        expenses.push(expense);
        localStorage.setItem("expenses", JSON.stringify(expenses));

    
    displayExpense();
}

function displayExpense() {

    let expenseList = document.getElementById("expense-list");
    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

    expenseList.innerHTML = "";
    // console.log(expenses.length)

    for(let i=0; i<expenses.length; i++){

        let li = document.createElement("li");

        li.innerHTML = expenses.amount +"      " + expenses.category + "      " + expenses.type;
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        //budle hit the UI
        expenseList.appendChild(li);

        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", () => deleteExpense(index));

        let editBtn = document.createElement("button");
        editBtn.innerHTML = "Edit";
        editBtn.classList.add("edit-btn");
        editBtn.addEventListener("click", () => editExpense(index));
    }
}
