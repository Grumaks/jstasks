// https://www.codewars.com/kata/5390bac347d09b7da40006f6

String.prototype.toJadenCase = function () {
    return this
        .split(" ")
        .map((item) => {
            const [first, ...rest] = item;
            return first.toUpperCase() + rest.join("");
        })
        .join(" ");
};