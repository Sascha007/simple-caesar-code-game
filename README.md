# 🏛️ Caesar Quest

**Caesar Quest** — A modern, interactive Caesar cipher riddle game. A sleek web app where users crack a Caesar-encrypted message under pressure. Learn the principle through a short, playful story, then race the clock and limited tries to reveal the secret text. Win, and get a cheerful congrats screen!

![Intro Screen](https://github.com/user-attachments/assets/203af48f-e3c4-44d4-9f8c-715a1543ce67)

## 🎮 Features

- **📖 Interactive Tutorial**: Learn about Caesar cipher through an engaging story with clear examples
- **🎲 Random Challenges**: Each game presents a different encrypted message from a curated collection
- **🎚️ Live Decryption Preview**: Adjust the shift slider (0-25) and see the decrypted text in real-time
- **⏱️ Time Pressure**: 4-minute countdown timer to solve the puzzle
- **🎯 Limited Attempts**: 5 attempts to guess the correct plaintext
- **🎉 Celebratory Feedback**: Beautiful success screen with achievements when you crack the code
- **💡 Learning Support**: Failure screen reveals the answer with helpful tips for next time
- **📱 Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **♿ Accessible**: Built with ARIA labels and semantic HTML for screen readers

## 🚀 Quick Start

### Prerequisites

- Node.js 22.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Sascha007/simple-caesar-code-game.git
cd simple-caesar-code-game

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 How to Play

1. **Learn**: Read the intro screen to understand how Caesar cipher works
2. **Start**: Click "Start the Challenge" to begin
3. **Decode**: Use the slider to adjust the shift value and watch the preview
4. **Guess**: Enter what you think the original message was
5. **Win or Learn**: Either crack the code or learn from the reveal screen

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool with Rolldown
- **Tailwind CSS** - Styling
- **ESLint** - Code linting

## 📁 Project Structure

```
src/
├── components/
│   ├── IntroScreen.tsx      # Tutorial and game intro
│   ├── GameScreen.tsx        # Main game interface
│   ├── SuccessScreen.tsx     # Victory celebration
│   └── FailureScreen.tsx     # Try again screen
├── utils/
│   └── caesar.ts             # Caesar cipher logic
├── App.tsx                   # Main app component
└── main.tsx                  # Entry point
```

## 🔐 Caesar Cipher Implementation

The game uses a classic Caesar cipher implementation:

```typescript
// Encryption: Shift each letter by N positions
caesarEncrypt("HELLO", 3) // Returns "KHOOR"

// Decryption: Reverse the shift
caesarDecrypt("KHOOR", 3) // Returns "HELLO"
```

## 🌐 Deployment

The app is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to GitHub Pages (requires gh-pages package)
npm run deploy
```

## 🧪 Development

```bash
# Run linter
npm run lint

# Type check
npm run type-check

# Build for production
npm run build
```

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Inspired by the historical Caesar cipher used by Julius Caesar
- Built with modern web technologies for an engaging learning experience

---

**Enjoy cracking the code!** 🔓
