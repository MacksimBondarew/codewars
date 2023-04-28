function removeEveryOther(arr) {
    return arr.filter((arr, index) => index % 2 === 0);
}
removeEveryOther(["Hello", "Goodbye", "Hello Again"]);
