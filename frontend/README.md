# Citrea Agent Kit - Demo Frontend

A beautiful, interactive React frontend that showcases the capabilities of the Citrea Agent Kit. This demo application provides an intuitive way for developers and users to understand and test the AI-powered blockchain interaction features.

## 🚀 Features

- **Interactive Test Runner**: Run and monitor tests in real-time
- **Beautiful UI**: Modern, dark-themed interface with smooth animations
- **Test Categories**: Organized test suites covering all major features
- **Real-time Results**: Live test execution with detailed output
- **Code Visualization**: Syntax-highlighted code examples
- **Responsive Design**: Works perfectly on desktop and mobile

## 🎯 Test Categories

### 1. Balance Operations 💰
- CITREA balance checking
- ERC-20 token balance queries
- Multi-wallet balance management

### 2. Transfer Operations 🚀
- Natural language token transfers
- CITREA token transfers
- ERC-20 token transfers

### 3. Memory System 🧠
- Session-based conversation memory
- Memory isolation across sessions
- Preloaded conversation history

### 4. Security Tests 🛡️
- Private key protection
- Jailbreak attempt prevention
- Social engineering protection

### 5. Personality Tests 🎭
- Custom agent personalities
- Friendly vs formal responses
- Personality customization

### 6. Advanced Features ⚡
- Custom memory stores
- Multi-model support
- Advanced configurations

## 🛠️ Technology Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **React Syntax Highlighter** for code display

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## 🎨 Design System

### Colors
- **Primary**: Citrea blue gradient (`#0ea5e9` to `#0284c7`)
- **Background**: Dark theme (`#0f172a` to `#1e293b`)
- **Success**: Green (`#10b981`)
- **Error**: Red (`#ef4444`)
- **Warning**: Yellow (`#f59e0b`)

### Components
- **Cards**: Glass morphism with subtle borders
- **Buttons**: Gradient primary, outlined secondary
- **Animations**: Smooth transitions and hover effects
- **Typography**: Inter for UI, JetBrains Mono for code

## 🔧 Customization

### Adding New Test Suites
1. Update `src/data/testSuites.ts`
2. Add new test cases with proper typing
3. The UI will automatically render new tests

### Modifying Styles
- Edit `src/index.css` for global styles
- Update `tailwind.config.js` for theme customization
- Modify component styles directly in TSX files

### Adding Features
- Create new components in `src/components/`
- Update types in `src/types.ts`
- Extend the main App component

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full feature set with side-by-side layouts
- **Tablet**: Adapted layouts with touch-friendly interactions
- **Mobile**: Stacked layouts with optimized spacing

## 🎯 Demo Features

### Interactive Test Execution
- Click "Run Tests" to execute individual test suites
- Use "Run All Tests" to execute the entire test suite
- Real-time progress tracking and status updates
- Detailed test results with execution times

### Code Visualization
- Toggle code display to see test inputs/outputs
- Syntax highlighting for TypeScript and JSON
- Collapsible sections for better organization

### Visual Feedback
- Animated progress bars
- Status indicators (pending, running, success, error)
- Smooth transitions and hover effects
- Loading states and error handling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License - see the main project LICENSE file for details.

## 🔗 Links

- [Citrea Agent Kit Documentation](../readme.md)
- [GitHub Repository](https://github.com/your-org/citrea-agent-kit)
- [Live Demo](https://your-demo-url.com)

---

Built with ❤️ for the Citrea ecosystem
