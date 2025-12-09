import React from 'react';
import { useTranslation } from 'react-i18next';

interface IntroScreenProps {
  onStart: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onStart }) => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-cyan-500 to-sky-600 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
          {t('intro.title')}
        </h1>
        
        <div className="text-white space-y-4 mb-8">
          <h2 className="text-2xl font-semibold text-blue-100">{t('intro.legendTitle')}</h2>
          
          <p className="text-lg leading-relaxed">
            {t('intro.legendText')}
          </p>
          
          <div className="bg-white/15 rounded-lg p-4 border border-white/30">
            <h3 className="text-xl font-semibold text-yellow-200 mb-2">{t('intro.howItWorksTitle')}</h3>
            <p className="mb-2">
              {t('intro.howItWorksIntro')} <span className="font-bold text-yellow-200">3</span>:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><span className="font-mono">A</span> {t('intro.howItWorksExample1')} <span className="font-mono text-yellow-100 font-bold">D</span></li>
              <li><span className="font-mono">B</span> {t('intro.howItWorksExample1')} <span className="font-mono text-yellow-100 font-bold">E</span></li>
              <li><span className="font-mono">HELLO</span> {t('intro.howItWorksExample1')} <span className="font-mono text-yellow-100 font-bold">KHOOR</span></li>
            </ul>
          </div>
          
          <div className="bg-white/15 rounded-lg p-4 border border-white/30">
            <h3 className="text-xl font-semibold text-green-200 mb-2">{t('intro.exampleTitle')}</h3>
            <p className="mb-2">
              {t('intro.howItWorksIntro')} <span className="font-bold text-green-200">13</span>:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><span className="font-mono">CAESAR</span> {t('intro.howItWorksExample1')} <span className="font-mono text-green-100 font-bold">PNRFNE</span></li>
              <li><span className="font-mono">SECRET</span> {t('intro.howItWorksExample1')} <span className="font-mono text-green-100 font-bold">FRPERG</span></li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed">
            {t('intro.challengeText')}
          </p>
          
          <div className="bg-red-500/30 rounded-lg p-4 border border-red-300/60">
            <p className="font-semibold text-red-100">{t('intro.rulesTitle')}</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2 text-white">
              <li>{t('intro.rule1Text1')} <span className="font-bold">{t('intro.rule1Bold')}</span> {t('intro.rule1Text2')}</li>
              <li>{t('intro.rule2Text1')} <span className="font-bold">{t('intro.rule2Bold')}</span> {t('intro.rule2Text2')}</li>
              <li>{t('intro.rule3')}</li>
              <li>{t('intro.rule4')}</li>
              <li>{t('intro.rule5Text1')} <span className="font-bold">{t('intro.rule5Bold')}</span> {t('intro.rule5Text2')}</li>
            </ul>
          </div>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all transform hover:scale-105 shadow-lg"
          aria-label={t('intro.startButtonAria')}
        >
          {t('intro.startButton')}
        </button>
      </div>
    </div>
  );
};

export default IntroScreen;
