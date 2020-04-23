/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';
import {
  Image, Text, View,
} from 'react-native';
import average from '../helpers/average';
import styles from '../src/style';


const StudentDetail = ({ item }) => (
  <View
    style={[styles.student, { backgroundColor: item.attendance < 5 ? 'green' : 'red' }]}
  >
    <Image
      source={{ uri: `https://i.picsum.photos/id/${item.id}/200/300.jpg` }}
      style={{ width: 100, height: 100, marginRight: 10 }}
    />
    <Text>{item.name}</Text>
    <Text>
      Nombre de lecons suivies :
      { item.lessons.length }
    </Text>
    <Text>
      Nombre d'absence :
      {item.attendance}
    </Text>
    <Text>
      Moyenne:
      {average(item.notes)}
    </Text>
  </View>

);

export default StudentDetail;
