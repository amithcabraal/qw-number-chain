import React from 'react';
import { RotateCcw, Play, Lightbulb } from 'lucide-react';

interface GameStatusProps {
  currentNumber: number;
  targetNumber: number;
  movesLeft: number;
  score: number;
  bestScore: number;
  gameOver: boolean;
  victory: boolean;
  seed: string;
  onReset: () => void;
  onReplay: () => void;
  onShowSolution: () => void;
}

export const GameStatus: React.FC<GameStatusProps> = ({
  currentNumber,
  targetNumber,
  movesLeft,
  score,
  bestScore,
  gameOver,
  victory,
  seed,
  onReset,
  onReplay,
  onShowSolution,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-sm text-gray-600">Target</div>
          <div className="text-3xl font-bold text-indigo-900">{targetNumber}</div>
        </div>
        <div>
          <div className="text-sm text-gray-600">Current</div>
          <div className="text-3xl font-bold text-indigo-900">{currentNumber}</div>
        </div>
        <div>
          <div className="text-sm text-gray-600">Moves Left</div>
          <div className="text-3xl font-bold text-indigo-900">{movesLeft}</div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <div className="text-sm text-gray-600">Score</div>
          <div className="text-xl font-semibold text-indigo-700">{score}</div>
        </div>
        <div>
          <div className="text-sm text-gray-600">Best</div>
          <div className="text-xl font-semibold text-indigo-700">{bestScore}</div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onReplay}
            className="flex items-center gap-1 px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            title="Replay this game"
          >
            <Play size={18} />
          </button>
          <button
            onClick={onShowSolution}
            className="flex items-center gap-1 px-3 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
            title="Show solution"
          >
            <Lightbulb size={18} />
          </button>
          <button
            onClick={onReset}
            className="flex items-center gap-1 px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            title="New game"
          >
            <RotateCcw size={18} />
          </button>
        </div>
      </div>

      {(gameOver || victory) && (
        <div className={`p-4 rounded-lg text-center ${
          victory ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          <h3 className="text-xl font-bold mb-2">
            {victory ? 'Victory!' : 'Game Over'}
          </h3>
          <p>{victory 
            ? `Excellent! You reached ${targetNumber} in ${10 - movesLeft} moves!`
            : `Better luck next time! You got to ${currentNumber}`
          }</p>
          <p className="text-sm mt-2">Game seed: {seed}</p>
        </div>
      )}
    </div>
  );
};