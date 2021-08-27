// https://www.codewars.com/kata/5277c8a221e209d3f6000b56

function validBraces(braces){
    const leftSymbols = ["[", "(", "{"];
    const rightSymbols = ["]", ")", "}"];
    
    const arr = [];
    
    for (let brace of braces) {
        const leftIndex = leftSymbols.indexOf(brace);
      
        if (leftIndex !== -1) {
            arr.push(brace);
        }
        else {
            const rightIndex = rightSymbols.indexOf(brace);
        
            if (arr.pop() !== leftSymbols[rightIndex]) {
            return false;
            }
        }
    }
    
    return arr.length === 0;
}