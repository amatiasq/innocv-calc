const decimal = '.';
const equals = '=';

const operators = {
  add: '+',
  subtract: '-',
  multiply: '*',
  divide: '/',
};

const numbers = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  zero: 0,
};

export const commands = {
  ...operators,
  ...numbers,
  decimal,
  equals,
};

export type Command = keyof typeof commands;
type OperatorFunction = (a: number, b: number) => number;
type OperatorList = keyof typeof operators;
type NumberList = keyof typeof numbers;

const isNumber = (value: Command): value is NumberList => value in numbers;
const isOperator = (value: Command): value is OperatorList =>
  value in operators;

const operations: Record<OperatorList, OperatorFunction> = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

export function operateCalculation(commands: Command[]) {
  let operator: OperatorFunction | null = null;
  let buffer = 0;
  let typing = '';

  for (const command of commands) {
    if (isNumber(command)) {
      typing += numbers[command];
      continue;
    }

    if (command === 'decimal') {
      if (typing.includes(decimal)) {
        throw new Error("Can't have two decimal points");
      }

      typing += decimal;
      continue;
    }

    // special case for negative numbers
    if (command === 'subtract' && typing === '') {
      typing = `-${typing}`;
      continue;
    }

    if (isOperator(command)) {
      // this will be false if we just pressed equals
      if (!buffer || typing) {
        resolveTypedValue();
      }

      operator = operations[command];
      continue;
    }

    if (command === 'equals') {
      resolveTypedValue();
      operator = null;
      continue;
    }
  }

  return typing || `${buffer}`;

  function resolveTypedValue() {
    const typed = typing ? validateTextAsNumber(typing) : 0;
    buffer = operator ? operator(buffer, typed) : typed;
    typing = '';
  }
}

function validateTextAsNumber(value: string) {
  const result = parseFloat(value);

  if (isNaN(result)) {
    throw new Error(`Invalid number: ${value}`);
  }

  return result;
}
