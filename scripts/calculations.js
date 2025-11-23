let budgetValue = 0;
let totalExpensesValue = 0;

let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

for (const expense of expenseEntries) {
  totalExpensesValue += expense[1];
}

let numExpenses = expenseEntries.length;
console.log(numExpenses);

function calculateAverageExpense() {
  return totalExpensesValue / numExpenses;
}

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

let balanceColor = "";

function updateBalanceColor() {
  if (calculateBalance() < 0) {
    balanceColor = "red";
  } else if (calculateBalance() < 0.25 * budgetValue) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

function calculateCategoryExpenses(category) {
  let totalCategoryValue = 0;
  for (const expense of expenseEntries) {
    if (expense[0] === category) {
      totalCategoryValue += expense[1];
    }
  }
  return totalCategoryValue;
}

let categories = [
  "groceries",
  "restaurants",
  "transport",
  "home",
  "subscriptions",
];
function calculateLargestCategory() {
  let categoriesTotals = [];
  let highestCategory = "";
  let highestTotal = 0;

  for (const category of categories) {
    let categoryTotal = calculateCategoryExpenses(category);
    categoriesTotals.push([category, categoryTotal]);

    if (categoryTotal > highestTotal) {
      highestTotal = categoryTotal;
      highestCategory = category;
    }
  }

  return highestCategory;
}

function addExpenseEntry(expenseArray) {
  expenseEntries.push(expenseArray);
  for (const expense of expenseEntries) {
    totalExpensesValue += expense[1];
  }
}
