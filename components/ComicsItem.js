import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import * as Animatable from "react-native-animatable";

export default function ComicsItem({ press, item }) {
  const { title, img, day, month, year } = item;
  return (
    <Animatable.View animation="fadeIn" duration={200}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.item}
        onPress={() => press.navigate("Comic", { img: img })}
      >
        <View style={styles.text}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>
            {day.length === 1 ? `0${day}` : day} - {month} - {year}
          </Text>
        </View>
        <Image
          style={styles.image}
          source={{
            uri: img
          }}
        />
      </TouchableOpacity>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    padding: 10,
    borderColor: "#eece1a",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 10,
    backgroundColor: "#ffffff"
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain"
  },
  text: {
    flex: 1,
    justifyContent: "space-between",
    height: "100%",
    paddingTop: 10
  },
  title: {
    maxWidth: 200,
    color: "#000000",
    fontSize: 22,
    fontWeight: "bold"
  },
  date: {
    alignSelf: "flex-end",
    marginRight: 50
  }
});
