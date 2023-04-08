import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import AppLoading from 'expo-app-loading';
import useFonts from './src/hooks/useFonts';

import { useRoute } from './src/router';

export default function App() {
  const [IsReady, SetIsReady] = useState(false);
  const routing = useRoute(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }
  return (
    <NavigationContainer>
      {routing}
    </NavigationContainer>
  );
};
