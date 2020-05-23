import React from 'react';
import { Text } from 'react-native';
import styles from '../utils/styles/index';


export default ({level, release, duration}) => {
    return <Text style={styles.text}>{level} . {release} . {duration}</Text>
}

