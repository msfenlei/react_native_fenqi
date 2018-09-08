"use strict";
import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { RNCamera } from "react-native-camera";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black"
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  capture: {
    flex: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
    margin: 20
  }
});
export default class CameraPage extends Component {
  static navigationOptions = {
    tabBarVisible: false, // 隐藏底部导航栏
    header: null //隐藏顶部导航栏
  };
  render() {
    const { navigation } = this.props;
    const title = navigation.getParam('Type', 'NO-ID');

    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={"Permission to use camera"}
          permissionDialogMessage={
            "We need your permission to use your camera phone"
          }
        />
        <View
          style={{ flex: 0, flexDirection: "row", justifyContent: "center" }}
        >
          <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style={styles.capture}
          >
            <Text style={{ fontSize: 14 }}>{title}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      aler("camer");
      // this.props.navigation.goBack();
    }
  };
}
