import React from 'react';
import { useTranslation } from 'react-i18next';

interface SuccessScreenProps {
  onPlayAgain: () => void;
  gameStats: { timeElapsed: number; attemptsMade: number; hintsUsed: number };
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({ onPlayAgain, gameStats }) => {
  const { t } = useTranslation();
  
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-600 via-blue-700 to-indigo-800 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12 text-center">
        <div className="mb-6">
          <div className="text-8xl mb-4 animate-bounce">{t('success.emoji')}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('success.title')}
          </h1>
          <p className="text-2xl text-green-100 mb-6">
            {t('success.subtitle')}
          </p>
        </div>

        <div className="bg-white/15 rounded-lg p-6 border border-white/30 mb-8">
          <p className="text-xl text-white leading-relaxed font-medium">
            {t('success.message')}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-blue-500/30 rounded-lg p-6 border border-blue-300/60">
            <div className="text-4xl mb-2">⏱️</div>
            <p className="text-blue-100 text-sm mb-1 font-medium">{t('success.timeTaken')}</p>
            <p className="text-2xl font-bold text-white">{formatTime(gameStats.timeElapsed)}</p>
          </div>
          <div className="bg-green-500/30 rounded-lg p-6 border border-green-300/60">
            <div className="text-4xl mb-2">🎯</div>
            <p className="text-green-100 text-sm mb-1 font-medium">{t('success.attemptsUsed')}</p>
            <p className="text-2xl font-bold text-white">{gameStats.attemptsMade}</p>
          </div>
          <div className="bg-purple-500/30 rounded-lg p-6 border border-purple-300/60">
            <div className="text-4xl mb-2">💡</div>
            <p className="text-purple-100 text-sm mb-1 font-medium">{t('success.hintsUsed')}</p>
            <p className="text-2xl font-bold text-white">{gameStats.hintsUsed}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-yellow-500/30 rounded-lg p-4 border border-yellow-300/60">
            <div className="text-4xl mb-2">🧠</div>
            <p className="text-yellow-100 font-semibold">{t('success.achievement1')}</p>
          </div>
          <div className="bg-blue-500/30 rounded-lg p-4 border border-blue-300/60">
            <div className="text-4xl mb-2">⚡</div>
            <p className="text-blue-100 font-semibold">{t('success.achievement2')}</p>
          </div>
          <div className="bg-cyan-500/30 rounded-lg p-4 border border-cyan-300/60">
            <div className="text-4xl mb-2">🎯</div>
            <p className="text-cyan-100 font-semibold">{t('success.achievement3')}</p>
          </div>
        </div>

        <button
          onClick={onPlayAgain}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all transform hover:scale-105 shadow-lg"
          aria-label={t('success.playAgainButtonAria')}
        >
          {t('success.playAgainButton')}
        </button>
      </div>
    </div>
  );
};

export default SuccessScreen;
