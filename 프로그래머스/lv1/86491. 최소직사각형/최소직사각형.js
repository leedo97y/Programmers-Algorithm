function solution(sizes) {
    let a = [];
    let b = [];
    
    for (let i = 0; i < sizes.length; i++) {
        let arr = sizes[i];
        for (let j = 0; j < arr.length; j++) {
            let first = arr[0];
            let second = arr[1];
            if (arr[0] < arr[1]) {
                arr[0] = second;
                arr[1] = first;
            }
            
        }
        // console.log(arr[0])
        a.push(arr[0]);
        b.push(arr[1]);
        
    }
    a.sort((x, y) => y - x);
    b.sort((x, y) => y - x);
    // console.log(a.shift() * b.shift())
    
    return a.shift() * b.shift();
}