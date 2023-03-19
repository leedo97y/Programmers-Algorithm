function solution(numbers) {
    let num = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 1; j < numbers.length; j++) {
            if (i !== j) {
                num.push(numbers[i] * numbers[j]);
            }
            
        }
    }
    let sortedArr = num.sort((x, y) => x - y);
    let lastOne = sortedArr.pop();
    
    return lastOne;
}