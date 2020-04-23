/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';
import {
  Image, Text, View,
} from 'react-native';
import average from '../helpers/average';
import styles from '../src/style';


const StudentDetail = ({ item }) => {
  const { student, mention } = item;

  return (
    <View
      style={[styles.student, { backgroundColor: student.attendance < 5 ? 'green' : 'red' }]}
    >
      <Image
        source={{ uri: `https://i.picsum.photos/id/${student.id}/200/300.jpg` }}
        style={{ width: 100, height: 100, marginRight: 10 }}
      />
      <Text>{student.name}</Text>
      <Text>
        Nombre de lecons suivies :
        { student.lessons.length }
      </Text>
      <Text>
        Nombre d'absence :
        {student.attendance}
      </Text>
      <Text>
        Moyenne:
        {average(student.notes)}
      </Text>
      <Text>
        Mention:
        {mention}
      </Text>
    </View>
  
  )
} ;

export default StudentDetail;
