import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  Dimensions
} from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

import { SEARCH } from "../store/actionTypes";

export default function SearchSuggestions(props) {
  const selector = useSelector(state => state.search);
  const dispatch = useDispatch();
  const [dummies, setDummies] = useState([
    "Coldplay",
    "Avenged Sevenfold",
    "Linkin Park",
    "Jason Mraz",
    "Justin Bieber",
    "Agnes",
    "Shakira",
    "Jennifer Lopez",
    "Twenty One Pilots",
    "Clean Bandit",
    "agnez mo"
  ]);
  const { width } = Dimensions.get("window");

  const styles = StyleSheet.create({
    searchSuggest: {
      flexDirection: "row",
      paddingVertical: 10,
      alignSelf: "center",
      width: width - 45
    },
    timeIcon: {
      flex: 1,
      color: "#bdc3c7"
    },
    textSuggest: {
      flex: 9,
      fontSize: 17,
      color: "blue",
      paddingLeft: 10
    }
  });

  const handleChange = input => {
    dispatch({ type: SEARCH, input });
  };

  return (
    <ScrollView>
      {dummies.map(dummy => {
        return (
          <View style={styles.searchSuggest} key={dummy}>
            <TouchableOpacity
              style={{ flex: 0.9, flexDirection: "row" }}
              onPress={async () => {
                // await props.setText(dummy);
                await handleChange(dummy);
                props.handleSearch();
              }}
            >
              <Entypo name="back-in-time" size={20} style={styles.timeIcon} />
              <Text style={styles.textSuggest}>{dummy}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flex: 0.1 }}
              onPress={() => {
                handleChange(dummy);
                // props.setText(dummy)
              }}
            >
              <Feather
                name="arrow-up-left"
                size={25}
                style={{ color: "#bdc3c7" }}
              />
            </TouchableOpacity>
          </View>
        );
      })}
    </ScrollView>
  );
}
