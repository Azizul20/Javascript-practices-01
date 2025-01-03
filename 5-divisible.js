let multiply3 = [];
let multiply5 = [];
for (let i = 3; i <= 50; i = i + 3) {

    if (i % 3 == 0) {
        multiply3.push(i);
    }
}
for (let i = 5; i <= 50; i = i + 5) {

    if (i % 5 == 0) {
        multiply5.push(i);
    }
}
console.log('Multiples of 3:', multiply3);
console.log('Multiples of 5:', multiply5);
