function sumFactorial(arr){
    let total = 0;
    for (const iterator of arr) {
        let totalSum = 1;
        for (let i = 1; i <= iterator; i++) {
            totalSum = totalSum * i;
        }
        total += totalSum;   
    }
    return total;
}
sumFactorial([4,6]);