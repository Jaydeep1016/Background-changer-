import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const App = () => {
  const [randomeColor, setRandomeColor] = useState('rgb(32,0,126)');
  const changeBG = () => {
    let color =
      'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')';
    setRandomeColor(color);
  };

  const resetBG = () => {
    let Color = 'rgb(0, 0, 0)';
    setRandomeColor(Color);
  };

  return (
    <>
      <StatusBar backgroundColor={randomeColor} />
      <View style={[styles.container, {backgroundColor: randomeColor}]}>
        <TouchableOpacity onPress={changeBG}>
          <Text style={styles.text}>TAP ME</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={resetBG}>
          <Text style={styles.RS}>RESET</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    backgroundColor: '#BB2CD9',
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: '#FFFFFF',
    borderRadius: 15,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  RS: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: '#000000',
    marginTop: 10,
    borderRadius: 15,
    color: '#FFFFFF',
  },
});
