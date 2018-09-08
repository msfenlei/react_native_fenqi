import React, { Component } from "react";
import {
  View,
  Dimensions,
  Text,
  Modal,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback
} from "react-native";
import PropTypes from "prop-types";
import FirstPage from "./FirstPage";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "column",
    width: screen.width * 0.75,
    marginTop: 100,
    marginBottom: 100,
    backgroundColor: "#fff"
  },
  titleStyle: {
    height: 40,
    fontSize: 18,
    marginTop: 25,
    marginLeft: 25,
    marginBottom: 0,
    color: "#212121"
  },
  listStyle: { marginLeft: 25 },
  itemStyle: {
    fontSize: 16,
    height: 50,
    color: "#212121",
    textAlignVertical: "center",
    marginLeft: 25
  }
});

export default class SelectedDialog extends Component {
  static propType = {
    title: PropTypes.string.isRequired
  };

  clickItem(item) {
    this.props.onItemClick(item);
  }

  render() {
    console.log(this.props.listData);
    let list = this.props.listData;
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.titleStyle}>{this.props.title}</Text>
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback
              onPress={() => {
                this.clickItem(item);
              }}
            >
              <View>
                <Text style={styles.itemStyle}>{item.key}</Text>
              </View>
            </TouchableWithoutFeedback>
          )}
        />
      </View>
    );
  }
}
