import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {Container, Content, Header, Button, Icon, Fab} from 'native-base';
import {Row, Col, Grid} from 'react-native-easy-grid';

export default function HomeScreen(props) {
  const {height, width} = Dimensions.get('window');
  return (
    <Container>
      <Row
        size={2}
        style={{
          backgroundColor: '#7752BD',
          borderBottomEndRadius: 30,
          borderBottomStartRadius: 30,
        }}>
        <Col style={{justifyContent: 'center'}}>
          <Image
            source={require('../assets/images/home1.png')}
            style={{
              height: 200,
              width: 200,
              justifyContent: 'center',
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              backgroundColor: '#F5F6F7',
              alignSelf: 'center',
              borderColor: '#000',
              borderWidth: 2,
              alignItems: 'center',
              padding: 10,
              borderRadius: 20,
            }}>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: '#7752BD'}}>
              Homework Management
            </Text>
          </View>
        </Col>
      </Row>
      <Row size={1} style={{backgroundColor: '#F5F6F7'}}>
        <Col>
          <View
            style={{
              margin: 5,
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Button rounded style={{backgroundColor: '#7752BD', height: 60}} onPress={() => props.navigation.navigate('AddDetailsScreen')}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#F5F6F7',
                  fontSize: 20,
                  padding: 50,
                }}>
                Add Homework
              </Text>
            </Button>
          </View>
          <View
            style={{
              flex: 1,
              marginTop: height * 0.05,
              flexDirection: 'row',
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Button
              style={{
                margin: 10,
                borderRadius: 18,
              }}
              bordered>
              <TouchableOpacity onPress={() =>  props.navigation.navigate('ShowHomeworkDetails', {type:'pending'})}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#7752BD',
                    fontSize: 15,
                    padding: 5,
                    width: width * 0.25,
                    textAlign: 'center',
                  }}>
                  Pending
                </Text>
              </TouchableOpacity>
            </Button>
            <Button
              style={{
                margin: 10,
                borderRadius: 18,
              }}
              bordered>
              <TouchableOpacity onPress={() =>  props.navigation.navigate('ShowHomeworkDetails', {type: 'completed'})}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#7752BD',
                    fontSize: 15,
                    padding: 5,
                    width: width * 0.25,
                    textAlign: 'center',
                  }}>
                  Completed
                </Text>
              </TouchableOpacity>
            </Button>
            <Button
              style={{
                margin: 10,
                borderRadius: 18,
              }}
              bordered>
              <TouchableOpacity onPress={() =>  props.navigation.navigate('ShowHomeworkDetails',{type: 'all'})}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#7752BD',
                    fontSize: 15,
                    padding: 5,
                    width: width * 0.25,
                    textAlign: 'center',
                  }}>
                  All
                </Text>
              </TouchableOpacity>
            </Button>
          </View>
        </Col>
      </Row>
    </Container>
  );
}
