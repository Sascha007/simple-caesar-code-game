import React from 'react';

interface IntroScreenProps {
  onStart: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-cyan-500 to-sky-600 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
          🏛️ Caesar Quest
        </h1>
        
        <div className="text-white space-y-4 mb-8">
          <h2 className="text-2xl font-semibold text-blue-300">The Legend of Caesar's Secret</h2>
          
          <p className="text-lg leading-relaxed">
            In ancient Rome, Julius Caesar needed a way to send secret messages to his generals. 
            He invented a simple yet clever method: shifting each letter in the alphabet by a fixed number of positions.
          </p>
          
          <div className="bg-white/5 rounded-lg p-4 border border-white/20">
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">How it Works:</h3>
            <p className="mb-2">
              With a shift of <span className="font-bold text-yellow-400">3</span>:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><span className="font-mono">A</span> becomes <span className="font-mono text-yellow-400">D</span></li>
              <li><span className="font-mono">B</span> becomes <span className="font-mono text-yellow-400">E</span></li>
              <li><span className="font-mono">HELLO</span> becomes <span className="font-mono text-yellow-400">KHOOR</span></li>
            </ul>
          </div>
          
          <div className="bg-white/5 rounded-lg p-4 border border-white/20">
            <h3 className="text-xl font-semibold text-green-300 mb-2">Another Example:</h3>
            <p className="mb-2">
              With a shift of <span className="font-bold text-green-400">13</span>:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><span className="font-mono">CAESAR</span> becomes <span className="font-mono text-green-400">PNRFNE</span></li>
              <li><span className="font-mono">SECRET</span> becomes <span className="font-mono text-green-400">FRPERG</span></li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed">
            Now it's your turn! We've encrypted a secret message using Caesar's cipher. 
            Can you crack the code and reveal the original text?
          </p>
          
          <div className="bg-red-500/20 rounded-lg p-4 border border-red-400/50">
            <p className="font-semibold text-red-200">⚠️ Challenge Rules:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>You have <span className="font-bold">5 attempts</span> to guess correctly</li>
              <li>You have <span className="font-bold">4 minutes</span> to solve the riddle</li>
              <li>Use the slider to see the alphabet mapping for each shift</li>
              <li>Manually decrypt the message using the mapping table</li>
              <li>The answer will <span className="font-bold">NOT</span> be revealed if you fail!</li>
            </ul>
          </div>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all transform hover:scale-105 shadow-lg"
          aria-label="Start the Caesar cipher challenge"
        >
          Start the Challenge 🚀
        </button>
      </div>
    </div>
  );
};

export default IntroScreen;
