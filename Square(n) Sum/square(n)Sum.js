function squareSum(numbers){
    total = 0;
    for (const number of numbers) {
      total += Math.pow(number, 2)
    };
    return total;
    
  }
squareSum([1,2])