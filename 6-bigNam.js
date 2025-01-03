const bigName = (names) => {
    let name = names[0];
    for (let i = 1; i < names.length; i++) {
        if (name.length < names[i].length) {
            name = names[i];
        }
    }
    return name;
}

var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
console.log(bigName(friends));