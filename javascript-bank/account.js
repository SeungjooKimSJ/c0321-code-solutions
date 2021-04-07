/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount > 0) {
    var newTransaction = new Transaction('deposit', amount);

    this.transactions.push(newTransaction);

    return true;
  } else {
    return false;
  }
}

Account.prototype.withdraw = function (amount) {
  if (amount > 0) {
    var newTransaction = new Transaction('withdraw', amount);

    this.transactions.push(newTransaction);

    return true;
  } else {
    return false;
  }
}

Account.prototype.getBalance = function (amount) {
  var totalAmount = 0;

  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      totalAmount += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdraw') {
      totalAmount -= this.transactions[i].amount;
    }
  }
  return totalAmount;
}
