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


    describe('tangent()', function() {
        it('should return 0 for tan(0)', function() {
            const res = calculator.tangent(0);
            assert.strictEqual(res, 0);
        });

        it('should return 1 for tan(45)', function() {
            const res = calculator.tangent(45);
            assert.strictEqual(res, 1);
        });

        it('should return Infinity for tan(90)', function() {
            const res = calculator.tangent(90);
            assert.strictEqual(res, Infinity);
        });

        it('should return a large negative number for tan(270)', function() {
            const res = calculator.tangent(270);
            assert(res < 0);
        });
    });
});


// Add your tests here