const Account = require('../src/account').Account;
var account = null;

describe('creating account', () => {
    test('new account\'s balance is 0', () => {
        account = new Account();
        expect(account.balance).toBe(0);
    });
});

describe('depositing money', () => {

    beforeEach(() => {
        account = new Account();
    });

    describe('functionality tests', () => {
        test('depositing', () =>{
            expect(account.balance).toBe(0);
            account.deposit(10.56);
            expect(account.balance).toBe(10.56);
        });
        test('depositing multiple times', () => {
            account.deposit(5);
            account.deposit(15);
            expect(account.balance).toBe(20);
        });
    });

    describe('equivalence partitioning', () => {
        test('deposit $0.005', () => {
            expect(() => {
                account.deposit(0.005);
            }).toThrow('Invalid deposit amount.');
            expect(account.balance).toBe(0);
        });
        test('deposit $0.05', () => {
            account.deposit(0.05);
            expect(account.balance).toBe(0.05);
        });
        test('deposit $5', () => {
            account.deposit(5);
            expect(account.balance).toBe(5);
        });
    });

    describe('boundary value analysis', () => {
        test('deposit $0.00', () => {
            expect(() => {
                account.deposit(0);
            }).toThrow('Invalid deposit amount.');
        });
    });

    describe('dirty tests', () => {
        test('deposit a string', () => {
            expect(() => {
                account.deposit('aasdf342.0');
            }).toThrow('Invalid deposit amount.');
        });
        test('deposit a negative number', () => {
            expect(() => {
                account.deposit(-3.00);
            }).toThrow('Invalid deposit amount.');
        });
    });

});

// describe('test name', () => {
//     test('', () => {

//     });
//     describe('equivalence partitioning', () => {

//     });
//     describe('boundary value analysis', () => {

//     });
//     describe('dirty tests', () => {

//     });
// });
