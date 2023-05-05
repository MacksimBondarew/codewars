function findMultiples(integer, limit) {
    array = [];
    for (let index = integer; index <= limit; index++) {
        if (index % integer === 0) {
            array.push(index);
        }
    }
    return array;
}
findMultiples(5, 25);
findMultiples(1, 2);
