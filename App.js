import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}>Another Text</Text>
        <Text style={styles.dummyText}>Hello World</Text>
        <Button title='TapMe'/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText : {
    margin: 16, 
    borderWidth: 2, 
    borderBlockColor:'red', 
    padding: 16

  }
});
