function solution(hp) {
    let g = Math.floor(hp / 5);
    let gLeft = hp % 5;
    let s = Math.floor(gLeft / 3);
    let sLeft = gLeft % 3;
    
    return g + s + sLeft;
    
    
    
    
}