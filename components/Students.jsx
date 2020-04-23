/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import {
  View, FlatList, StyleSheet,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SchoolContext } from '../store';
import StudentDetail from './StudentDetail';

const styles = StyleSheet.create({
  students_container: {
    flex: 1,
    flexDirection: 'row',
  },
  student: {
    margin: 20,
    padding: 10,
  },
});
function Students({ navigation }) {
  const [state] = useContext(SchoolContext);

  return (
    <View style={styles.students_container}>
      <FlatList
        data={state.students}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('DetailStudent', { id: item.id })}>
            <StudentDetail item={item} />
          </TouchableOpacity>
        )}
      />


    </View>
  );
}

export default Students;
