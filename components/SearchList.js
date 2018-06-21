import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';

// import custom componnet
import ResultCell from './ResultCell'

// import custom function
import { searchProducts } from '../helpers/MakeupAPI';

export default class SearchList extends Component {

    constructor() {
        super();
        this.state = {
            products: [],
            filteredProducts: [],
            searchText: '',
        }
    }

    static navigationOptions = {
        title: 'Makeup Search'
    };

    componentWillMount() {
        super.componentWillMount
        searchProducts()
            .then((results) => {
                this.setState({
                    products: results,
                    filteredProducts: results
                })
            })
    }

    filterSearch = (text) => {
        const filteredArray = this.state.products.filter((product) => product.product_type.toLowerCase().includes(text.toLowerCase()))
        this.setState({
            searchText: text,
            filteredProducts: filteredArray,
        })
        console.log('filteredProduct: ' + this.state.filteredProducts.length)
    }


    render() {
        return(
            <View style = {styles.container}>
            <SearchBar
                lightTheme
                autoCapitalize = 'none'
                autoCorrect = {false}
                round
                clearIcon = {true}
                placeholder = {'Search for Product Type (e.g. \'blush\', \'eyeliner\', \'lipstick\'...)'}
                onChangeText = {(text) => this.filterSearch(text)}
                onClear = {() => this.setState({searchText: ''})}
                value = {this.state.searchText}
            />
            
            <FlatList
                data = { this.state.filteredProducts }
                renderItem = {({item}) => <ResultCell
                                            name = {item.name}
                                            product_image = {item.image_link}
                                            onPress = {() => this.props.navigation.navigate('Detail', {item})}
                                            />
                    }
                keyExtractor = {item => item.name} // optional
            />
            
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    item: {
        padding: 10,
        fontSize: 20,
      },
  });
  