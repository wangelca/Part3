import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import CalendarView from './src/components/CalendarView';
import ClassList from './src/components/ClassList';
import ReminderSettings from './src/components/ReminderSettings';

const App = () => {
  const [screen, setScreen] = useState<'Home' | 'Calendar' | 'Classes' | 'Reminders'>('Home');

  let ScreenComponent;
  switch (screen) {
    case 'Calendar':
      ScreenComponent = (props: any) => <CalendarView {...props} />;
      break;
    case 'Classes':
      ScreenComponent = (props: any) => <ClassList {...props} />;
      break;
    case 'Reminders':
      ScreenComponent = (props: any) => <ReminderSettings {...props} />;
      break;
    default:
      ScreenComponent = (props: any) => <HomeScreen {...props} />;
  }

  return (
    <View style={styles.container}>
      <ScreenComponent setScreen={setScreen} />
    </View>
  );
};

const HomeScreen = ({ setScreen }: { setScreen: React.Dispatch<React.SetStateAction<'Home' | 'Calendar' | 'Classes' | 'Reminders'>> }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>StudyBoost</Text>
      <Text style={styles.description}>
        Welcome to StudyBoost! This app helps you manage your study schedule, track your classes, and set reminders to stay on top of your academic goals.
      </Text>
      <View style={styles.navigationButtons}>
        <Button title="Calendar" onPress={() => setScreen('Calendar')} />
        <Button title="Classes" onPress={() => setScreen('Classes')} />
        <Button title="Reminders" onPress={() => setScreen('Reminders')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default App;

