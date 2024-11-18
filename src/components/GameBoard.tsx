import React from 'react';
import { useGame } from '../hooks/useGame';
import { NumberChain } from './NumberChain';
import { OperationControls } from './OperationControls';
import { NumberOptions } from './NumberOptions';
import { GameStatus } from './GameStatus';

export const GameBoard = () => {
  const {
    currentNumber,
    targetNumber,
    availableNumbers,
    chain,
    movesLeft,
    score,
    bestScore,
    selectedOperation,
    gameOver,
    victory,
    setSelectedOperation,
    applyNumber,
    resetGame,
  } = useGame();

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-6">
      <GameStatus
        currentNumber={currentNumber}
        targetNumber={targetNumber}
        movesLeft={movesLeft}
        score={score}
        bestScore={bestScore}
        onReset={resetGame}
        gameOver={gameOver}
        victory={victory}
      />

      <NumberChain chain={chain} />

      {!gameOver && !victory && (
        <>
          <OperationControls
            selectedOperation={selectedOperation}
            onSelectOperation={setSelectedOperation}
          />

          <NumberOptions
            numbers={availableNumbers}
            onSelectNumber={applyNumber}
            disabled={!selectedOperation}
          />
        </>
      )}
    </div>
  );
};