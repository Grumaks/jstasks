// https://www.codewars.com/kata/513e08acc600c94f01000001

function rgb(r, g, b){
    return (`${convert(r)}${convert(g)}${convert(b)}`).toUpperCase();
}
  
function convert(value) {
    
    if (value < 0) {
        value = 0;
    }
    
    if (value > 255) {
        value = 255;
    }
    
    let result = (value > 255 ? 255 : value).toString(16);
    
    if (result.length === 1) {
        result = `0${result}`;
    }
    
    return result;
}