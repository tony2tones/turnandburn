import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated';

type Epic = {
  id: string;
  title: string;
  burned:boolean;
}

const INITIAL_EPICS: Epic[] = [
  { id: '1', title: 'Gymed this week', burned: false },                                               
  { id: '2', title: 'Read 10 pages', burned: false },                                                    
  { id: '3', title: 'Algorithms', burned: false },                                               
  { id: '4', title: 'Meditate 5 mins', burned: false },                                                  
]

export default function HomeScreen() {
  const [epics, setEpics] = useState<Epic[]>(INITIAL_EPICS);

  function toggleBurn(id:string) {
    setEpics(prev => 
      prev.map(epic => 
        epic.id === id ? {...epic, burned: !epic.burned} : epic), 
      )
  }

  return (
    <View className="flex-1 bg-slate-900 items-center justify-center px-8">
      <Text className="text-white text-3xl font-bold mb-4 text-center">
        Welcome home
      </Text>
      <Text className="text-slate-400 text-base text-center">
        This is where your epics will live.
      </Text>
            <ScrollView className="flex-1 px-6" contentContainerStyle={{ gap: 12 }}>                    
              {epics.map(epic => (       
                <Pressable                                                                              
                  key={epic.id}                                                                         
                  onPress={() => toggleBurn(epic.id)}                                                   
                  style={({ pressed }) => ({ opacity: pressed ? 0.7 : 1 })}                             
                >                                                                 
                  <View className={`rounded-2xl p-5 flex-row items-center justify-between ${            
                    epic.burned ? 'bg-orange-500/20 border border-orange-500/40' : 'bg-slate-800'       
                  }`}>                                                                                  
                    <Text className={`text-base font-medium ${                                          
                      epic.burned ? 'text-orange-400 line-through' : 'text-white'                       
                    }`}>                                                                                
                      {epic.title}                                                                      
                    </Text>                                                                             
                                                                                                        
                    <Text className="text-xl">                                                          
                      {epic.burned ? '🔥' : '○'}                                                        
                    </Text>                                                                             
                  </View>                                                                               
                </Pressable>                                                                            
              ))}                                                                                       
            </ScrollView>                                                                               
       </View>
  );
}
