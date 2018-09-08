import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "VennyChen",
      age: 24,
      sex: "男"
    };
  }

  render() {
    return (
      <View style={{ position: 'absolute' ,backgroundColor:'red' }}>
        <Text>第一个布局</Text>
        <Text style={{ position: 'absolute' ,backgroundColor:'yellow' }}>第二个布局</Text>
      </View>
    );
  }

  showStudentName() {
    //第三处
    alert(this.state.name);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});
