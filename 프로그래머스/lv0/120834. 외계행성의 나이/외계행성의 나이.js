function solution(age) {
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    const splitedAge = age.toString().split("");
    const newArr = [];
    
    
    for (let i = 0; i < splitedAge.length; i++) {
        newArr.push(alpha[splitedAge[i]])
    }
    
    const ageRes = newArr.join("");
    
    // console.log(ageRes)
    
    return ageRes;
}