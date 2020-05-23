import React from 'react';
import { Text } from 'react-native';
import styles from '../utils/styles/index';

export default ({name}) => {
    return <Text style={styles.text}>{name}</Text>
}

