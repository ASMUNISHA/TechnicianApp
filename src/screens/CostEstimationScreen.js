// screens/CostEstimationScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function CostEstimationScreen({ route }) {
  const { requestId } = route.params;

  const [labourCost, setLabourCost] = useState(0);
  const [materialCost, setMaterialCost] = useState(0);
  const [equipmentCost, setEquipmentCost] = useState(0);
  const [consumablesCost, setConsumablesCost] = useState(0);

  const totalCost = labourCost + materialCost + equipmentCost + consumablesCost;

  const handleIncrement = (setState) => {
    setState(prevState => prevState + 1);
  };

  const handleDecrement = (setState) => {
    setState(prevState => Math.max(prevState - 1, 0));
  };

  const handleSend = () => {
    // Logic for sending the cost estimation data
    console.log('Sending cost estimation data:', {
      labourCost,
      materialCost,
      equipmentCost,
      consumablesCost,
      totalCost,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cost Estimation Form</Text>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Labour Cost:</Text>
        <View style={styles.numberPicker}>
          <Button title="-" onPress={() => handleDecrement(setLabourCost)} />
          <TextInput
            style={styles.numberInput}
            value={labourCost.toString()}
            onChangeText={text => setLabourCost(parseInt(text) || 0)}
            keyboardType="numeric"
          />
          <Button title="+" onPress={() => handleIncrement(setLabourCost)} />
        </View>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Material Cost:</Text>
        <View style={styles.numberPicker}>
          <Button title="-" onPress={() => handleDecrement(setMaterialCost)} />
          <TextInput
            style={styles.numberInput}
            value={materialCost.toString()}
            onChangeText={text => setMaterialCost(parseInt(text) || 0)}
            keyboardType="numeric"
          />
          <Button title="+" onPress={() => handleIncrement(setMaterialCost)} />
        </View>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Equipment Cost:</Text>
        <View style={styles.numberPicker}>
          <Button title="-" onPress={() => handleDecrement(setEquipmentCost)} />
          <TextInput
            style={styles.numberInput}
            value={equipmentCost.toString()}
            onChangeText={text => setEquipmentCost(parseInt(text) || 0)}
            keyboardType="numeric"
          />
          <Button title="+" onPress={() => handleIncrement(setEquipmentCost)} />
        </View>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Consumables Cost:</Text>
        <View style={styles.numberPicker}>
          <Button title="-" onPress={() => handleDecrement(setConsumablesCost)} />
          <TextInput
            style={styles.numberInput}
            value={consumablesCost.toString()}
            onChangeText={text => setConsumablesCost(parseInt(text) || 0)}
            keyboardType="numeric"
          />
          <Button title="+" onPress={() => handleIncrement(setConsumablesCost)} />
        </View>
      </View>
      <Text style={styles.label}>Total Cost: {totalCost}</Text>
      <Button title="Send" onPress={handleSend} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  fieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    
  },
  label: {
    fontWeight: 'bold',
    width: 190, // Adjust the width for alignment
  },
  numberPicker: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numberInput: {
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 10,
    width: 100,
  },
});
