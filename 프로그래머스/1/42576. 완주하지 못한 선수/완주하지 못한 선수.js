function solution(participant, completion) {
    const map = new Map();
    
    for (let i = 0; i < participant.length; i++) {
        let p = participant[i];
        let c = completion[i];
        
        
        map.set(p, (map.get(p) || 0) + 1);
        map.set(c, (map.get(c) || 0) - 1);
        
    }
    
// 위를 아래와 같이 대체 가능   
//     for (let p of participant) {
//         map.set(p, (map.get(p) || 0) + 1);
//     }
    
    
//     for (let c of completion) {
//         map.set(c, map.get(c) - 1);
//     }
   
    for (let [key, value] of map) {
        if (value > 0) {
            return key;
        }
    }
        
}