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

  const handleSuccess = () => {
    setGameState('success');
  };

  const handleFailure = () => {
    setGameState('failure');
  };

  const handlePlayAgain = () => {
    initializeGame();
    setGameState('playing');
  };

  const handleTryAgain = () => {
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
      
      {gameState === 'success' && <SuccessScreen onPlayAgain={handlePlayAgain} />}
      
      {gameState === 'failure' && (
        <FailureScreen 
          originalMessage={originalMessage}
          onTryAgain={handleTryAgain} 
        />
      )}
    </div>
  );
}

export default App;
