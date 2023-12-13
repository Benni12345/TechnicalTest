import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './components/home/Home';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PaperProvider} from 'react-native-paper';
import {Appbar} from 'react-native-paper';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={'#0E0E0E'}></StatusBar>
      <Appbar.Header style={{backgroundColor: '#0E0E0E'}}>
        <Appbar.Content
          title="Technical Test"
          titleStyle={{color: '#FFFFFF'}}
        />
      </Appbar.Header>
      <Home></Home>
    </SafeAreaProvider>
  );
}

export default App;
