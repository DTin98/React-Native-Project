import React from 'react';
import { View } from 'react-native';
import SectionItem from './SectionItem/section-item';

export default ({items, section}) => {
    return (
        <View>
            {items.map((item => <SectionItem section={section} item={item} />))}
        </View>
    )
}