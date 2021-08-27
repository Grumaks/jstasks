// https://www.codewars.com/kata/556deca17c58da83c00002db

function tribonacci(signature,n){
    if (n === 0) {
        return [];
    }
    
    if (n <= signature.length) {
        return signature.slice(0, n);
    }
    
    const result = [...signature];
    
    for (let i = signature.length; i < n; i++) {
        result.push(
            result[i - 3] +
            result[i - 2] +
            result[i - 1]
        );
    }
    
    return result;
    
}