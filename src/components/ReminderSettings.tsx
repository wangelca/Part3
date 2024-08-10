import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ReminderSettings: React.FC<{ setScreen: React.Dispatch<React.SetStateAction<'Home' | 'Calendar' | 'Classes' | 'Reminders'>> }> = ({ setScreen }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reminder Settings</Text>
      <Text>Here you can set up your reminders.</Text>
      <Button title="Home" onPress={() => setScreen('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default ReminderSettings;




