const oddEven = (num) => {
    if (num % 2 === 0) {
        return 'Even';
    }
    else {
        return 'Odd';
    }
}

let number = 7;
console.log(oddEven(number));
