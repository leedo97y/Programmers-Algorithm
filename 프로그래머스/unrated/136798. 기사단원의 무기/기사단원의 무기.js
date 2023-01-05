function solution(number, limit, power) {
    // 약수 개수 세서 배열에 넣기
    // 약수 개수 중에 limit 이상이면 power를 더해주고, 아니면 그냥 더해주기
    
    let arr = [];
    //let a = [];
    
    for (let i = 1; i <= number; i++) {
        let a = [];
        for (let j = 1; j <= i / 2; j++) {
            if (i % j === 0) {
                a.push(j);
                
            }
        }
        // console.log(a, ", 갯수 :", a.length)
        arr.push(a.length + 1)
    }
    // console.log(arr)
    
    let res = arr.reduce((sum, item) => {
        item > limit ? sum += power : sum += item;
        return sum;
    })
    
    
    return res;
}