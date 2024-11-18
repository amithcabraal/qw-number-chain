import { useState, useEffect, useRef } from 'react';
import seedrandom from 'seedrandom';
import { Operation, ChainStep } from '../types';
import { generateNumbers, calculateScore, findSolution } from '../utils/gameUtils';

export const useGame = () => {
  const [seed, setSeed] = useState<string>('');
  const [targetNumber, setTargetNumber] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [availableNumbers, setAvailableNumbers] = useState<number[]>([]);
  const [selectedOperation, setSelectedOperation] = useState<Operation | null>(null);
  const [chain, setChain] = useState<ChainStep[]>([]);
  const [movesLeft, setMovesLeft] = useState(10);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [victory, setVictory] = useState(false);
  const [solution, setSolution] = useState<ChainStep[]>([]);
  const chainRef = useRef<HTMLDivElement>(null);

  const generateSeed = () => {
    return Math.random().toString(36).substring(2, 15);
  };

  const initializeGame = (customSeed?: string) => {
    const gameSeed = customSeed || generateSeed();
    setSeed(gameSeed);
    
    // Create a new random number generator with the seed
    const rng = seedrandom(gameSeed);
    const target = Math.floor(rng() * 900) + 100;
    const start = Math.floor(rng() * 90) + 10;
    
    setTargetNumber(target);
    setCurrentNumber(start);
    setAvailableNumbers(generateNumbers(5, 1, 20, rng));
    setSelectedOperation(null);
    setChain([{ result: start }]);
    setMovesLeft(10);
    setScore(0);
    setGameOver(false);
    setVictory(false);
    setSolution([]);

    // Calculate solution for this game
    const sol = findSolution(start, target);
    setSolution(sol);
  };

  const replayGame = () => {
    initializeGame(seed);
  };

  const showSolution = () => {
    setGameOver(true);
    setChain(solution);
  };

  const applyNumber = (num: number) => {
    if (!selectedOperation || movesLeft <= 0) return;

    let result: number;
    switch (selectedOperation) {
      case '+': result = currentNumber + num; break;
      case '-': result = currentNumber - num; break;
      case '*': result = currentNumber * num; break;
      case '/': result = Math.floor(currentNumber / num); break;
      default: return;
    }

    const newChain: ChainStep[] = [
      ...chain,
      {
        previousNumber: currentNumber,
        operation: selectedOperation,
        appliedNumber: num,
        result,
      },
    ];

    setChain(newChain);
    setCurrentNumber(result);
    setSelectedOperation(null);
    setAvailableNumbers(generateNumbers(5, 1, 20));
    setMovesLeft(movesLeft - 1);

    if (result === targetNumber) {
      const finalScore = calculateScore(10 - movesLeft, Math.abs(targetNumber - result));
      setScore(finalScore);
      if (finalScore > bestScore) {
        setBestScore(finalScore);
        localStorage.setItem('bestScore', finalScore.toString());
      }
      setVictory(true);
    } else if (movesLeft <= 1) {
      const finalScore = calculateScore(10 - movesLeft, Math.abs(targetNumber - result));
      setScore(finalScore);
      if (finalScore > bestScore) {
        setBestScore(finalScore);
        localStorage.setItem('bestScore', finalScore.toString());
      }
      setGameOver(true);
    }
  };

  // Auto-scroll effect
  useEffect(() => {
    if (chainRef.current) {
      chainRef.current.scrollLeft = chainRef.current.scrollWidth;
    }
  }, [chain]);

  useEffect(() => {
    const savedBestScore = localStorage.getItem('bestScore');
    if (savedBestScore) {
      setBestScore(parseInt(savedBestScore));
    }
    initializeGame();
  }, []);

  return {
    targetNumber,
    currentNumber,
    availableNumbers,
    selectedOperation,
    chain,
    movesLeft,
    score,
    bestScore,
    gameOver,
    victory,
    seed,
    chainRef,
    setSelectedOperation,
    applyNumber,
    resetGame: initializeGame,
    replayGame,
    showSolution,
  };
};