const assert = require('assert');
const calculator = require('../calculator');

// Test memory functions
describe('Calculator Memory Functions', function() {
    
});


// Test calculation functions
// describe('Calculator Calculation Functions', function() {
//     const res = calculator.calculateSquareRoot(4);
//     it('should return 2', function() {
//         assert.strictEqual(res, 2);
//     });
// });



// Add your tests here
describe('Cosine Function', function() {

    it('should return 1 for cos(0)', function() {
        const res = calculator.cosine(0);
        assert.strictEqual(res, 1);
    });



    it('should return -1 for cos(PI)', function() {
        const res = calculator.cosine(Math.PI);
        assert.strictEqual(res, -1);
    });

    it('should return 1 for cos(2 * PI)', function() {
        const res = calculator.cosine(2 * Math.PI);
        assert.strictEqual(res, 1);
    });

    it('should return -1 for cos(-PI)', function() {
        const res = calculator.cosine(-Math.PI);
        assert.strictEqual(res, -1);
    });

});