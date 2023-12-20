import React, {memo} from 'react';
import {ScrollView, StatusBar, Image, View, Text} from 'react-native';
import Button from '../../components/button';
import styles from './style';
import {useAppDispatch, useAppSelector} from '../../slice/store';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {deleteTask} from '../../slice/card.slice.ts';
import {navigate, onEditSuccess} from '../../App';

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
    <View style={{flex: 1}}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        animated
        translucent
      />
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Tasks.</Text>
        <Image
          blurRadius={2}
          resizeMode="contain"
          style={styles.img}
          source={{uri: 'blue_dot.png'}}
        />
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.listContainer}>
          {task?.map((i: any, idx: number) => {
            return (
              <View key={idx} style={styles.card}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.cardHead}>{i?.taskName}</Text>
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                      onPress={() => edittask(idx)}
                      style={{marginRight: 12}}>
                      <Icon name="pencil" size={15} color="#754cf1" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => deletTask(idx)}>
                      <Icon name="trash" size={15} color="#754cf1" />
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={styles.cardText}>{i?.subject}</Text>
                <View style={styles.rowEnd}>
                  <View style={styles.row}>
                    <Image
                      resizeMode="contain"
                      style={styles.timeImage}
                      source={{uri: 'time1.png'}}
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
        <View style={{marginVertical: 20}}>
          <Button label="Add task" onPress={() => navigate('AddTask', {})} />
        </View>
      </ScrollView>
    </View>
  );
}

export default memo(TaskList);
