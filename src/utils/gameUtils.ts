import seedrandom from 'seedrandom';
import { Operation, ChainStep } from '../types';

export const generateNumbers = (
  count: number, 
  min: number, 
  max: number, 
  rng: seedrandom.PRNG | (() => number) = Math.random
): number[] => {
  const numbers: number[] = [];
  while (numbers.length < count) {
    const num = Math.floor(rng() * (max - min + 1)) + min;
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }
  return numbers;
};

export const calculateScore = (moves: number, difference: number): number => {
  const accuracyScore = Math.max(1000 - difference * 10, 0);
  const moveMultiplier = Math.max(1, (11 - moves) * 0.5);
  return Math.floor(accuracyScore * moveMultiplier);
};

const applyOperation = (a: number, b: number, op: Operation): number => {
  switch (op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? Math.floor(a / b) : Infinity;
    default: return 0;
  }
};

export const findSolution = (start: number, target: number): ChainStep[] => {
  const operations: Operation[] = ['+', '-', '*', '/'];
  const numbers = [2, 3, 5, 7, 11]; // Common useful numbers
  const solution: ChainStep[] = [{ result: start }];
  let current = start;

  while (current !== target && solution.length < 10) {
    let bestDiff = Math.abs(target - current);
    let bestOp: Operation | null = null;
    let bestNum = 0;
    let bestResult = current;

    for (const op of operations) {
      for (const num of numbers) {
        const result = applyOperation(current, num, op);
        const diff = Math.abs(target - result);
        
        if (diff < bestDiff) {
          bestDiff = diff;
          bestOp = op;
          bestNum = num;
          bestResult = result;
        }
      }
    }

    if (!bestOp) break;

    solution.push({
      previousNumber: current,
      operation: bestOp,
      appliedNumber: bestNum,
      result: bestResult
    });

    current = bestResult;
  }

  return solution;
};