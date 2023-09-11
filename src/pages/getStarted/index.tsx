import React, { memo } from 'react'
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import styles from './style';

function GetStarted({ navigation }: any) {

    return (
        <View style={{ backgroundColor: '#fff' }}>
            <StatusBar
                barStyle={'light-content'}
                backgroundColor={'#754cf1'} />
            <View style={styles.container}>
                <Image
                    style={styles.dotImage}
                    resizeMode='contain'
                    source={require("../../assets/images/ellipse/Ellipse166.png")}
                />
                <Image resizeMode='contain'
                    source={require("../../assets/images/task/TASK1.png")}
                    style={styles.image} />
            </View>
            <View style={styles.secContainer}>
                <View style={styles.secTextView}>
                    <Text style={styles.secText}>Add a task to get started</Text>
                </View>
                <TouchableOpacity style={styles.secButton} onPress={() => navigation.navigate('AddTask')}>
                    <Text style={styles.secButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default memo(GetStarted);