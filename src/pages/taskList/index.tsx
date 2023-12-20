import React, {memo} from 'react';
import {
  ScrollView,
  StatusBar,
  Image,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import Button from '../../components/button';
import styles from './style';
import {useAppDispatch, useAppSelector} from '../../slice/store';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {deleteTask} from '../../slice/card.slice.ts';
import {navigate, onEditSuccess} from '../../App';
import {s} from '../../utils/scale';

function TaskList() {
  const task = useAppSelector((state: any) => state.card);
  const dispatch = useAppDispatch();
  function edittask(index: number) {
    onEditSuccess('AddTask', index);
  }
  function deletTask(index: any) {
    dispatch(deleteTask(index));
  }
  return (
    <View style={styles.bg}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        animated
        translucent
      />
      <ImageBackground
        blurRadius={s(1)}
        resizeMode="contain"
        style={styles.img}
        source={{uri: 'blue_dot'}}
      />
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Tasks.</Text>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.listContainer}>
          {task?.map((i: any, idx: number) => {
            return (
              <View key={idx} style={styles.card}>
                <View style={styles.rowSpace}>
                  <Text style={styles.cardHead}>{i?.taskName}</Text>
                  <View style={styles.row}>
                    <TouchableOpacity
                      onPress={() => edittask(idx)}
                      style={styles.margin20}>
                      <Icon name="pencil" size={s(15)} color="#754cf1" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => deletTask(idx)}>
                      <Icon name="trash" size={s(15)} color="#754cf1" />
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={styles.cardText}>{i?.subject}</Text>
                <View style={styles.rowEnd}>
                  <View style={styles.row}>
                    <Image
                      resizeMode="contain"
                      style={styles.timeImage}
                      source={{uri: 'time1'}}
                    />
                    <Text style={styles.time}>10:00 AM</Text>
                  </View>
                  <View style={styles.done}>
                    <Text>Done</Text>
                  </View>
                </View>
              </View>
            );
          })}
          <View style={styles.card}>
            <Text style={styles.cardHead}>Lorem ipsum dolor</Text>
            <Text style={styles.cardText}>Lorem ipsum dolor</Text>
            <View style={styles.rowEnd}>
              <View style={styles.row}>
                <Image
                  resizeMode="contain"
                  style={styles.timeImage}
                  source={{uri: 'time1.png'}}
                />
                <Text style={styles.time}>10:00 AM</Text>
              </View>
              <View style={styles.inProgress}>
                <Text style={styles.inProgressText}>Inprogress</Text>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardHead}>Lorem ipsum dolor</Text>
            <Text style={styles.cardText}>Lorem ipsum dolor</Text>
            <View style={styles.rowEnd}>
              <View style={styles.row}>
                <Image
                  resizeMode="contain"
                  style={styles.timeImage}
                  source={{uri: 'time1.png'}}
                />
                <Text style={styles.time}>10:00 AM</Text>
              </View>
              <View style={styles.inProgress}>
                <Text style={styles.inProgressText}>Inprogress</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.mv20}>
          <Button label="Add task" onPress={() => navigate('AddTask', {})} />
        </View>
      </ScrollView>
    </View>
  );
}

export default memo(TaskList);
