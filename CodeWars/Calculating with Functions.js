// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

function _op(operation, value) {
    if (operation && typeof operation === "function") {
        return operation(value);
    }
    else {
        return value;
    }  
}
  
function zero(operation) {
    return _op(operation, 0);
}

function one(operation) {
    return _op(operation, 1);
}

function two(operation) {
    return _op(operation, 2);
}

function three(operation) {
    return _op(operation, 3);
}

function four(operation) {
    return _op(operation, 4);
}
  
function five(operation) {  
    return _op(operation, 5);
}
  
function six(operation) {
    return _op(operation, 6);
}
  
function seven(operation) {
    return _op(operation, 7);
}
  
function eight(operation) {
    return _op(operation, 8);
}

function nine(operation) {
    return _op(operation, 9);
}
  
//-----------------------------------------
function _plus(right, left) {
    return left + right;
}
function plus(right) {
    return _plus.bind(null, right);
}
  
function _minus(right, left) {
    return left - right;
}
function minus(right) {
    return _minus.bind(null, right);
}
  
function _times(right, left) {
    return left * right;
}
function times(right) {
    return _times.bind(null, right);
}
  
function _dividedBy(right, left) {
    return Math.floor(left / right);
}
function dividedBy(right) {
    return _dividedBy.bind(null, right);
}