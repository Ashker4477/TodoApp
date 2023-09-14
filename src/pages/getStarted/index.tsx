import React, { memo } from 'react'
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import styles from './style';
import { Svg, Path } from 'react-native-svg';
import { navigate } from '../../App';

function GetStarted() {

    return (
        <View style={{ flex: 1 }}>
            <StatusBar
                barStyle={'light-content'}
                backgroundColor={'#754cf1'} />
            <View style={{
                backgroundColor: "#754cf1",
                zIndex: 10,
                justifyContent: 'center',
                alignItems: "center",
                borderBottomLeftRadius: 100,
                borderBottomRightRadius: 100,
            }}>
                <Image
                    style={styles.dotImage}
                    resizeMode='contain'
                    source={require("../../assets/images/ellipse/Ellipse166.png")}
                />
                <Image resizeMode='contain'
                    source={require("../../assets/images/task/TASK1.png")}
                    style={styles.image} />
            </View>
            <View style={{ position: "relative", top: -220 }}>
                <Svg width="100%" height="71%" viewBox="0 0 100 100">
                    <Path d="M0 0 L0 50 Q50 100 100 50 L100 0 Z" fill="#754cf1" />
                </Svg>
            </View>
            <View style={styles.secContainer}>
                <View style={styles.secTextView}>
                    <Text style={styles.secText}>Add a task to get started</Text>
                </View>
                <TouchableOpacity style={styles.secButton} onPress={() => navigate('AddTask',{})}>
                    <Text style={styles.secButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default memo(GetStarted);