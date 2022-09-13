import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text>Hello React Native!</Text>
        <Button name="send 1" />
        <Button name="Hello World!" />
        <StatusBar style="auto" />
      </View>
    </>
  );
}

interface ButtonProps {
  name: string;
}

function Button(props: ButtonProps){
  return(
    <TouchableOpacity>
      <Text>
        {props.name}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button:{
    borderBottomColor: '#000'
  }
});
