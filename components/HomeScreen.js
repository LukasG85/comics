import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  Button,
  Image
} from "react-native";
import * as Animatable from "react-native-animatable";
import ComicsItem from "./ComicsItem";
import background from "../img/bcg.jpg";

export default function App(props) {
  const [comics, setComics] = useState([]);
  const [currentComicsNum, setCurrentComicsNum] = useState(null);
  const [error, setError] = useState(false);

  const getCurrentComics = () => {
    fetch(`https://xkcd.com/info.0.json`)
      .then(res => res.json())
      .then(data => {
        setComics([...comics, data]);
        setCurrentComicsNum(data.num);
      })
      .catch(error => setError(true));
  };

  const getRestComics = () => {
    const countComics = 7;
    if (currentComicsNum) {
      for (let i = 1; i <= countComics; i++) {
        fetch(`https://xkcd.com/${currentComicsNum - i}/info.0.json`)
          .then(res => res.json())
          .then(data =>
            setComics(prevComics => {
              return [...prevComics, data];
            })
          );
      }
    }
  };

  useEffect(() => {
    getCurrentComics();
  }, []);

  useEffect(() => {
    getRestComics();
  }, [currentComicsNum]);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        style={{ width: "100%", height: "100%" }}
      >
        {comics.length >= 8 ? (
          <FlatList
            data={comics}
            renderItem={({ item }) => (
              <ComicsItem
                title={item.title}
                img={item.img}
                item={item}
                press={props.navigation}
              />
            )}
            keyExtractor={item => item.title}
          />
        ) : (
          <View style={styles.message}>
            {error ? (
              <View style={styles.messageContainer}>
                <Text style={styles.error}>I can't find comics :/</Text>
              </View>
            ) : (
              <View style={styles.messageContainer}>
                <Animatable.View
                  animation="pulse"
                  duration={600}
                  iterationCount="infinite"
                >
                  <Text style={styles.text}>Loading Comics...</Text>
                </Animatable.View>
              </View>
            )}
          </View>
        )}
        <View>
          <Button
            color="#eece1a"
            onPress={() => props.navigation.navigate("Info")}
            title="About XKCD"
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  message: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  messageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%"
  },
  text: {
    color: "#eece1a",
    fontSize: 38,
    fontWeight: "bold"
  },
  error: {
    color: "#CF000F",
    fontSize: 38,
    fontWeight: "bold"
  }
});
