function solution(s){
    let answer = 0;
    let len = s.length;
    let last = s.length - 1;
    
    if (s[0] === ")" || len === 1) {
        return false;
    }
    
    for (let i = 0; i < len; i++) {
        s[i] === "(" ? answer += 1 : answer += -1;
        
        if (answer < 0) return false;
    }
    
    
    
    
    
    return answer === 0 ?  true : false;
    
        
    
}