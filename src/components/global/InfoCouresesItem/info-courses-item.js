import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const ICON_SIZE = 8;

export default function SectionItems(props) {
    const renderStar = (num_start) => {
        let stars = [];
        for (let i = 0; i < num_start; i++) {
            stars.push(<View style={styles.star}><Icon name="star" color="orange" size={ICON_SIZE} /></View>);
        }
        return stars.map(star => star);
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.item.title}</Text>
            <View style={styles.info}>
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
    },
    title: {
        marginLeft: 6,
        fontSize: 12,
        color: 'black',
        fontWeight: 'bold'
    },
    info: {
        margin: 6,
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