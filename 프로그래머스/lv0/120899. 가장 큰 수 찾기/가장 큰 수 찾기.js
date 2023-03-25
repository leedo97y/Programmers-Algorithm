function solution(array) {
    let answer = [];
    
    const maxNum = Math.max(...array);
    const index = array.indexOf(maxNum);
    
    answer = [maxNum, index];
    
    return answer;
}