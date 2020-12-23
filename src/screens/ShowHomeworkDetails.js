import React, { useEffect, useState } from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ShowHomework from '../components/ShowHomework';

export default function ShowHomeworkDetails(props) {
  const state = useSelector((state) => state);
  const {type} = props.route.params
  const getSelectedSubject = (subName) => {
      props.navigation.navigate('StatusDetailsScreen', {subjectName: subName, type: type})
  }
  const renderItem = ({item, index}) => {
    return <ShowHomework index={index} subjectName={item.subjectName} imageUrl = {item.imageUrl}  getSelectedSubject={getSelectedSubject} />;
  };

  const allHmw = state.homeworkData.length && state.homeworkData.filter(e =>  type === 'all' ? e : e.type === type)
  return (
    <View style={{flex:1}}>
      {allHmw.length ? (
        <FlatList
          data={allHmw}
          keyExtractor={(item, idx) => 'key' + idx}
          renderItem={renderItem}
        />
      ) : (
        <View style={{flex:1, alignSelf:'center', alignItems:'center', justifyContent:'center'}}>
          <Text style={{fontSize: 30, fontWeight:'bold'}}>No Subjects</Text>
        </View>
      )}
    </View>
  );
}
