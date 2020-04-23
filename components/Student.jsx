/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import {
  View, Text, TouchableOpacity, Picker,
} from 'react-native';
import { SchoolContext } from '../store';
import styles from '../src/style';
import getMention from '../helpers/getMention';

const Student = ({ route }) => {
  const [state, dispatch] = useContext(SchoolContext);
  const item = state.students.filter((item) => item.id === route.params.id);
  const {name, attendance, id} = item[0]
  return (
    <View>
      <Text>
        {/* // eslint-disable-next-line react/jsx-one-expression-per-line */}
        {name} a {attendance} absences et a la mention {getMention(state.behaviours, id)}
      </Text>
      <View style={styles.container}>
        <Picker
          selectedValue={getMention(state.behaviours, item[0].id)}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue) => dispatch({ type: 'HANDLE_SELECT', mention: itemValue, id })}
        >
          <Picker.Item label="Aucune" value="Aucune" />
          <Picker.Item label="A" value="A" />
          <Picker.Item label="B" value="B" />
        </Picker>
      </View>
      <TouchableOpacity>
        <Text>Donner une mention</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => dispatch({ type: 'INCREMENT', id: item[0].id })}
        style={styles.button}
      >
        <Text>Increment absence</Text>
      </TouchableOpacity>
      {item[0].attendance > 0 ? (
        <>
          <TouchableOpacity
            onPress={() => dispatch({ type: 'DECREMENT', id: item[0].id })}
            style={styles.button}
          >
            <Text>Decrement absence</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => dispatch({ type: 'RESET_ABSENCE', id: item[0].id })}
            style={styles.button}
          >
            <Text>Reset absence</Text>
          </TouchableOpacity>
        </>
      ) : null}

    </View>
  );
};

export default Student;
