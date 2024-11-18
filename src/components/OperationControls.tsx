import React from 'react';
import { Operation } from '../types';

interface OperationControlsProps {
  selectedOperation: Operation | null;
  onSelectOperation: (operation: Operation) => void;
}

export const OperationControls: React.FC<OperationControlsProps> = ({
  selectedOperation,
  onSelectOperation,
}) => {
  const operations: Operation[] = ['+', '-', '*', '/'];

  return (
    <div className="mb-6">
      <h3 className="text-center text-gray-700 mb-2">Choose Operation</h3>
      <div className="flex justify-center gap-2">
        {operations.map((op) => (
          <button
            key={op}
            onClick={() => onSelectOperation(op)}
            className={`w-12 h-12 text-xl font-bold rounded-lg transition-all ${
              selectedOperation === op
                ? 'bg-indigo-600 text-white shadow-lg scale-110'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {op}
          </button>
        ))}
      </div>
    </div>
  );
};