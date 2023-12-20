import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import Input from '../../components/input';
import Button from '../../components/button';
import styles from './style';
import {useAppDispatch, useAppSelector} from '../../slice/store';
import {addTask, editTask} from '../../slice/card.slice.ts';
import DateInput from '../../components/date';
import TimeInput from '../../components/time';
import {onAddSuccess} from '../../App';

function AddTask({route}: any) {
  const dispatch = useAppDispatch();
  const task = useAppSelector((state: any) => state?.card);
  const index = route?.params?.index;
  const [value, setValue] = useState<any>({
    taskName: '',
    subject: '',
    date: '',
    beginTime: '',
    finishedTime: '',
  });
  useEffect(() => {
    if (index > -1) {
      setValue(task[index]);
    }
    return () => {
      setValue({
        taskName: '',
        subject: '',
        date: '',
        beginTime: '',
        finishedTime: '',
      });
    };
  }, [index]);
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        animated
        translucent
      />
      <View style={styles.pencil}>
        <Image
          resizeMode="contain"
          style={styles.dot}
          source={{uri: 'blue_dot.png'}}
        />
        <Image
          resizeMode="contain"
          style={styles.img}
          source={{uri: 'pencil1.png'}}
        />
      </View>
      <ScrollView style={styles.bg} showsVerticalScrollIndicator>
        <View style={styles.mT15}>
          <Text style={styles.mH24}>Task name</Text>
          <Input
            value={value?.taskName}
            onChangeText={(t: string) =>
              setValue((prev: any) => ({...prev, taskName: t}))
            }
            image={{uri: 'note.png'}}
          />
        </View>
        <View style={styles.mT15}>
          <Text style={styles.mH24}>Subject</Text>
          <Input
            value={value?.subject}
            onChangeText={(t: string) =>
              setValue((prev: any) => ({...prev, subject: t}))
            }
            image={{uri: 'subject.png'}}
          />
        </View>
        <KeyboardAvoidingView>
          <View style={styles.mT15}>
            <Text style={styles.mH24}>Date</Text>
            <DateInput
              value={value?.date}
              setValue={(t: string) =>
                setValue((prev: any) => ({...prev, date: t}))
              }
            />
          </View>
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <Text style={styles.mH24}>Begining time</Text>
              <TimeInput
                value={value?.beginTime}
                setValue={(t: any) =>
                  setValue((prev: any) => ({...prev, beginTime: t}))
                }
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.mH24}>Finished time</Text>
              <TimeInput
                value={value?.finishedTime}
                setValue={(t: any) =>
                  setValue((prev: any) => ({...prev, finishedTime: t}))
                }
              />
            </View>
          </View>
        </KeyboardAvoidingView>
        <View style={styles.buttonContainer}>
          <Button
            label={index > -1 ? 'Edit task' : 'Add task'}
            onPress={() => {
              index > -1
                ? dispatch(editTask({index, value}))
                : dispatch(addTask(value));
              onAddSuccess();
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default AddTask;
