// https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {
    var vowelsCount = 0;
    
    const vowels = ["a", "e", "i", "o", "u"];
    
    [...str].forEach((item) => {
        if (vowels.includes(item)) {
            vowelsCount++;
        }
    });
    
    return vowelsCount;
}