import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { router } from 'expo-router';
import { quotes } from '@/constants/quotes';

function getRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

export default function SplashScreen() {
  const [quote] = useState(getRandomQuote);

  return (
    <View className="flex-1 bg-slate-900 px-8 py-12 items-center justify-between">

      {/* Top: logo + title + quote */}
      <View className="flex-1 items-center justify-center gap-4">
        <View className="w-24 h-24 rounded-full bg-orange-500" />

        <Text className="text-white text-3xl font-bold text-center">
          Learn and Burn
        </Text>

        <Text className="text-slate-300 text-lg italic text-center leading-7">
          {`"${quote.text}"`}
        </Text>
        <Text className="text-slate-400 text-sm text-center">
          — {quote.author}
        </Text>
      </View>

      {/* Bottom: action buttons */}
      <View className="w-full flex-col gap-3">
        <Pressable
          className="bg-orange-500 rounded-xl py-4 items-center active:opacity-80"
          onPress={() => router.replace('/mood')}
        >
          <Text className="text-white text-base font-semibold">How are you feeling today?</Text>
        </Pressable>

        <Pressable
          className="border border-slate-600 rounded-xl py-4 items-center active:opacity-80"
          onPress={() => router.replace('/home')}
        >
          <Text className="text-slate-300 text-base font-semibold">Start burning!</Text>
        </Pressable>
      </View>

    </View>
  );
}
