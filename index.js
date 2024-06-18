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
    
}