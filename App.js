import React, { useState } from 'react';
import { StyleSheet, Platform, StatusBar, View, Text } from 'react-native';
// import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-view';
import { colors } from './src/utils';
import { Focus, Timer, FocusHistory } from './src/features';
export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([]);

  return (
    // <SafeAreaProvider>
      <View style={styles.container}>
        {!currentSubject ? (
          <>
            <Focus addSubject={setCurrentSubject} />
            <FocusHistory history={history} />
          </>
        ) : (
          <Timer
            focusSubject={currentSubject}
            onTimerEnd={(subject) => {
              setHistory([...history, subject]);
            }}
            clearSubject={() => setCurrentSubject(null)}
          />
        )}
      </View>
    // </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
});
