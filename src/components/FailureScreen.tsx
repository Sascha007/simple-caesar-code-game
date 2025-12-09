import React from 'react';
import { useTranslation } from 'react-i18next';

interface FailureScreenProps {
  onTryAgain: () => void;
}

const FailureScreen: React.FC<FailureScreenProps> = ({ onTryAgain }) => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-900 to-amber-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12 text-center">
        <div className="mb-6">
          <div className="text-8xl mb-4">{t('failure.emoji')}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('failure.title')}
          </h1>
          <p className="text-2xl text-red-100 mb-6">
            {t('failure.subtitle')}
          </p>
        </div>

        <div className="bg-white/15 rounded-lg p-6 border border-white/30 mb-6">
          <p className="text-lg text-white leading-relaxed mb-4 font-medium">
            {t('failure.message')}
          </p>
          <div className="bg-red-500/30 rounded-lg p-4 border border-red-300/60">
            <p className="text-red-100 font-semibold text-xl">
              {t('failure.secretHidden')}
            </p>
            <p className="text-white/90 mt-2">
              {t('failure.secretMessage')}
            </p>
          </div>
        </div>

        <div className="bg-yellow-500/30 rounded-lg p-4 border border-yellow-300/60 mb-8">
          <p className="text-yellow-100 font-semibold">{t('failure.tipsTitle')}</p>
          <ul className="text-white mt-2 text-left space-y-2">
            <li>{t('failure.tip1')}</li>
            <li>{t('failure.tip2')}</li>
            <li>{t('failure.tip3')}</li>
            <li>{t('failure.tip4')}</li>
          </ul>
        </div>

        <button
          onClick={onTryAgain}
          className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all transform hover:scale-105 shadow-lg"
          aria-label={t('failure.tryAgainButtonAria')}
        >
          {t('failure.tryAgainButton')}
        </button>
      </div>
    </div>
  );
};

export default FailureScreen;
