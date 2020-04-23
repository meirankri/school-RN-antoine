/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import { SchoolContext } from '../store';
import StudentDetail from './StudentDetail';
import styles from '../src/style';

const Student = ({ route }) => {
  const [state, dispatch] = useContext(SchoolContext);
  const item = state.students.filter((item) => item.id === route.params.id);
  return (
    <View>
      <StudentDetail item={item[0]} />
      <TouchableOpacity
        onPress={() => dispatch({ type: 'INCREMENT', id: item[0].id })}
        style={styles.button}
      >
        <Text>Increment absence</Text>
      </TouchableOpacity>
      {item[0].attendance > 0 ? (
        <TouchableOpacity
          onPress={() => dispatch({ type: 'DECREMENT', id: item[0].id })}
          style={styles.button}
        >
          <Text>Decrement absence</Text>
        </TouchableOpacity>
      ) : null}
      <Text> ouech </Text>
    </View>
  );
};

export default Student;
