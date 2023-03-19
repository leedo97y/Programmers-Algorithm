function solution(n) {
    let sum = 0;
    const splitNum = n.toString().split("");
    for (let i = 0; i < splitNum.length; i++) {
        sum += Number(splitNum[i]);
    }
    // console.log(sum)
    return sum;
}