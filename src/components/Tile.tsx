import React from 'react';
import { isPrime } from '../utils/primeUtils';

interface TileProps {
  value: number;
}

export const Tile: React.FC<TileProps> = ({ value }) => {
  if (value === 0) {
    return <div className="bg-slate-200 h-16 sm:h-20 rounded-lg" />;
  }

  const isPrimeNumber = isPrime(value);
  const baseClasses = "h-16 sm:h-20 flex items-center justify-center rounded-lg text-2xl font-bold transition-all duration-200";
  
  const colorClasses = isPrimeNumber
    ? "bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg transform hover:scale-105"
    : "bg-gradient-to-br from-slate-400 to-slate-500 text-white";

  return (
    <div className={`${baseClasses} ${colorClasses}`}>
      {value}
    </div>
  );
};