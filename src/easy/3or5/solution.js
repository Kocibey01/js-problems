function sumOfMultiples(number) {
    let sum = 0;
    for(let i=1; i<number; i++) {
        if(i % 3 === 0 || i % 5 === 0){
            sum += i;
        }
    }
    return sum;
}
sumOfMultiples(10); // returns 23 as 3 + 5 + 6 + 9 = 23
sumOfMultiples(15); // returns 45 as 3 + 5 + 6 + 9 + 10 + 12 = 45

console.log(sumOfMultiples(10));
console.log(sumOfMultiples(1000));