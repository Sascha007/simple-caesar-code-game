import React from 'react';

interface FailureScreenProps {
  onTryAgain: () => void;
}

const FailureScreen: React.FC<FailureScreenProps> = ({ onTryAgain }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-900 to-amber-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12 text-center">
        <div className="mb-6">
          <div className="text-8xl mb-4">😔</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Time's Up!
          </h1>
          <p className="text-2xl text-red-200 mb-6">
            The code remains uncracked... for now! 🔒
          </p>
        </div>

        <div className="bg-white/5 rounded-lg p-6 border border-white/20 mb-6">
          <p className="text-lg text-white leading-relaxed mb-4">
            Don't worry! Even the greatest cryptographers needed practice. 
            Every attempt makes you sharper! 💪
          </p>
          <div className="bg-red-500/20 rounded-lg p-4 border border-red-400/50">
            <p className="text-red-200 font-semibold text-xl">
              The secret remains hidden! 🔐
            </p>
            <p className="text-white/80 mt-2">
              A true cryptographer never reveals the answer too easily.
            </p>
          </div>
        </div>

        <div className="bg-yellow-500/20 rounded-lg p-4 border border-yellow-400/50 mb-8">
          <p className="text-yellow-200 font-semibold">💡 Pro Tips:</p>
          <ul className="text-white mt-2 text-left space-y-2">
            <li>• Use the alphabet mapping table to manually decrypt each letter</li>
            <li>• Look for common short words like "THE", "AND", "IS"</li>
            <li>• Try different shift values systematically</li>
            <li>• Write down your decryption attempts on paper</li>
          </ul>
        </div>

        <button
          onClick={onTryAgain}
          className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all transform hover:scale-105 shadow-lg"
          aria-label="Try again"
        >
          Try Again 🔄
        </button>
      </div>
    </div>
  );
};

export default FailureScreen;
