import React from 'react';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, RotateCcw } from 'lucide-react';
import { Direction } from '../hooks/useGame';

interface ControlsProps {
  onMove: (direction: Direction) => void;
  onReset: () => void;
  score: number;
  bestScore: number;
}

export const Controls: React.FC<ControlsProps> = ({ onMove, onReset, score, bestScore }) => {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold text-emerald-800">Score: {Math.floor(score)}</h2>
          <p className="text-sm text-gray-600">Best: {Math.floor(bestScore)}</p>
        </div>
        <button
          onClick={onReset}
          className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
        >
          <RotateCcw size={18} /> Reset
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2 max-w-[200px] mx-auto mt-4">
        <div />
        <button
          onClick={() => onMove('up')}
          className="p-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
        >
          <ArrowUp className="mx-auto" />
        </button>
        <div />
        <button
          onClick={() => onMove('left')}
          className="p-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
        >
          <ArrowLeft className="mx-auto" />
        </button>
        <div className="p-2 bg-slate-200 rounded-lg" />
        <button
          onClick={() => onMove('right')}
          className="p-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
        >
          <ArrowRight className="mx-auto" />
        </button>
        <div />
        <button
          onClick={() => onMove('down')}
          className="p-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
        >
          <ArrowDown className="mx-auto" />
        </button>
        <div />
      </div>
    </>
  );
};