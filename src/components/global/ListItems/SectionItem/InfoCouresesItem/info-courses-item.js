import React from 'react';
import { Text, View } from 'react-native';
import AuthorName from './AuthorName/index';
import Level from './Level/index';
import Rating from './Rating/index';
import styles from './utils/styles/index';

export default ({ item }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.info}>
                <AuthorName name={item.author} />
                <Level level={item.level} release={item.release} duration={item.duration}/>
                <Rating star={item.star} vote={item.vote}/>
            </View>
        </View>
    );
}