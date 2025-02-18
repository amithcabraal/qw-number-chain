export const isPrime = (num: number): boolean => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
};

export const getNextPrime = (num: number): number => {
  let next = num + 1;
  while (!isPrime(next)) {
    next++;
  }
  return next;
};

export const calculatePoints = (prime: number): number => {
  return Math.pow(prime, 1.5);
};