function solution(numbers, target) {
    let count = 0;
    
    let dfs = (index, currSum) => {
        if (index === numbers.length) {
            if (currSum === target) {
                count++;
            }
            return;
        }
        
        dfs(index + 1, currSum + numbers[index]);
        dfs(index + 1, currSum - numbers[index]);
    }
    
    dfs(0, 0);
    return count;
}