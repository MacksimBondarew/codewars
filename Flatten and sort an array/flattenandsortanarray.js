function flattenAndSort(array) {
    return array.flatMap(x => x).sort((a,b) => a - b);
}
flattenAndSort([[1, 3, 5], [100], [2, 4, 6]])