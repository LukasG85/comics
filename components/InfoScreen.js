import React from "react";
import { StyleSheet, View, Text } from "react-native";
import * as Animatable from "react-native-animatable";

export default function InfoScreen() {
  return (
    <Animatable.View
      animation="fadeIn"
      duration={200}
      delay={200}
      style={styles.infoContainer}
    >
      <Animatable.View>
        <Text style={styles.title}>
          XKCD - A webcomic of romance, sarcasm, math, and language.
        </Text>
      </Animatable.View>
      <View>
        <Animatable.View animation="fadeIn" duration={200} delay={400}>
          <Text style={styles.subTitle}>What does XKCD stand for</Text>
        </Animatable.View>
        <Animatable.View animation="fadeIn" duration={200} delay={600}>
          <Text style={styles.text}>
            XKCD it's not actually an acronym. It's just a word with no phonetic
            pronunciation -- a treasured and carefully-guarded point in the
            space of four-character strings.
          </Text>
        </Animatable.View>
      </View>
      <View>
        <Animatable.View animation="fadeIn" duration={200} delay={800}>
          <Text style={styles.subTitle}>How it came about</Text>
        </Animatable.View>
        <Animatable.View animation="fadeIn" duration={200} delay={1000}>
          <Text style={styles.text}>
            I was going through old math/sketching graph paper notebooks and
            didn't want to lose some of the work in them, so I started scanning
            pages. I took the more comic-y ones and put them up on a server I
            was testing out, and got a bunch of readers when BoingBoing linked
            to me. I started drawing more seriously, gained a lot more readers,
            started selling t-shirts on the site, and am currently shipping
            t-shirts and drawing this comic full-time.
          </Text>
        </Animatable.View>
      </View>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 20
  },
  title: {
    marginBottom: 40,
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: "center"
  },
  subTitle: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  text: {
    marginBottom: 40,
    fontSize: 14,
    textAlign: "center"
  }
});
