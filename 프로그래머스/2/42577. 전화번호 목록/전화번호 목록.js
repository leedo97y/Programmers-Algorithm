function solution(phone_book) { 
    const arr = [];
    phone_book.sort();
    
    for (let i = 0; i < phone_book.length; i++) {   
        let a = String(phone_book[i]);
        let b = String(phone_book[i + 1]);
        if (b.startsWith(a)) {
            arr.push(true);
        } 
        arr.push(false);
    }
    console.log(arr)
    
    if (arr.indexOf(true) > -1) {
        return false;
    }
    return true;
    
}