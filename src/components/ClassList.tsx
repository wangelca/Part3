import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';

const ClassList: React.FC<{
  setScreen: React.Dispatch<
    React.SetStateAction<'Home' | 'Calendar' | 'Classes' | 'Reminders'>
  >;
}> = ({setScreen}) => {
  const [className, setClassName] = React.useState('');
  const [classes, setClasses] = React.useState<string[]>([]);

  const handleAddClass = () => {
    if (className.trim()) {
      setClasses([...classes, className]);
      setClassName('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Class List</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Class Name"
        value={className}
        onChangeText={setClassName}
      />
      <Button title="Add Class" onPress={handleAddClass} />
      <FlatList
        data={classes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.classItem}>
            <Text>{item}</Text>
          </View>
        )}
        style={styles.classList}
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
  classItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  classList: {
    marginTop: 20,
  },
});

export default ClassList;
