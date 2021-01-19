import React, { useState, useEffect, useRef } from "react";
import { Audio } from "expo-av";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const options = [
  "सेवम्",
  "आम्रम्",
  "पुष्पशाकम्",
  "आग्रलम्",
  "नारङ्गम्",
  "दाडिमः",
  "पनसफलम्",
];
const options1 = [];
const next = `अग्रीम (NEXT)`;
const prev = `<< प्राथमिक(PREV)`;
const correct = "पुष्पशाकम्";
const OddOneOutScreen = (props) => {
  const [success, setSuccess] = useState("null");
  const [sound, setSound] = useState();
  const [selected, setSelected] = useState();
  const check = (index) => {
    if (options[index] === correct) {
      setSelected(correct);
      setSuccess("true");
    } else {
      setSelected(options[index]);
      setSuccess("false");
    }
  };
  const check1 = (index) => {
    if (options1[index] === correct) {
      setSelected(correct);
      setSuccess("true");
    } else {
      setSelected(options1[index]);
      setSuccess("false");
    }
  };
  async function PlaySound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/cauliflower.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={["#f04ca0", "#fd6602"]}
        style={{ flex: 1, width: Dimensions.get("window").width }}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#050637",
            width: Dimensions.get("window").width,
            justifyContent: "space-between",
          }}
        >
          <View style={{ marginLeft: "5%", marginTop: "7%" }}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Dashboard")}
            >
              <Image
                source={require("../../assets/back.png")}
                style={{ height: 20, width: 20, tintColor: "white" }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: "7%",
              flexDirection: "row",
              position: "relative",
              alignItems: "center",
              marginRight: 20,
            }}
          >
            <Image
              source={require("../../assets/coin.png")}
              style={{ height: 20, width: 20 }}
            />
            <Text style={{ color: "white", fontSize: 20, paddingLeft: 10 }}>
              3457
            </Text>
            <View style={{ paddingLeft: 10 }}>
              <Image
                source={require("../../assets/add.png")}
                style={{ height: 20, width: 20, tintColor: "red" }}
              />
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <Text
            style={[styles.headingText, { fontWeight: "bold", color: "white" }]}
          >
            विषम शब्द चयनम्
          </Text>
          <Text style={{ fontSize: 20, color: "white" }}>
            (Pick the odd one out)
          </Text>
        </View>

        <View style={styles.block}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "column" }}>
              {options.map((option, index) =>
                option == correct && option == selected ? (
                  <TouchableOpacity key={index} onPress={() => check(index)}>
                    <Text style={[styles.text, { color: "green" }]}>
                      {option}
                    </Text>
                  </TouchableOpacity>
                ) : option != correct && option == selected ? (
                  <TouchableOpacity
                    key={index}
                    style={{ color: "#fc0124" }}
                    onPress={() => check(index)}
                  >
                    <Text style={[styles.text, { color: "#fc0124" }]}>
                      {option}
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity key={index} onPress={() => check(index)}>
                    <Text style={[styles.text, { color: "white" }]}>
                      {option}
                    </Text>
                  </TouchableOpacity>
                )
              )}
            </View>
          </View>
          <View style={{ margin: "7%" }}>
            <Text
              style={{
                color: "white",
                fontSize: 25,
                fontWeight: "bold",
                margin: 10,
              }}
            >
              {selected}
            </Text>
          </View>
          {success === "true" && (
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 20,
                  color: "green",
                  textAlign: "center",
                  backgroundColor: "#050637",
                  padding: 10,
                  width: "55%",
                  fontWeight: "bold",
                  borderTopLeftRadius: 25,
                  borderBottomLeftRadius: 25,
                }}
              >
                उचित (Right)
              </Text>
              <TouchableOpacity
                onPress={() => {
                  PlaySound();
                }}
              >
                <View
                  style={{
                    backgroundColor: "#ffcc00",
                    padding: 10,
                    borderTopRightRadius: 25,
                    borderBottomRightRadius: 25,
                  }}
                >
                  <Image
                    source={require("../../assets/volume.png")}
                    style={{
                      height: 30,
                      width: 30,
                      tintColor: "#050637",
                      marginLeft: 10,
                    }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          )}
          {success === "false" && (
            <View style={{ width: "71.7%" }}>
              <Text
                style={{
                  fontSize: 20,
                  textAlign: "center",
                  color: "#fc0124",
                  backgroundColor: "#050637",
                  padding: 11,
                  fontWeight: "bold",
                  borderRadius: 50,
                }}
              >
                दोषपूर्ण (Wrong)
              </Text>
            </View>
          )}
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "70%",
            marginLeft: "15%",
          }}
        >
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 15,
                textAlign: "center",
                marginTop: 50,
                color: "white",
                fontWeight: "bold",
              }}
            >
              प्राथमिक
            </Text>
            <Text
              style={{
                fontSize: 15,
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              ( PREV )
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 15,
                textAlign: "center",
                marginTop: 50,
                color: "white",
                fontWeight: "bold",
              }}
            >
              अग्रीम
            </Text>
            <Text
              style={{
                fontSize: 15,
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              ( NEXT )
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};
export default OddOneOutScreen;
const styles = StyleSheet.create({
  container: {
    flex: 0.15,
    backgroundColor: "#050637",
    alignItems: "center",
    justifyContent: "center",
  },
  block: {
    marginTop: 5,
    alignItems: "center",
    flex: 0.8,
    width: Dimensions.get("window").width,
  },
  headingText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    margin: 5,
    backgroundColor: "#050637",
    textAlign: "center",
    paddingLeft: "20%",
    paddingRight: "20%",
    borderRadius: 50,
  },
});
