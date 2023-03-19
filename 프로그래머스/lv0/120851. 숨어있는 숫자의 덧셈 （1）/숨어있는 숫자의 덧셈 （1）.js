function solution(my_string) {
    let num = [];
    const splitedStr = my_string.split("");
    
    
    for (let i = 0; i < splitedStr.length; i++) {
        if(Number(splitedStr[i])) {
            num.push(Number(splitedStr[i]))
        }
        
    }
    // console.log(num)
    const sum = num.reduce((acc, prev) => acc += prev)
    return sum;
}