import React from 'react';

interface NumberOptionsProps {
  numbers: number[];
  onSelectNumber: (num: number) => void;
  disabled: boolean;
}

export const NumberOptions: React.FC<NumberOptionsProps> = ({
  numbers,
  onSelectNumber,
  disabled,
}) => {
  return (
    <div className="mt-6">
      <h3 className="text-center text-gray-700 mb-2">Available Numbers</h3>
      <div className="grid grid-cols-5 gap-2">
        {numbers.map((num, index) => (
          <button
            key={index}
            onClick={() => onSelectNumber(num)}
            disabled={disabled}
            className={`
              p-4 text-lg font-bold rounded-lg transition-all
              ${
                disabled
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow hover:shadow-lg hover:scale-105'
              }
            `}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};