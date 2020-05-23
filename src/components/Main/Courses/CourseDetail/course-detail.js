import { Video } from 'expo-av';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Data from "../../../global/Data/index";
import ListItems from "../../../global/ListItems/index";
import AuthorName from "../../../global/ListItems/SectionItem/InfoCouresesItem/AuthorName/index";
import Level from "../../../global/ListItems/SectionItem/InfoCouresesItem/Level/index";
import Rating from "../../../global/ListItems/SectionItem/InfoCouresesItem/Rating/index";

export default ({ route, navigation }) => {
    const { course } = route.params;
    return (
        <View style={styles.container}>
            <Video
                source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                rate={1.0}
                volume={2.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                style={styles.video}
            />
            <ScrollView contentContainerStyle={{justifyContent: 'space-around'}}>
                <Text style={styles.title}>React Native Nâng cao</Text>
                <View style={styles.authors}>
                    <Image style={styles.image} source={require('../../../../../assets/obama.png')} /><Text style={styles.authorName}>Obama</Text>
                    <Image style={styles.image} source={require('../../../../../assets/donal-trump.jpg')} /><Text style={styles.authorName}>Donal Trump</Text>
                </View>
                <View style={styles.info}>
                    <AuthorName name={course.authors} />
                    <Level level={course.level} release={course.release} duration={course.duration} />
                    <Rating star={course.star} vote={course.vote} />
                </View>
                <View style={styles.optionButton}>

                </View>
                <View style={styles.summary}>

                </View>
                <ScrollView style={styles.mainContent}>
                    <ListItems section='courses' items={Data.courses} />
                </ScrollView>
            </ScrollView>
        </View>
    );
}
// Later on in your styles..
var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontWeight: '700',
        fontSize: 21,
        marginVertical: 10,
    },
    authorName: {
        textAlignVertical: 'center',
        fontStyle: 'italic',
        marginHorizontal: 10
    },
    video: {
        height: 200,
        width: '100%'
    },
    image: {
        height: 50,
        width: 50,
        overflow: 'hidden',
        borderRadius: 50,
    },
    authors: {
        flexDirection: 'row',
        alignContent: 'center',
        marginBottom: 10
    },
    info: {
        flexDirection: 'row',
        marginBottom: 10
    },
    mainContent: {
        height: '100%'
    },
    optionButton:{
        height: 150,
        borderWidth: 1,
        borderColor: 'red',
        marginBottom: 10
    },
    summary: {
        height: 150,
        borderWidth: 1,
        borderColor: 'orange',
        marginBottom: 10
    }
});