import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableHighlight,
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

export default function HomeScreen() {
  const {height, width} = Dimensions.get('window');
  return (
    <Container>
      <Row
        size={3}
        style={{
          backgroundColor: '#7752BD',
        }}>
        <Col
          size={6}
          style={{backgroundColor: '#7752BD', justifyContent: 'center'}}>
          <View>
            <Item
              style={{
                alignItems: 'center',
                width: width * 0.4,
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <Input
                placeholder="Enter Name Subject"
                style={{color: '#fff'}}
                placeholderTextColor="#f5f6f7"
              />
            </Item>
            <Item
              style={{
                alignItems: 'center',
                width: width * 0.4,
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <Input
                placeholder="Enter Date"
                style={{color: '#fff'}}
                placeholderTextColor="#f5f6f7"
              />
            </Item>
            <Item
              style={{
                alignItems: 'center',
                width: width * 0.4,
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <Input
                placeholder="Note if any"
                style={{color: '#fff'}}
                placeholderTextColor="#f5f6f7"
              />
            </Item>
          </View>
          <Text style={{position:'absolute', bottom: 3, padding: 5, fontSize: 20, fontWeight:'bold', color:'#BCD', textDecorationLine:'underline'}}>Write Homework Detail:-</Text>
        </Col>
        <Col size={3} style={{justifyContent: 'center', backgroundColor:'red', alignItems:'center', alignSelf:'center', borderRadius: 100,padding: 10,backgroundColor:'#7152BD',borderColor:'#000', borderWidth: 1}}>
          <View>

          <Image
            source={require('../assets/images/home1.png')}
            style={{height: 100, width: 100}}
          />
          </View>
        
        </Col>
      </Row>
      <Row size={2} >
        <Content style={{ margin: 2}}>
          <Form>
            <Textarea rowSpan={5} bordered placeholder="Textarea" style={{borderRadius: 20}} />
          </Form>
          <Button rounded style={{backgroundColor: '#7752BD', height: 50, justifyContent:'center', alignSelf:'center', margin: 5}}>
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
      
        </Content>
        
      </Row>
    </Container>
  );
}
