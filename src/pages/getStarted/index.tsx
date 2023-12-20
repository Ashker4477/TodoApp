import React, {memo, useEffect} from 'react';
import {Image, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import {Svg, Path} from 'react-native-svg';
import {useAppSelector} from '../../slice/store';
import {onAddSuccess} from '../../App';
import {debounce} from 'lodash';

function GetStarted({navigation: {navigate}}: any) {
  const task = useAppSelector((state: any) => state?.card);
  const dbnc = debounce(() => onAddSuccess(), 100);
  useEffect(() => {
    if (task?.length > 0) {
      dbnc();
    }
  }, [dbnc, task?.length]);

  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        animated
        translucent
      />
      <View style={styles?.imageContainer}>
        <Image
          style={styles?.dotImage}
          resizeMode="contain"
          source={{uri: 'ellipse166.png'}}
        />
        <Image
          resizeMode="contain"
          source={{uri: 'task1.png'}}
          style={styles.image}
        />
      </View>
      <View style={styles.parabla}>
        <Svg width="100%" height="100%" viewBox="0 0 100 100">
          <Path d="M0 0 L0 50 Q50 100 100 50 L100 0 Z" fill="#754cf1" />
        </Svg>
      </View>
      <View style={styles.secContainer}>
        <View style={styles.secTextView}>
          <Text style={styles.secText}>Add a task to get started</Text>
        </View>
        <TouchableOpacity
          style={styles.secButton}
          onPress={() => navigate('AddTask', {})}>
          <Text style={styles.secButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default memo(GetStarted);
