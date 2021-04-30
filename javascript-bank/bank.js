/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && Number.isInteger(balance)) {
    var newAccount = new Account(this.nextAccountNumber, holder);

    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;

    return newAccount.number;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  var matchingAccount = null;

  for (var k = 0; k < this.accounts.length; k++) {
    if (this.accounts[k].number === number) {
      matchingAccount = this.accounts[k];
    }
  }
  return matchingAccount;
};

Bank.prototype.getTotalAssets = function () {

};
