export function plus(a, b) {
    console.log(`${a} + ${b} = ${a + b}`);
    return a + b;
}
export function minus(a, b) {
    console.log(`${a} - ${b} = ${a - b}`);
    return a - b;
}
function multiply(a, b) {
    console.log(`${a} * ${b} = ${a * b}`);
    return a * b;
}
export default { plus, minus, multiply };
