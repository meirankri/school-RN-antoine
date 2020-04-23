/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import {
  View, FlatList, StyleSheet, Text,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SchoolContext } from '../store';
import StudentDetail from './StudentDetail';
import styles from '../src/style';
import getMention from '../helpers/getMention';


function Students({ navigation }) {
  const [state, dispatch] = useContext(SchoolContext);
  const Students = state.students.map((student) => {
    return {
      student,
      mention: getMention(state.behaviours, student.id),
    };
  });
  return (
    <View style={styles.students_container}>
      <TouchableOpacity style={styles.button} onPress={() => dispatch({ type: 'RESET_ALL_ABSENCE' })}>
        <Text> Reset all absence </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => dispatch({ type: 'ORDER_ASC_DSC' })}>
        <Text> order </Text>
      </TouchableOpacity>
      <FlatList
        data={Students}
        keyExtractor={(item) => item.student.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('DetailStudent', { id: item.student.id })}>
            <StudentDetail item={item} />
          </TouchableOpacity>
        )}
      />


    </View>
  );
}

export default Students;
