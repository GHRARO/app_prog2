import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Fala Rapeize</Text>
      <Text>Lhes Apresento</Text>
      <Text>GH CALVO</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00AA99',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
