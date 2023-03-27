function solution(my_string) {
    let text = "";
    
    const lowerCase =  "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    for (let i = 0; i < my_string.length; i++) {
        if (lowerCase.includes(my_string[i])) {
            text += my_string[i].toUpperCase();
        } else if (upperCase.includes(my_string[i])) {
            text += my_string[i].toLowerCase();
        }
    }
    
    return text;
    
    
    
    // return text;
    
}