import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { router } from 'expo-router';
import { quotes } from '@/constants/quotes';

// Called once to pick a random quote — passing a function reference
// to useState so it only runs on the first render, not every re-render.
// This is called "lazy initialization".
function getRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

export default function SplashScreen() {
  // useState with lazy initialisation — the function runs once and
  // the result is stored. No setter needed; we just display it.
  const [quote] = useState(getRandomQuote);

  // useEffect with an empty [] dependency array runs once when the
  // component first appears on screen (called "mounting").
  useEffect(() => {
    const timer = setTimeout(() => {
      // router.replace removes the splash from the nav stack so the
      // user can't press back to get to it again.
      router.replace('/mood');
    }, 2500);

    // Cleanup: if the component unmounts before 2.5s, cancel the timer.
    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-slate-900 px-8">
      {/* Placeholder logo — a styled View acting as a circle */}
      <View className="w-24 h-24 rounded-full bg-orange-500 mb-8" />

      <Text className="text-white text-3xl font-bold mb-10 text-center">
        Learn and Burn
      </Text>

      <Text className="text-slate-300 text-lg italic text-center leading-7">
        {`"${quote.text}"`}
      </Text>
      <Text className="text-slate-400 text-sm mt-3 text-center">
        — {quote.author}
      </Text>
    </View>
  );
}
