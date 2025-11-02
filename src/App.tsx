import { useState, useEffect } from 'react';
import IntroScreen from './components/IntroScreen';
import GameScreen from './components/GameScreen';
import SuccessScreen from './components/SuccessScreen';
import FailureScreen from './components/FailureScreen';
import { caesarEncrypt } from './utils/caesar';

type GameState = 'intro' | 'playing' | 'success' | 'failure';

// Array of secret messages with varying difficulty
const SECRET_MESSAGES = [
  "The eagle has landed",
  "All roads lead to Rome",
  "Fortune favors the bold",
  "Veni vidi vici",
  "Carpe diem seize the day",
  "Knowledge is power",
  "The die is cast",
  "Beware the ides of March"
];

function App() {
  const [gameState, setGameState] = useState<GameState>('intro');
  const [originalMessage, setOriginalMessage] = useState('');
  const [encryptedMessage, setEncryptedMessage] = useState('');
  const [gameStats, setGameStats] = useState<{ timeElapsed: number; attemptsMade: number }>({ timeElapsed: 0, attemptsMade: 0 });

  // Initialize or reset game
  const initializeGame = () => {
    const randomMessage = SECRET_MESSAGES[Math.floor(Math.random() * SECRET_MESSAGES.length)];
    const randomShift = Math.floor(Math.random() * 25) + 1; // 1-25, avoiding 0
    
    setOriginalMessage(randomMessage);
    setEncryptedMessage(caesarEncrypt(randomMessage, randomShift));
  };

  // Initialize game on mount
  useEffect(() => {
    initializeGame();
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
