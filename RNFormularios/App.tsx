import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import BasicTextInput from './components/BasicTextInput';
//import InputTypes from './components/InputTypes';
//import AdvancedInput from './components/AdvancedInput';
import MultilineInput from './components/MultilineInput';
import Horizontal from './components/Horizontal';
import SimpleFlatList from './components/SimpleFlatList';
import Vertical from './components/Vertical';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <BasicTextInput /> */}
      {/* <InputTypes /> */}
      {/* <AdvancedInput /> */}
      {/* <MultilineInput /> */}
      {/* <Horizontal /> */}
      {/* <SimpleFlatList /> */}
      <Vertical />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
