import React, { useState, useEffect, useCallback } from 'react';
import { normalizeText } from '../utils/caesar';

interface GameScreenProps {
  encryptedMessage: string;
  originalMessage: string;
  onSuccess: () => void;
  onFailure: () => void;
}

const MAX_ATTEMPTS = 5;
const GAME_DURATION_SECONDS = 240; // 4 minutes

const GameScreen: React.FC<GameScreenProps> = ({
  encryptedMessage,
  originalMessage,
  onSuccess,
  onFailure,
}) => {
  const [shift, setShift] = useState(0);
  const [guess, setGuess] = useState('');
  const [attemptsLeft, setAttemptsLeft] = useState(MAX_ATTEMPTS);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION_SECONDS);
  const [feedback, setFeedback] = useState('');
  const [isGameActive, setIsGameActive] = useState(true);

  // Timer countdown
  useEffect(() => {
    if (!isGameActive || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsGameActive(false);
          onFailure();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isGameActive, timeLeft, onFailure]);

  // Generate alphabet mapping for the current shift
  const generateAlphabetMapping = (shiftValue: number) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const shifted = alphabet.split('').map((_, i) => {
      return alphabet[(i + shiftValue) % 26];
    }).join('');
    return { original: alphabet, shifted };
  };

  const alphabetMapping = generateAlphabetMapping(shift);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isGameActive) return;

    const normalizedGuess = normalizeText(guess);
    const normalizedOriginal = normalizeText(originalMessage);

    if (normalizedGuess === normalizedOriginal) {
      setFeedback('🎉 Correct! You cracked the code!');
      setIsGameActive(false);
      setTimeout(() => onSuccess(), 1500);
    } else {
      const newAttempts = attemptsLeft - 1;
      setAttemptsLeft(newAttempts);
      
      if (newAttempts <= 0) {
        setFeedback('❌ No attempts left!');
        setIsGameActive(false);
        setTimeout(() => onFailure(), 1500);
      } else {
        setFeedback(`❌ Incorrect! ${newAttempts} attempt${newAttempts !== 1 ? 's' : ''} remaining.`);
      }
      setGuess('');
    }
  }, [guess, originalMessage, attemptsLeft, isGameActive, onSuccess, onFailure]);

  const getTimeColor = () => {
    if (timeLeft > 120) return 'text-green-400';
    if (timeLeft > 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getAttemptsColor = () => {
    if (attemptsLeft > 3) return 'text-green-400';
    if (attemptsLeft > 1) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
          🔐 Crack the Code
        </h1>

        {/* Status Bar */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white/5 rounded-lg p-4 border border-white/20">
            <p className="text-white/70 text-sm mb-1">Time Remaining</p>
            <p className={`text-2xl font-bold ${getTimeColor()}`}>
              ⏰ {formatTime(timeLeft)}
            </p>
          </div>
          <div className="bg-white/5 rounded-lg p-4 border border-white/20">
            <p className="text-white/70 text-sm mb-1">Attempts Left</p>
            <p className={`text-2xl font-bold ${getAttemptsColor()}`}>
              🎯 {attemptsLeft}/{MAX_ATTEMPTS}
            </p>
          </div>
        </div>

        {/* Encrypted Message */}
        <div className="bg-red-500/20 rounded-lg p-6 border border-red-400/50 mb-6">
          <h2 className="text-xl font-semibold text-red-200 mb-3">Encrypted Message:</h2>
          <p className="text-2xl font-mono text-white break-words">
            {encryptedMessage}
          </p>
        </div>

        {/* Shift Slider */}
        <div className="bg-white/5 rounded-lg p-6 border border-white/20 mb-6">
          <label htmlFor="shift-slider" className="block text-white text-lg font-semibold mb-3">
            🎚️ Caesar Shift: <span className="text-yellow-400">{shift}</span>
          </label>
          <input
            id="shift-slider"
            type="range"
            min="0"
            max="25"
            value={shift}
            onChange={(e) => setShift(Number(e.target.value))}
            disabled={!isGameActive}
            className="w-full h-3 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
            aria-label={`Shift value: ${shift}`}
          />
          <div className="flex justify-between text-white/60 text-sm mt-2">
            <span>0</span>
            <span>13</span>
            <span>25</span>
          </div>
        </div>

        {/* Alphabet Mapping Table */}
        <div className="bg-blue-500/20 rounded-lg p-6 border border-blue-400/50 mb-6">
          <h2 className="text-xl font-semibold text-blue-200 mb-3">
            Alphabet Mapping (Shift {shift}):
          </h2>
          <div className="space-y-2">
            <div className="flex flex-wrap gap-1 justify-center">
              {alphabetMapping.original.split('').map((char, i) => (
                <div key={`orig-${i}`} className="flex flex-col items-center">
                  <span className="text-xs text-white/70 font-mono w-6 text-center">{char}</span>
                </div>
              ))}
            </div>
            <div className="text-center text-yellow-400 text-xl">↓</div>
            <div className="flex flex-wrap gap-1 justify-center">
              {alphabetMapping.shifted.split('').map((char, i) => (
                <div key={`shift-${i}`} className="flex flex-col items-center">
                  <span className="text-sm text-yellow-400 font-mono font-bold w-6 text-center">{char}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-white/60 text-sm mt-4 text-center">
            Use this mapping to manually decrypt the message above
          </p>
        </div>

        {/* Guess Input */}
        <form onSubmit={handleSubmit} className="mb-6">
          <label htmlFor="guess-input" className="block text-white text-lg font-semibold mb-3">
            Enter your guess for the original message:
          </label>
          <input
            id="guess-input"
            type="text"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            disabled={!isGameActive}
            placeholder="Type the original plaintext here..."
            className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed mb-4"
            aria-label="Enter your guess for the original message"
          />
          <button
            type="submit"
            disabled={!isGameActive || !guess.trim()}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:from-gray-500 disabled:to-gray-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition-all transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-lg"
            aria-label="Submit your guess"
          >
            Submit Guess 🎯
          </button>
        </form>

        {/* Feedback */}
        {feedback && (
          <div className={`rounded-lg p-4 text-center text-lg font-semibold ${
            feedback.includes('Correct') 
              ? 'bg-green-500/20 border border-green-400/50 text-green-200'
              : 'bg-red-500/20 border border-red-400/50 text-red-200'
          }`} role="alert">
            {feedback}
          </div>
        )}
      </div>
    </div>
  );
};

export default GameScreen;
