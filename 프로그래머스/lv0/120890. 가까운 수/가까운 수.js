function solution(array, n) {
    const arrays = array.sort((x, y) => x - y);
    let arr = [];
    
    for (let i = 0; i < arrays.length; i++) {
        // 배열의 각 값에서 n 값을 뺴서 num 변수에 저장함.
        const num = arrays[i] - n;
        // arr 배열에 이를 절대값으로 저장함.
        arr.push(Math.abs(num));
        
    }
    // arr 배열의 최솟값, 즉, 최소차..?를 구함.
    const minVal = Math.min(...arr);
    // 그 최소차의 index를 구함.
    const indexMin = arr.indexOf(minVal);
    
    // 주어진 array 배열에서 가장 작은 차..인 값의 인덱스에 해당하는 값 리턴해줌.
    return arrays[indexMin];
   
}