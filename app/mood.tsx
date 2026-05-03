import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Slider from '@react-native-community/slider';
import { useRouter } from 'expo-router';

function getAnxietyLabel(value: number): string {
  if (value <= 2) return 'Very low';
  if (value <= 4) return 'Low';
  if (value <= 6) return 'Moderate';
  if (value <= 8) return 'High';
  return 'Very high';
}

export default function MoodScreen() {
  const router = useRouter();
  const [anxietyLevel, setAnxietyLevel] = useState<number>(5);

  return (
    <View className="flex-1 bg-slate-900 px-8 justify-center">
      <Text className="text-white text-2xl font-bold mb-2 text-center">
        How are you feeling today?
      </Text>
      <Text className="text-slate-400 text-base mb-10 text-center">
        Rate your anxiety level
      </Text>

      <Text className="text-orange-400 text-6xl font-bold text-center mb-1">
        {anxietyLevel}
      </Text>
      <Text className="text-slate-300 text-base text-center mb-8">
        {getAnxietyLabel(anxietyLevel)}
      </Text>

      <Slider
        minimumValue={1}
        maximumValue={10}
        step={1}
        value={anxietyLevel}
        onValueChange={(val) => setAnxietyLevel(val)}
        minimumTrackTintColor="#f97316"
        maximumTrackTintColor="#475569"
        thumbTintColor="#f97316"
        style={{ width: '100%' }}
      />
      <View className="flex-row justify-between mb-10">
        <Text className="text-slate-500 text-xs">1</Text>
        <Text className="text-slate-500 text-xs">10</Text>
      </View>

      <TouchableOpacity
        className="bg-orange-500 rounded-2xl py-4 items-center active:opacity-70"
        onPress={() => router.push('/')}
      >
        <Text className="text-white text-lg font-semibold">
          {"Let's go"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
