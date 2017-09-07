import React, {Component} from 'react';
import {View, Text} from 'react-native';
import getNextDestination from './destinations';


class DestinationCard extends Component {
    componentWillMount() {
        destination = getNextDestination(this.props.type, this.props.miles);
    }
    // TODO: break this Card down into smaller components
    // TODO: use icon instead of type string
    // TODO: fancy formatting
    render() {
        return (
            <View style={styles.destinationCardStyle}>
                <View style={styles.destinationTypeStyle}>
                    <Text style={styles.typeTextStyle}>{this.props.type}</Text>
                </View>
                <View style={styles.destinationDetailStyle}>
                    <Text style={styles.detailTextStyle}>{destination[0]}</Text>
                    <Text style={styles.detailTextStyle}>{destination[1]}mi</Text>
                </View>
            </View>
        );
    }
}

const styles = {
    destinationCardStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5
    },
    destinationTypeStyle: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    typeTextStyle: {
        fontSize: 24,
    },
    destinationDetailStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 3,
    },
    detailTextStyle: {
        fontSize: 18
    }
}

export default DestinationCard;