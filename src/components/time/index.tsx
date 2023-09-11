import React, { useState } from 'react';
import { View, Keyboard } from 'react-native';
import Input from '../input';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

function TimeInput({ value, setValue }: any) {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    return (
        <View>
            <Input
                value={value} onPressIn={() => {
                    Keyboard.dismiss();
                    setOpen(true);
                }}
                image={require("../../assets/images/time/time1.png")} />
            <DatePicker
                modal
                mode='time'
                open={open}
                date={date}
                minimumDate={date}
                onConfirm={(date) => {
                    setOpen(false);
                    setValue(moment(date).format("hh:mm A"))
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
        </View>
    )
}

export default TimeInput;