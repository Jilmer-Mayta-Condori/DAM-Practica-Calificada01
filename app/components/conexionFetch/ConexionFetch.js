import React, { Component} from 'react';
import {View, StatusBar, FlatList, StyleSheet, Text, Image} from 'react-native';

function Item({title, image, years, ratings}) {
    return (
        <View style={styles.item}>
            <Image source={{uri: image}} style={styles.image}/>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.years}>Año: {years}</Text>
                <Text style={styles.ratings}>Rating: {ratings}</Text>
            </View>
        </View>
    );
}
export default class conexionFetch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textValue: 0,
            count: 0,
            items: [],
            error: null,
        };
    }
    async componentDidMount() {
        await fetch('https://yts.mx/api/v2/list_movies.json')
            .then(res => res.json())
            .then(
                result => {
                    console.warn('result', result.data.movies);
                    this.setState({
                        items: result.data.movies,
                    });
                },
                error => {
                    this.setState({
                        error: error,
                    });
                },
            );
                
    }
    
    render(){
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.items.length > 0 ? this.state.items : []}
                    renderItem={({item}) =>(
                        <Item title={item.title} image={item.small_cover_image} years={item.year} ratings={item.rating} />
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: 'gray',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection:'row',
        paddingTop:15,
        paddingLeft: 15,
    }, 
    image: {
        width: 80, 
        height: 80,
        borderRadius: 50,
    },
    title: {
        fontSize: 20,
        paddingLeft: 15,
    },
    years: {
        color: 'black',
        paddingLeft: 15,
    },
    ratings: {
        color: 'black',
        paddingLeft: 15,
    },
});