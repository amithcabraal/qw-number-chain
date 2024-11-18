import React from 'react';
import { ChainStep } from '../types';

interface NumberChainProps {
  chain: ChainStep[];
  chainRef: React.RefObject<HTMLDivElement>;
}

export const NumberChain: React.FC<NumberChainProps> = ({ chain, chainRef }) => {
  return (
    <div 
      ref={chainRef}
      className="my-6 overflow-x-auto pb-2 scroll-smooth"
    >
      <div className="flex gap-2 min-w-min">
        {chain.map((step, index) => (
          <div
            key={index}
            className="animate-fadeIn flex-shrink-0 w-20 aspect-square"
          >
            <div className="h-full bg-gradient-to-br from-indigo-100 to-purple-50 rounded-lg p-2 flex flex-col items-center justify-center border border-indigo-200">
              <div className="text-xs text-indigo-600 mb-1">#{index + 1}</div>
              <div className="text-lg font-semibold text-indigo-900 mb-1">
                {step.result}
              </div>
              {step.operation && (
                <div className="text-xs text-indigo-500 text-center">
                  {step.operation} {step.appliedNumber}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};