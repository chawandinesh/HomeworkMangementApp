import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
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
  Spinner,
} from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';
import {Row, Col, Grid} from 'react-native-easy-grid';
import {
  atnAddHomework,
  atnUpdateHomework,
} from '../redux/actions/HomeworkActions';
import DatePicker from '../components/DatePicker';

export default function HomeScreen(props) {
  const {height, width} = Dimensions.get('window');
  const [submitSpin, setSubmitSpin] = useState(false);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [HomeworkState, setHomeworkState] = useState({
    subjectName: '',
    date: '',
    extraNote: '',
    homeworkDetailNote: '',
    imageUrl: '',
    type: 'pending',
  });
  const handleSubmit = () => {
    setSubmitSpin(true);
    const {subjectName, date, extraNote, homeworkDetailNote} = HomeworkState;
    if (
      subjectName.length &&
      date.length &&
      extraNote.length &&
      homeworkDetailNote.length
    ) {
      if (props.route.params) {
        const index = state.homeworkData.findIndex(
          (e) => e.subjectName === props.route.params.subjectName,
        );
        dispatch(atnUpdateHomework(HomeworkState, index));
      
      } else {
        dispatch(atnAddHomework(HomeworkState));
      }
      setTimeout(() => {
        props.navigation.navigate('HomeScreen');
        Toast.show({
          text: "Wrong password!",
          buttonText: "Okay",
          duration: 3000
        })
      }, 1000);
    } else {
      alert('please fill all details');
    }
  };

  useEffect(() => {
    if (props.route.params) {
      const getData = state.homeworkData.find(
        (e) => e.subjectName === props.route.params.subjectName,
      );
      const {
        date,
        extraNote,
        homeworkDetailNote,
        imageUrl,
        subjectName,
        type,
      } = getData;
      setHomeworkState({
        ...HomeworkState,
        date,
        extraNote,
        homeworkDetailNote,
        imageUrl,
        subjectName,
        type,
      });
    } else {
    }
  }, [props.route.params]);
  const getTime = (date) => {
    setHomeworkState({...HomeworkState, date: date});
  };
  const getImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((image) => {
        setHomeworkState({...HomeworkState, imageUrl: image.path});
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const {
    date,
    extraNote,
    homeworkDetailNote,
    subjectName,
    imageUrl,
    type,
  } = HomeworkState;
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
                placeholder="Enter subject"
                onChangeText={(text) =>
                  setHomeworkState({...HomeworkState, subjectName: text})
                }
                value={subjectName}
                style={{color: '#fff'}}
                placeholderTextColor="#c1c5c7"
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
                onFocus={() => getTime()}
                disabled
                onChangeText={(text) =>
                  setHomeworkState({...HomeworkState, date: text})
                }
                value={date}
                style={{color: '#fff'}}
                placeholderTextColor="#c1c5c7"
              />
              <DatePicker getTime={getTime} />
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
                onChangeText={(text) =>
                  setHomeworkState({...HomeworkState, extraNote: text})
                }
                value={extraNote}
                style={{color: '#fff'}}
                placeholderTextColor="#c1c5c7"
              />
            </Item>
          </View>
          <Text
            style={{
              position: 'absolute',
              bottom: 3,
              padding: 5,
              fontSize: 20,
              fontWeight: 'bold',
              color: '#BCD',
              textDecorationLine: 'underline',
            }}>
            Write Homework Detail:-
          </Text>
        </Col>
        <Col
          size={3}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <TouchableOpacity onPress={getImage}>
            {HomeworkState.imageUrl.length ? (
              <Image
                source={
                  HomeworkState.imageUrl.length
                    ? {uri: HomeworkState.imageUrl}
                    : null
                }
                style={{height: 120, width: 120, borderRadius: 100}}
                resizeMode="cover"
              />
            ) : (
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#fff',
                  padding: 30,
                  borderRadius: 180,
                }}>
                <Icon
                  type="Feather"
                  name="user-plus"
                  style={{fontSize: 60, color: '#cceffc'}}
                />
              </View>
            )}
          </TouchableOpacity>
          {/* </View> */}
        </Col>
      </Row>
      <Row size={2}>
        <Content style={{margin: 2}}>
          <Form>
            <Textarea
              rowSpan={5}
              value={homeworkDetailNote}
              bordered
              placeholder="Textarea"
              style={{borderRadius: 20}}
              onChangeText={(text) =>
                setHomeworkState({...HomeworkState, homeworkDetailNote: text})
              }
            />
          </Form>
          <Button
            rounded
            style={{
              backgroundColor: '#7752BD',
              height: 50,
              justifyContent: 'center',
              alignSelf: 'center',
              margin: 5,
            }}
            onPress={() => handleSubmit()}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#F5F6F7',
                fontSize: 20,
                padding: 50,
              }}>
              {submitSpin ? (
                <Spinner color="white" />
              ) : props.route.params ? (
                <Text>Update Homework</Text>
              ) : (
                <Text>Submit Homework</Text>
              )}
            </Text>
          </Button>
        </Content>
      </Row>
    </Container>
  );
}
