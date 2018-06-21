import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default class ResultDetail extends Component {

    constructor() {
        super();
        this.state = {
            productImage: 'http://demo.makitweb.com/broken_image/images/noimage.png'
        }
    }

    static navigationOptions = ({navigation}) => {
        return {title: navigation.getParam('item').name}
    };

    async componentDidMount() {
        let product = this.props.navigation.getParam('item')
        console.log(product)
        this.setState({
            productImage: product.image_link
        })
    }


    render() {
        const product = this.props.navigation.getParam('item')
        console.log(this.props.productImage)
        return(
            <View style = {styles.container}>
                <ScrollView style = {{width: '100%'}}>
                    <Image
                        source = {{uri: this.state.productImage}}
                        style = {{width: 400, height: 400}}
                    />
                    <Text style = {[{fontWeight: '900'}, {textAlign: 'center'}]}>{product.name}</Text>
                    <Text style = {{textAlign: 'center'}}>{product.product_type} by {product.brand}</Text>
                    <Text style = {{textAlign: 'center'}}>${product.price}0{'\n'}</Text>
                    <Text style = {{textAlign: 'center'}}>{product.description}</Text>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    //   justifyContent: 'center',
    },

  });
  