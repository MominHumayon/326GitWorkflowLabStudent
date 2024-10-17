

// TODO: Fix the square root function not displaying
function calculateSquareRoot(value) {
    if (value < 0)
        return "Cannot perform operation"
    return Math.sqrt(value);
    // return the square root of the value
}

// TODO: Implement square function
function calculateSquare(value) {
    // Hint: Use exponentiation
    // return the square root of the value
    return Math.pow(value, 2);

}

// TODO: FIX reciprocal function
function calculateReciprocal(value) {
    if (value == 0) throw new Error("Cannot divide by zero");
    else return 1 / value;
}

// TODO: Implement natural log function
function naturalLog(value) {
    return Math.log(value);
}

// TODO: Implement sine function
function sine(value) {
    // return the sine of the value
    //this takes in degrees and returns degrees. 
    return Math.sin(Math.PI * (value/180)).toFixed(4)
}

// TODO: Implement cosine function
function cosine(value) {
    // return the cosine of the value
    return Math.cos(value);
}

// TODO: Implement tangent function
function tangent(value) {
    // return the tangent of the value
}




module.exports = {
    calculateSquareRoot,
    calculateSquare,
    calculateReciprocal,
    sine,
    cosine
};
