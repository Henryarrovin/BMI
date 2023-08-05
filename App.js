import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyTextField from './components/MyTextField ';
import AppBar from './components/AppBar ';
import Button from './components/Button ';


export default function App() {

  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiResult, setBmiResult] = useState('');
  const [bmiStatus, setBmiStatus] = useState('');

  const handleHeightChange = (inputText) => {
    setHeight(inputText);
  };

  const handleWeightChange = (inputText) => {
    setWeight(inputText);
  };

  const handleButtonPress = () => {
    const heightInMeters = parseFloat(height) / 100; 
    const weightInKg = parseFloat(weight);

    if (isNaN(weightInKg) || isNaN(heightInMeters) || heightInMeters === 0) {
      setBmiResult("Invalid Input");
      setBmiStatus("");
      } else {
      const bmi = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
      setBmiResult(bmi);
      if (bmi > 24.9) {
        setBmiStatus('Overweight!')
      } else if (bmi < 18.5){
        setBmiStatus('Underweight!')
      } else {
        setBmiStatus('Normal!')
      }
      
      console.log('BMI:', bmi);
      }
  };


  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.contentContainer}>
        <MyTextField hintText="Enter height" onChangeText={handleHeightChange} />
        <MyTextField hintText="Enter weight" onChangeText={handleWeightChange} />
      <View style={styles.contentRowContainer}>
        <Button title="Calculate" onPress={handleButtonPress} value={handleButtonPress} />
      </View>
        <Text style={styles.padding}>BMI: {bmiResult}</Text>
        <Text style={styles.padding}>{bmiStatus}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#424242',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  padding: {
    padding: 10,
  },
  font: {
    fontWeight: 'bold',
    fontSize: 30,
  },
});
