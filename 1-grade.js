var result = 75;

if (result < 0) {
  console.log('Not Possible');
}
else if (result >= 0 && result < 40) {
  console.log('C grade');
}
else if (result >= 40 && result < 60) {
  console.log('B grade');
}
else if (result >= 60 && result < 70) {
  console.log('A- grade');
}
else if (result >= 70 && result < 80) {
  console.log('A grade');
}
else if (result >= 80 && result <= 100) {
  console.log('A+ grade');
}
else {
  console.log('Invalid Input');
} 