import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Video } from "expo-av";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const W = Dimensions.get("window").width;

const CourseVideo = ({ style, height, width }) => {
  const navigation = useNavigation();
  const [shouldPlay, setShouldPlay] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    return () => {
      videoRef.current.stopAsync();
    };
  }, []);

  const handlePlayAndPause = () => {
    const handlePlay = () => {
      videoRef.current.pauseAsync();
      setShouldPlay(false);
    };

    const handlePause = () => {
      videoRef.current.playAsync();
      setShouldPlay(true);
    };
    return shouldPlay ? handlePlay() : handlePause();
  };

  const handleClose = () => {
    return navigation.goBack();
  };

  const renderControl = () => {
    return !shouldPlay ? (
      <Icon name="play" style={{ fontSize: 60, color: "#00000070" }} />
    ) : (
      <Icon name="pause" style={{ fontSize: 60, color: "#00000070" }} />
    );
  };
  return (
    <View style={[styles.container, style]}>
      <Video
        source={{
          uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        resizeMode="stretch"
        style={{ width: "100%", height: "100%" }}
        ref={videoRef}
      />
      <View style={styles.playIcon}>
        <TouchableWithoutFeedback
          onPress={() => {
            handlePlayAndPause();
          }}
        >
          {renderControl()}
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.closeIcon}>
        <TouchableWithoutFeedback onPress={handleClose}>
          <Icon name="close" style={{ fontSize: 25, color: "#00000070" }} />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  playIcon: {
    position: "absolute",
    zIndex: 1,
    left: "43%",
    top: 70,
  },
  closeIcon: {
    position: "absolute",
    zIndex: 1,
    left: 15,
    top: 20,
  },
});

export default CourseVideo;
