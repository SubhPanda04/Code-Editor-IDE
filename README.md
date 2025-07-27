# 🚀 Code Editor IDE

[![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-12.2.1-orange)](https://firebase.google.com/)
[![Monaco Editor](https://img.shields.io/badge/Monaco_Editor-4.7.0-green)](https://microsoft.github.io/monaco-editor/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A powerful, collaborative code editor IDE built with Next.js, featuring AI-powered assistance and seamless code execution across multiple programming languages.

## ✨ Features

### 🎯 Core Functionality
- **Advanced Code Editor**: Powered by Monaco Editor (same engine as VS Code) with syntax highlighting for 15+ languages
- **Multi-language Support**: JavaScript, TypeScript, Python, Java, C++, Go, Rust, PHP, Ruby, and more
- **File System Management**: Create, edit, and organize files and folders with Firebase backend
- **Code Execution**: Run code snippets directly in the browser using Judge0 API

### 🤖 AI-Powered Features
- **AI Assistant**: Integrated Google Gemini AI for code suggestions, debugging help, and explanations
- **Smart Code Completion**: Context-aware suggestions and auto-completion
- **Code Analysis**: AI-powered code review and optimization recommendations

### 🎨 User Experience
- **Modern UI**: Beautiful dark theme with Tailwind CSS styling
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Smooth Animations**: Framer Motion-powered transitions and interactions
- **Performance Optimized**: Lazy loading and efficient rendering for large files

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15.5.3
- **UI Library**: React 19.1.0
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Backend & Services
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **Code Editor**: Monaco Editor
- **AI Integration**: Google Generative AI (Gemini)
- **Code Execution**: Judge0 CE API

### Development Tools
- **Build Tool**: Next.js (with Webpack)
- **CSS Processing**: PostCSS with Autoprefixer
- **Code Quality**: ESLint (built-in)
- **Package Manager**: npm

## 📁 Project Structure

```
code-editor-ide/
├── .gitignore                    # Git ignore rules
├── firestore.rules              # Firebase Firestore security rules
├── LICENSE                      # MIT License file
├── README.md                    # Project documentation (this file)
└── next-frontend/               # Main Next.js application
    ├── .gitignore               # Frontend-specific ignore rules
    ├── .next/                   # Next.js build output (generated)
    ├── jsconfig.json            # JavaScript configuration
    ├── next.config.mjs          # Next.js configuration
    ├── package-lock.json        # NPM lock file
    ├── package.json             # NPM dependencies and scripts
    ├── postcss.config.mjs       # PostCSS configuration
    ├── tailwind.config.js       # Tailwind CSS configuration
    ├── app/                     # Next.js App Router directory
    │   ├── globals.css          # Global CSS styles
    │   ├── layout.js            # Root layout component
    │   ├── page.js              # Home page component
    │   ├── page.module.css      # Home page styles
    │   ├── providers.jsx        # React context providers
    │   ├── editor/              # Editor-related pages
    │   │   └── [folderId]/      # Dynamic folder routes
    │   │       ├── page.js      # Folder editor page
    │   │       └── [fileId]/    # Dynamic file routes
    │   │           └── page.js  # File editor page
    │   ├── home/                # Home section pages
    │   │   ├── auth/            # Authentication pages
    │   │   │   └── page.js      # Login/Signup page
    │   │   └── projects/        # Projects management
    │   │       └── page.js      # Projects dashboard
    │   └── src/                 # Source code directory
    │       ├── App.jsx          # Main App component
    │       ├── index.css        # Main CSS file
    │       ├── index.jsx        # Main entry point
    │       ├── animations/      # Animation utilities
    │       │   └── index.js     # Animation exports
    │       ├── components/      # React components
    │       │   ├── AIAssistant.jsx      # AI assistant component
    │       │   ├── Collaborators.jsx    # Collaboration component
    │       │   ├── Editor.jsx           # Main editor component
    │       │   ├── Header.jsx           # App header
    │       │   ├── IOPanel.jsx          # Input/Output panel
    │       │   ├── index.jsx            # Component exports
    │       │   ├── JoinRequest.jsx      # Join request component
    │       │   ├── NestedItem.jsx       # File tree item
    │       │   ├── ProtectedRoute.jsx   # Route protection
    │       │   ├── Sidebar.jsx          # File sidebar
    │       │   └── UserAuthInput.jsx    # Auth input component
    │       ├── config/          # Configuration files
    │       │   ├── editorConfig.jsx     # Editor configuration
    │       │   └── firebase.config.jsx  # Firebase configuration
    │       ├── container/        # Container components
    │       │   ├── EditorPage.jsx       # Editor page container
    │       │   ├── Home.jsx             # Home page container
    │       │   ├── index.jsx            # Container exports
    │       │   ├── Projects.jsx         # Projects container
    │       │   └── SignUp.jsx           # Signup container
    │       ├── redux/           # Redux state management
    │       │   ├── hooks.jsx            # Redux hooks
    │       │   ├── store.jsx            # Redux store
    │       │   ├── slices/              # Redux slices
    │       │   │   ├── codeExecutionSlice.jsx
    │       │   │   ├── editorSlice.jsx
    │       │   │   ├── fileSystemSlice.jsx
    │       │   │   ├── playgroundSlice.jsx
    │       │   │   └── uiSlice.jsx
    │       │   │   └── userSlice.jsx
    │       │   └── thunks/              # Redux thunks
    │       │       └── playgroundThunks.jsx
    │       ├── services/        # External service integrations
    │       │   └── codeExecutionService.jsx
    │       ├── utils/           # Utility functions
    │       │   ├── helpers.jsx          # Helper functions
    │       │   └── storage.jsx          # Storage utilities
    │       └── redux/           # Redux store (duplicate - should be cleaned up)
    │           └── store.jsx     # Redux store (duplicate)
    └── public/                  # Static assets
        ├── favicon.ico          # Favicon
        ├── file.svg             # File icon
        ├── globe.svg            # Globe icon
        ├── index.html           # HTML template
        ├── logo192.png          # Logo 192x192
        ├── logo512.png          # Logo 512x512
        ├── manifest.json        # PWA manifest
        ├── next.svg             # Next.js logo
        ├── robots.txt           # Robots.txt
        ├── vercel.svg           # Vercel logo
        └── window.svg           # Window icon
```

### Key Directories Explained

- **`app/`**: Next.js 13+ App Router with page components and API routes
- **`app/src/`**: Main source code with components, Redux store, and utilities
- **`app/src/components/`**: Reusable React components (Editor, AI Assistant, Sidebar, etc.)
- **`app/src/redux/`**: State management with slices for different features
- **`app/src/services/`**: External API integrations (Judge0, Firebase)
- **`public/`**: Static assets served by Next.js

## 🚀 Installation

### Prerequisites
- Node.js 18.x or higher
- npm or yarn
- Firebase project
- API keys for external services

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/code-editor-ide.git
   cd code-editor-ide
   ```

2. **Install dependencies**
   ```bash
   cd next-frontend
   npm install
   ```

3. **Environment Configuration**
   Create a `.env.local` file in the `next-frontend` directory:
   ```env
   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

   # AI Integration
   NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key

   # Code Execution
   NEXT_PUBLIC_JUDGE0_API_KEY=your_judge0_api_key
   ```

4. **Firebase Setup**
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Firestore Database
   - Enable Authentication with desired providers
   - Copy your Firebase config to the environment variables

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage

### Getting Started
1. **Sign Up/Login**: Create an account or sign in with your preferred method
2. **Create a Project**: Start a new coding project or open an existing one
3. **Start Coding**: Select a file and begin editing with full IDE features

### Key Features Usage

#### AI Assistant
- Toggle the AI assistant panel from the editor
- Ask questions about your code or request help
- Get code suggestions and explanations

#### Code Execution
- Write code in supported languages
- Use the execution panel to run your code
- View output and errors in real-time

#### File Management
- Create new files and folders from the sidebar
- Drag and drop to reorganize your project structure
- All changes are automatically saved to Firebase

## 🔧 Configuration

### Supported Languages
The editor supports syntax highlighting and execution for:
- JavaScript/TypeScript
- Python
- Java
- C/C++
- Go
- Rust
- PHP
- Ruby
- C#
- And more...

### Environment Variables
| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_FIREBASE_*` | Firebase configuration | Yes |
| `NEXT_PUBLIC_GEMINI_API_KEY` | Google Gemini API key | Yes |
| `NEXT_PUBLIC_JUDGE0_API_KEY` | Judge0 API key | Yes |


**Happy Coding! 🎉**
