import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import AutoHeightImage from "react-native-auto-height-image";
import * as Animatable from "react-native-animatable";

export default function ComicScreen(props) {
  const img = props.navigation.getParam("img");
  let deviceWidth = Dimensions.get("window").width;

  return (
    <Animatable.View
      animation="fadeInUp"
      duration={400}
      delay={400}
      style={styles.image}
    >
      <AutoHeightImage width={deviceWidth} source={{ uri: img }} />
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
