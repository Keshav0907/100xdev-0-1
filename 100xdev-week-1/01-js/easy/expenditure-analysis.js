/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

// function calculateTotalSpentByCategory(transactions) {
//   return [];
// }
function calculateTotalSpentByCategory(transactions) {
  let ans = [];
  let mp = new Map();

  for(let i = 0; i < transactions.length; i++) {
    let category = transactions[i].category;
    let price = transactions[i].price;
    if(mp.has(category)) {
      mp.set(category, mp.get(category) + price);
    } else {
      mp.set(category, price);
    }
  }

  for(let [key, value] of mp) {
    ans.push({category: key, totalSpent: value});
  }
  
  return ans;
}

module.exports = calculateTotalSpentByCategory;
