function solution(progresses, speeds) {
    let answer = [];
    
    let left = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));
    let count = 1;
    let deploy_day = left[0];
    
    for (let i = 1; i < left.length; i++) {
        if (left[i] <= deploy_day) {
            count++;
        } else {
            answer.push(count);
            count = 1;
            deploy_day = left[i]
        }

    }
    answer.push(count);

    return answer;
}