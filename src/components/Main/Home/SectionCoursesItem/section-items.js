import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

export default function SectionItems(props) {
    const renderStar = (num_start) => {
        let stars = [];
        for (let i = 0; i < num_start; i++) {
            stars.push(<View style={styles.star}><Icon name="star" color="yellow" size={8} /></View>);
        }
        return stars.map(star => star);
    };
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../../assets/course.png')} />
            <View style={styles.info}>
                <Text style={styles.text, { color: 'black', fontWeight: 'bold' }}>{props.item.title}</Text>
                <Text style={styles.text}>{props.item.author}</Text>
                <Text style={styles.text}>{props.item.level} . {props.item.release} . {props.item.duration}</Text>
                <View style={styles.rating}>
                    {renderStar(props.item.star)}
                    <Text style={styles.text, { fontSize: 7 }}> ({props.item.vote})</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 12,
        width: 170,
        backgroundColor: 'lightgray',
        overflow: 'hidden',
        borderRadius: 8,
    },
    image: {
        height: '50%',
        width: '100%'
    },
    info: {
        margin: 6,
        alignContent: "space-between"
    },
    text: {
        color: 'dimgray',
        fontSize: 10
    },
    star: {
        marginRight: 3
    },
    rating: {
        flexDirection: 'row',
    }
});