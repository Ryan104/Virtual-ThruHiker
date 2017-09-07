import React from 'react';
import {View, Text} from 'react-native';

const HeaderCard = (props) => {
    return (
        <View style={styles.headCardStyle}>
            <Text style={styles.titleStyle}>Virtual AT</Text>
            <Text style={styles.progressStyle}>{props.miles}/2186 mi</Text>
        </View>
    );
}

const styles = {
    headCardStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 2,
        borderColor: '#000',
        elevation: 4
    },
    titleStyle: {
        fontSize: 30,
        margin: 3
    },
    progressStyle: {
        fontSize: 22,
        margin: 3
    }
}

export default HeaderCard;