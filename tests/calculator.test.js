const assert = require('assert');
const calculator = require('../calculator');

// // Test memory functions
// describe('Calculator Memory Functions', function() {
    
// });


// // Test calculation functions
// describe('Calculator Calculation Functions', function() {
//     const res = calculator.calculateSquareRoot(4);
//     it('should return 2', function() {
//         assert.strictEqual(res, 2);
//     });
// });


// Add your tests here

describe('Calculate the Sine values', () => {
    it('should be correct for 50', () => {
        const res = calculator.sine(45);
        assert.strictEqual(res, '0.7071')
    });
});