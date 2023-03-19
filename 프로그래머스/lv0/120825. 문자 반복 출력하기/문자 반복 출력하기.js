function solution(my_string, n) {
    const splitedStr = my_string.split("");
    const repeatStr = [];
    // console.log(splitedStr)
    for (let i = 0; i < splitedStr.length; i++) {
        repeatStr.push(splitedStr[i].repeat(n));
    }
    let joinStr = repeatStr.join("");
    
    return joinStr;
}