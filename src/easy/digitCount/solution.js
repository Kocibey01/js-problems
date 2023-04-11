function countsDigits(num) {
    const numStr = String(num); // It will convert the number to a string.
    const numDigits = numStr.length; // It will get the length of the string.
    return numDigits; // And it return the length as the number of digits.
}
// So, when we test the function
console.log(countsDigits (35)); // Output: 1
console.log(countsDigits (516)); // Output: 3 
console.log(countsDigits (123456789)); // Output:9