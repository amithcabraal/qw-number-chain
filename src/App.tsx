import React from 'react';
import { GameBoard } from './components/GameBoard';
import { Link2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-4">
      <div className="max-w-2xl mx-auto">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Link2 className="w-10 h-10 text-indigo-600" />
            <h1 className="text-4xl font-bold text-indigo-900">Number Chain</h1>
          </div>
          <p className="text-indigo-700">
            Chain operations to reach the target number in 10 moves or less!
          </p>
        </header>

        <GameBoard />

        <footer className="mt-8 text-center text-sm text-indigo-600">
          <p>Choose your operations wisely - every move counts!</p>
          <p className="mt-1">The closer you get to the target in fewer moves, the higher your score.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;