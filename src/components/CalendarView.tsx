import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, FlatList } from 'react-native';

const CalendarView: React.FC<{ setScreen: React.Dispatch<React.SetStateAction<'Home' | 'Calendar' | 'Classes' | 'Reminders'>> }> = ({ setScreen }) => {
  const [event, setEvent] = React.useState('');
  const [events, setEvents] = React.useState<string[]>([]);

  const handleAddEvent = () => {
    if (event.trim()) {
      setEvents([...events, event]);
      setEvent('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calendar View</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Event"
        value={event}
        onChangeText={setEvent}
      />
      <Button title="Add Event" onPress={handleAddEvent} />
      <FlatList
        data={events}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.eventItem}>
            <Text>{item}</Text>
          </View>
        )}
        style={styles.eventList}
      />
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
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  eventItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  eventList: {
    marginTop: 20,
  },
});

export default CalendarView;



