const expenseForm = document.getElementById("expense-form");
const expenseArea = document.querySelector(".expense-area");
const totalBalance = document.getElementById("total-balance");
const btnAdd = document.getElementById("btn-add");

let balance = 0;

expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();
});

btnAdd.addEventListener("click", () => {
    const expenseName = document.getElementById("expense-name").value;
    const expenseAmount = parseFloat(document.getElementById("expense-amount").value);

    if (expenseName && expenseAmount) {
        addExpense(expenseName, expenseAmount);
        updateBalance(expenseAmount);
        expenseForm.reset();
    }
});

function addExpense(name, amount) {
    expenseArea.style.display = "block";
    const expenseItem = document.createElement("div");
    expenseItem.classList.add("expense-item");

    expenseItem.innerHTML = `
        <span>${name} = </span>
        <span>${amount}</span>
        <button class="btn-remove">Remove</button>
    `;

    const removeButton = expenseItem.querySelector(".btn-remove");
    removeButton.classList.add("removebtn")
    removeButton.addEventListener("click", () => removeExpense(expenseItem, amount));
    expenseArea.appendChild(expenseItem);
 
}

function removeExpense(expenseItem, amount) {
    updateBalance(-amount);
    expenseItem.remove();
    if (expenseArea.children.length === 0) {
        expenseArea.style.display = "none";
}
}
function updateBalance(amount) {
    balance += amount;
    totalBalance.textContent = `TOTAL AMOUNT: ₹${balance}`; 
}
