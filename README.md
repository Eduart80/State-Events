# State & Events - Character Counter App

- **Frontend**: React with TypeScript
- **Styling**: Bootstrap CSS + Custom CSS
- **Build Tool**: Vite
- **State Management**: React Hooks (useState, useEffect)

This App display a word count funtionalitie, User is able to enter a text or paragreph and this aplication is able to count how many characters and how many words are used in the text area.<br>
In addition it give an estimate how much time it require to read this text, this is presented in minute and seconds.

## Features

- **Character Count**: Real-time tracking of total characters including spaces
- **Word Count**: Dynamic word counting with proper filtering of empty strings
- **Reading Time Estimation**: Displays estimated reading time in `mm:ss` format
- **Responsive Design**: Clean, user-friendly interface with Bootstrap styling
- **Real-time Updates**: All statistics update instantly as you type

## Technology Stack


## How It Works

### Text Analysis Features

1. **Character Counting**: Counts every character including spaces and special characters
2. **Word Counting**: Splits text by spaces and filters out empty strings for accurate word count
3. **Reading Time Calculation**: 
   - Based on average reading speed of 200 words per minute
   - Formula: `totalMinutes = wordCount ÷ 200`
   - Displays in minutes:seconds format (e.g., "2:30")
   - Shows "0:00" for empty text
   - Handles sub-minute readings (e.g., "0:15" for 15 seconds)

### Component Architecture

- **App.tsx**: Main container managing all state and logic
- **TextInput**: Handles user input and text changes
- **StateDisplay**: Shows real-time statistics in a clean layout
- **CharacterCounter**: Additional counter component with min/max validation

## Learning Objectives

This project demonstrates proficiency in:
- React state management with hooks
- TypeScript interface definitions
- Real-time data processing
- Component composition and props
- Effect hooks for derived state calculations

## Reflection Questions

### How did you handle state updates when the text changed?
Used multiple `useEffect` hooks to handle different calculations:
- Character count updates immediately on text change
- Word count uses string trimming and filtering for accuracy
- Reading time calculates based on word count changes
- Each calculation is optimized with proper dependencies

### What considerations did you make when calculating reading time?
- Used industry-standard reading speed of 200 words per minute
- Implemented proper rounding for realistic time estimates
- Added special handling for empty text and sub-minute readings
- Format output in user-friendly mm:ss format with zero-padding

### How did you ensure the UI remained responsive during rapid text input?
- Utilized React's built-in state batching for performance
- Separated concerns with individual useEffect hooks
- Efficient string operations without unnecessary re-renders
- Optimized dependency arrays to prevent excessive calculations

### What challenges did you face when implementing the statistics calculations?
- **Type Safety**: Ensuring TypeScript interfaces matched component expectations
- **Edge Cases**: Handling empty strings, single words, and whitespace-only input
- **Format Consistency**: Converting time calculations to readable mm:ss format
- **State Synchronization**: Coordinating multiple state updates from single text input

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── CharacterCounter/
│   ├── StateDisplay/
│   └── TextInput/
├── types/
│   └── index.tsx
├── App.tsx
└── main.tsx
```
