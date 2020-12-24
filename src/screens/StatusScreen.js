import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  Dimensions,
  Alert,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  Container,
  Content,
  Header,
  Form,
  Button,
  Thumbnail,
  Icon,
  Item,
  Input,
  Textarea,
  Fab,
} from 'native-base';
import {Row, Col, Grid} from 'react-native-easy-grid';
import {
  atnChangeStatus,
  atnRemoveHomework,
  atnUpdateHomework,
} from '../redux/actions/HomeworkActions';
import {ScrollView} from 'react-native-gesture-handler';

const {height, width} = Dimensions.get('window');
function StatusScreen(props) {
  const changeStatus = () => {
    dispatch(atnChangeStatus(props.route.params.subjectName));
    props.navigation.navigate('HomeScreen');
  };

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let statusData = [];
  const {type} = props.route.params;
  const m = state.homeworkData.filter(
    (e) => e.subjectName === props.route.params.subjectName,
  );

  const handleUpdate = () => {
    props.navigation.navigate('AddDetailsScreen', {
      subjectName: props.route.params.subjectName,
    });
  };
  const handleDelete = () => {
    Alert.alert(
      'Delete Confirm',
      'Are you sure want to delete',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            dispatch(atnRemoveHomework(props.route.params.subjectName));
            props.navigation.goBack();
          },
        },
      ],
      {cancelable: false},
    );
  };

  const getHomeworkDetails = () => {
    return (
      <View>
        {state.homeworkData.length ? (
          m[0] !== undefined ? (
            <View>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
                {m[0].subjectName}
              </Text>
              <Text style={{padding: 5}}>Date:- {m[0].date}</Text>
              <Text style={{padding: 5}}>ExtraNote:- {m[0].extraNote}</Text>
              <Text style={{padding: 5}}>HomeworkDetail:- </Text>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                  width: 200,
                  borderWidth: 1,
                  padding: 5,
                  marginBottom: 10,
                  height: height * 0.2,
                }}>
                <Text>{m[0].homeworkDetailNote}</Text>
              </ScrollView>
            </View>
          ) : null
        ) : (
          <Text>Nodata</Text>
        )}
      </View>
    );
  };

  return (
    <Container>
      <Row
        size={1}
        style={{
          backgroundColor: '#7752BD',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 30,
          }}>
          <Image
            source={require('../assets/images/home1.png')}
            style={{
              height: 100,
              width: 100,
              borderRadius: 80,
              backgroundColor: '#7752BD',
              borderWidth: 1,
              borderColor: '#fff',
            }}
          />
        </View>
      </Row>
      <Row
        size={3}
        style={{
          backgroundColor: '#7752BD',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <Image
          source={
            m && m[0] && m[0].imageUrl
              ? {uri: m[0].imageUrl}
              : require('../assets/images/home.png')
          }
          style={{
            position: 'absolute',
            left: 20,
            top: 20,
            zIndex: 10,
            height: 100,
            width: 100,
            borderRadius: 80,
            backgroundColor: '#7752BD',
            borderWidth: 1,
            borderColor: '#fff',
          }}
        />
        <View
          style={{
            position: 'absolute',
            right: 10,
            top: 10,
            zIndex: 10,
            backgroundColor: '#000',
            borderRadius: 20,
          }}>
          <TouchableOpacity
            style={{
              borderRadius: 20,
              borderWidth: 2,
              borderColor: 'black',
              padding: 10,
            }}>
            <Text
              style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}
              onPress={handleUpdate}>
              Edit Details
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            position: 'absolute',
            right: 10,
            top: 80,
            width: 120,
            zIndex: 10,
            backgroundColor: '#000',
            borderRadius: 20,
          }}>
          <TouchableOpacity
            onPress={(e) => changeStatus()}
            style={{
              borderRadius: 20,
              borderWidth: 2,
              borderColor: 'black',
              padding: 10,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: '#fff',
                textAlign: 'center',
              }}>
              {type === 'pending' ? <>Tap if completed</> : <>Completed</>}
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            position: 'absolute',
            right: width * 0.1,
            bottom: height * 0.1,
            width: 'auto',
            zIndex: 10,
            backgroundColor: 'white',
            borderRadius: 20,
          }}>
          <TouchableOpacity
            onPress={handleDelete}
            style={{
              borderRadius: 20,
              borderWidth: 2,
              borderColor: 'black',
              padding: 10,
              alignItems: 'center',
            }}>
            <Icon
              type="AntDesign"
              name="delete"
              style={{color: 'red'}}
              color="red"
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: width * 0.7,
            height: height * 0.6,
            borderRadius: 50,
            justifyContent: 'center',
            flexDirection: 'row',
            backgroundColor: '#fff',
          }}>
          <View style={{alignSelf: 'center'}}>
            {getHomeworkDetails()}
          </View>
        </View>
      </Row>
    </Container>
  );
}
export default StatusScreen;
