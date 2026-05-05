# Learn and Burn

A React Native app built with Expo.

## Running the app

Install dependencies:

```bash
npm install
```

Start the dev server (generates QR code):

```bash
npm start
```

Scan the QR code with the **Expo Go** app on your phone, or press:
- `i` to open in iOS Simulator
- `a` to open in Android Emulator
- `w` to open in the browser

## Project structure

```
app/
├── _layout.tsx          # Root Stack navigator
├── index.tsx            # Splash / welcome screen
└── (tabs)/
    ├── _layout.tsx      # Tab bar definition
    ├── home.tsx         # Home tab
    └── mood.tsx         # Mood tab
constants/
└── quotes.ts            # Motivational quotes
```

## Tech

- [Expo Router](https://docs.expo.dev/router/introduction) — file-based routing
- [NativeWind](https://www.nativewind.dev) — Tailwind CSS for React Native
