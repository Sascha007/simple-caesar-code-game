import React from 'react';

interface SuccessScreenProps {
  onPlayAgain: () => void;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({ onPlayAgain }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12 text-center">
        <div className="mb-6">
          <div className="text-8xl mb-4 animate-bounce">🎉</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Congratulations!
          </h1>
          <p className="text-2xl text-green-200 mb-6">
            You've cracked Caesar's code! 🏆
          </p>
        </div>

        <div className="bg-white/5 rounded-lg p-6 border border-white/20 mb-8">
          <p className="text-xl text-white leading-relaxed">
            You've successfully decoded the secret message and proven yourself worthy 
            of joining the ranks of ancient cryptographers! Caesar himself would be impressed 
            by your code-breaking skills. 🏛️✨
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-yellow-500/20 rounded-lg p-4 border border-yellow-400/50">
            <div className="text-4xl mb-2">🧠</div>
            <p className="text-yellow-200 font-semibold">Master Decoder</p>
          </div>
          <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-400/50">
            <div className="text-4xl mb-2">⚡</div>
            <p className="text-blue-200 font-semibold">Quick Thinker</p>
          </div>
          <div className="bg-purple-500/20 rounded-lg p-4 border border-purple-400/50">
            <div className="text-4xl mb-2">🎯</div>
            <p className="text-purple-200 font-semibold">Sharp Mind</p>
          </div>
        </div>

        <button
          onClick={onPlayAgain}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all transform hover:scale-105 shadow-lg"
          aria-label="Play again"
        >
          Play Again 🔄
        </button>
      </div>
    </div>
  );
};

export default SuccessScreen;
