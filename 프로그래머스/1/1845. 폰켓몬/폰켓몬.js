function solution(nums) {
    const answer = 0;
    const arr = [...new Set(nums)];
    
    if (arr.length <= nums.length / 2) {
        return arr.length;
    }
    return nums.length / 2
}