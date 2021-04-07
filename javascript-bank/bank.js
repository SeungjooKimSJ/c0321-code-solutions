/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (this.accounts.balance > 0) {
    var newAccount = new Account(this.nextAccountNumber, holder);

    this.accounts.push(newAccount);
    this.nextAccountNumber++;

    return Account;
  } else if (this.accounts.balance < 0) {
    return null;
  }
};
