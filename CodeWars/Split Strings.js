// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

function solution(str){
    const result = [];
    
    for (let i = 0; i < str.length; i = i + 2) {
        const substr = str.substring(i, i + 2);
      
        result.push(substr.length === 2 ? substr : `${substr}_`);
    }
    
    return result;
}