const assert = require('assert');
const calculator = require('../calculator');

// // Test memory functions
// describe('Calculator Memory Functions', function() {
    
// });



describe('naturalLog', function() {
    it('should return 0 when the input is 1', function() {
        const res = naturalLog(1);
        assert.strictEqual(res, 0);
    });

    it('should return 1 when the input is Math.E', function() {
        const res = naturalLog(Math.E);
        assert.strictEqual(res, 1);
    });

    it('should return approximately 2.303 when the input is 10', function() {
        const res = naturalLog(10);
        assert.strictEqual(res.toFixed(3), '2.303');
    });

    it('should throw an error when the input is less than 0', function() {
        assert.throws(() => naturalLog(-1), /Input must be greater than 0/);
    });

    it('should throw an error when the input is 0', function() {
        assert.throws(() => naturalLog(0), /Input must be greater than 0/);
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
describe('Calculator Reciprocal Function', function() {
    const x = calculator.calculateReciprocal(5);
    it('should return 0.2', function() {
        assert.strictEqual(x, 0.2)
    });
    const y = calculator.calculateReciprocal(2);
    it('should return 0.5', function() {
        assert.strictEqual(y, 0.5)
    });
});

// Add your tests here
describe('Cosine Function', function() {

    it('should return 1 for cos(0)', function() {
        const res = calculator.cosine(0);
        assert.strictEqual(res, 1);
    });

    it("should return 3", function () {
        assert.strictEqual(calculator.calculateSquareRoot(9),3);
    });
});

// Add your tests here


describe('Calculate the Sine values', () => {
    it('should be correct for 50', () => {
        const res = calculator.sine(45);
        assert.strictEqual(res, '0.7071')
    });

describe('Calculator square Functions', function() {
    const res = calculator.calculateSquare(4);
    it('should return 16', function() {
        assert.strictEqual(res, 16);
    });
});
 
