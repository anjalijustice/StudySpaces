import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';

export default class LocationCard extends React.Component {
    render(){
        return (
            <View>
                {/* hi */}
                <TouchableOpacity
                style={styles.card}
                >
                    <Image
                    style={styles.image}
                    source={require()}
                    />
                </TouchableOpacity>
                <Text
                style={styles.text}>
                    {this.props.name}
                </Text>
            </View>
            
        )
    } 
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'rgb(220, 230, 232)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 80,
        height: 80
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        color: 'black',
        margin: 10,
    }
})