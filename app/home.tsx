import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-slate-900 items-center justify-center px-8">
      <Text className="text-white text-3xl font-bold mb-4 text-center">
        Welcome home
      </Text>
      <Text className="text-slate-400 text-base text-center">
        This is where your epics will live.
      </Text>
    </View>
  );
}
