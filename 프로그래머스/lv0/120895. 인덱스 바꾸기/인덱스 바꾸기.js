function solution(my_string, num1, num2) {
    const sArr = my_string.split("");
    const splitedArr = my_string.split("");
    
    sArr[num1] = splitedArr[num2]
    sArr[num2] = splitedArr[num1]
    
    const newStr = sArr.join("");
   
    return newStr;
}