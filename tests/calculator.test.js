const assert = require('assert');
const calculator = require('../calculator');

// Test memory functions
describe('Calculator Memory Functions', function() {
    
});


// Test calculation functions
describe('Calculator Calculation Functions', function() {
    const res = calculator.calculateSquareRoot(4);
    it('should return 2', function() {
        assert.strictEqual(res, 2);
    });
});


describe('Calculator Calculation Functions', function() {
    describe('naturalLog', function() {
        it('should return 0 when the input is 1', function() {
            const res = naturalLog(1);
            assert.strictEqual(res, 0);
        });

        it('should return 1 when the input is Math.E', function() {
            const res = naturalLog(Math.E);
            assert.strictEqual(res, 1);
        });

        it('should return approximately 2.302 when the input is 10', function() {
            const res = naturalLog(10);
            assert.strictEqual(res.toFixed(3), '2.303');
        });

        it('should throw an error for non-positive numbers', function() {
            assert.throws(() => naturalLog(-1), Error);
        });
    });
})


// Add your tests here