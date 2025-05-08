export function plus(a: number, b: number) {
  console.log(`${a} + ${b} = ${a + b}`);
  return a + b;
}

export function minus(a: number, b: number) {
  console.log(`${a} - ${b} = ${a - b}`);
  return a - b;
}

function multiply(a: number, b: number) {
  console.log(`${a} * ${b} = ${a * b}`);
  return a * b;
}

export type Member = {
  name: string;
  age: number;
};

export default { plus, minus, multiply };
