function solution(my_string) {
    let numberArr = [];
    let answer = [];
    
    
    for (let i = 0; i < my_string.length; i++) {
        let checkNum = /^[0-9]+$/;
        if (checkNum.test(my_string[i])) {
            numberArr.push(Number(my_string[i]));
        }
        
        
        
    }
    
    const result = numberArr.sort()
    
    return result;
}