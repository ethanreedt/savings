module.exports.Account = class Account {
    constructor() {
        this._balance = 0;
    }

    deposit(amount) {
        if (amount < 0.01 || isNaN(amount)) {
            throw Error('Invalid deposit amount.');
        }
        this._balance += amount;
    }

    get balance() {
        return this._balance;
    }
};