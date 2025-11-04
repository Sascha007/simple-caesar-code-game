import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import IntroScreen from './components/IntroScreen';
import GameScreen from './components/GameScreen';
import SuccessScreen from './components/SuccessScreen';
import FailureScreen from './components/FailureScreen';
import LanguageSwitcher from './components/LanguageSwitcher';
import { caesarEncrypt } from './utils/caesar';

type GameState = 'intro' | 'playing' | 'success' | 'failure';

function App() {
  const { t } = useTranslation();
  const [gameState, setGameState] = useState<GameState>('intro');
  const [originalMessage, setOriginalMessage] = useState('');
  const [encryptedMessage, setEncryptedMessage] = useState('');
  const [gameStats, setGameStats] = useState<{ timeElapsed: number; attemptsMade: number }>({ timeElapsed: 0, attemptsMade: 0 });

  // Initialize or reset game
  const initializeGame = () => {
    const messageKeys = [
      'messages.message1',
      'messages.message2',
      'messages.message3',
      'messages.message4',
      'messages.message5',
      'messages.message6',
      'messages.message7',
      'messages.message8',
      'messages.message9',
      'messages.message10',
      'messages.message11',
      'messages.message12',
      'messages.message13',
      'messages.message14',
      'messages.message15',
      'messages.message16',
      'messages.message17',
      'messages.message18',
      'messages.message19',
      'messages.message20',
      'messages.message21',
      'messages.message22',
      'messages.message23',
      'messages.message24',
      'messages.message25',
      'messages.message26',
      'messages.message27',
      'messages.message28',
    ];
    const randomKey = messageKeys[Math.floor(Math.random() * messageKeys.length)];
    const randomMessage = t(randomKey);
    const randomShift = Math.floor(Math.random() * 25) + 1; // 1-25, avoiding 0
    
    setOriginalMessage(randomMessage);
    setEncryptedMessage(caesarEncrypt(randomMessage, randomShift));
  };

  // Initialize game on mount
  useEffect(() => {
    initializeGame();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleStart = () => {
    initializeGame();
    setGameState('playing');
  };

  const handleSuccess = (stats: { timeElapsed: number; attemptsMade: number }) => {
    setGameStats(stats);
    setGameState('success');
  };

  const handleFailure = () => {
    setGameState('failure');
  };

  const handleRestart = () => {
    initializeGame();
    setGameState('playing');
  };

  return (
    <div className="min-h-screen">
      <LanguageSwitcher />
      {gameState === 'intro' && <IntroScreen onStart={handleStart} />}
      
      {gameState === 'playing' && (
        <GameScreen
          encryptedMessage={encryptedMessage}
          originalMessage={originalMessage}
          onSuccess={handleSuccess}
          onFailure={handleFailure}
        />
      )}
      
      {gameState === 'success' && <SuccessScreen onPlayAgain={handleRestart} gameStats={gameStats} />}
      
      {gameState === 'failure' && (
        <FailureScreen 
          onTryAgain={handleRestart} 
        />
      )}
    </div>
  );
}

export default App;
