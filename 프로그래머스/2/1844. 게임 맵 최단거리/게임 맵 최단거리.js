function solution(maps) {
    let answer = 0;
    const rows = maps.length;
    const cols = maps[0].length;
    
    // up, down, left, right
    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];
    
    const visited = Array.from({length: rows}, () => Array(cols).fill(false));
    
    // x, y, distance
    const queue = [[0, 0, 1]];
    visited[0][0] = true;
    
    let first = 0;
    
    while (first < queue.length) {
        const [x, y, distance] = queue[first++];
        
        if (x === rows - 1 && y === cols - 1) {
            return distance;
        }
        
        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            
            if (nx >= 0 && ny >= 0 && nx < rows && ny < cols && maps[nx][ny] === 1 && !visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny, distance + 1]);
            }
        }
    }
    
    return -1;
}