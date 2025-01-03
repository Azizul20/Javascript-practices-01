const leapYear = (year) => {
    if (year % 4 === 0) {
        return 'is Leap Year';
    }
    else {
        return 'isn\'t Leap Year';
    }
}

let year = 2024;

console.log(year, leapYear(year));
