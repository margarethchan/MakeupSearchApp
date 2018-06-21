import React, { Component } from 'react';
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

export default class ResultCell extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <TouchableOpacity style = {styles.container} onPress = {this.props.onPress}>
                <Image 
                    source = {{uri: this.props.product_image}}
                    style = {{width: 50, height: 50}}
                />
                <Text 
                    style = {styles.item}
                    
                >
                    {this.props.name}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
    item: {
        padding: 10,
        fontSize: 20,
      },
  });
  