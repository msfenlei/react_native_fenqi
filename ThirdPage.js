import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  Modal,
  TouchableWithoutFeedback
} from "react-native";

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    backgroundColor: "#fff"
  },
  imageStyle: { height: 15, width: 8, marginRight: 15 },
  lineStyle: { height: 1, marginRight: 15, marginLeft: 15 },
  textStyle: {
    fontSize: 14,
    color: "#495155",
    width: 80,
    marginRight: 30,
    marginLeft: 15
  },
  inputStyle: { flex: 1, padding: 0, margin: 0 },
  buttonStyle: {
    flex: 1,
    color: "#fff",
    textAlign: "center",
    fontSize: 18
  },
  popwindowTextStyle: {
    marginLeft: 15
  }
});
export default class ThirdPage extends Component {
  state = {
    firstPop: false,
    secondPop: false,
    relationshipone: "请选择",
    relationshipone2: "请选择"
  };
  render() {
    return (
      <ScrollView>
        <TouchableWithoutFeedback onPress={this.showFirstPop}>
          <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>与本人关系</Text>
            <Text style={{ flex: 1 }}>{this.state.relationshipone}</Text>
            <Image
              style={styles.imageStyle}
              source={require("./image/ic_arrow_gray.png")}
            />
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.lineStyle} />
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>姓名</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder={"请输入"}
            placeholderTextColor={"#6B7072"}
          />
         
        </View>

        <View style={styles.lineStyle} />

        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>电话</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder={"请输入"}
            placeholderTextColor={"#6B7072"}
          />
        </View>
        <View style={{ height: 8, marginRight: 15, marginLeft: 15 }} />
        <TouchableWithoutFeedback onPress={this.showSecondPop}>
          <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>与本人关系</Text>
            <Text style={{ flex: 1 }}>{this.state.relationshipone2}</Text>
            <Image
              style={styles.imageStyle}
              source={require("./image/ic_arrow_gray.png")}
            />
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.lineStyle} />
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>姓名</Text>
          <TextInput
            style={{ flex: 1 }}
            placeholder={"请输入"}
            placeholderTextColor={"#6B7072"}
          />
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>电话</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder={"请输入"}
            placeholderTextColor={"#6B7072"}
          />
        </View>
        <View style={styles.lineStyle} />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            height: 50,
            backgroundColor: "#01ca71",
            marginLeft: 15,
            marginBottom: 30,
            marginTop: 30,
            marginRight: 15
          }}
        >
          <Text style={styles.buttonStyle}>提交</Text>
        </View>
        <Modal
          animationType={"fade"}
          visible={this.state.firstPop}
          onRequestClose={() => {
            this.setState({
              firstPop: false
            });
          }}
          transparent={true}
        >
          <TouchableWithoutFeedback onPress={this.canclePop}>
            <View style={{ flex: 1 }}>
              <View
                style={{ flex: 1, flexDirection: "column", marginTop: 100 }}
              >
                <TouchableWithoutFeedback onPress={this.firstSelected}>
                  <View
                    flexDirection="row"
                    alignItems="center"
                    style={{
                      backgroundColor: "#fff",
                      height: 50,
                      marginLeft: 110
                    }}
                  >
                    <Text style={styles.popwindowTextStyle}>父母</Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={this.firstSelected2}>
                  <View
                    flexDirection="row"
                    alignItems="center"
                    style={{
                      backgroundColor: "#fff",
                      height: 50,
                      marginLeft: 110
                    }}
                  >
                    <Text style={styles.popwindowTextStyle}>配偶</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <Modal
          visible={this.state.secondPop}
          onRequestClose={() => {
            this.setState({
              secondPop: false
            });
          }}
          animationType={"fade"}
          transparent={true}
        >
          <TouchableWithoutFeedback onPress={this.canclePop}>
            <View style={{ flex: 1 }}>
              <View
                style={{ flex: 1, flexDirection: "column", marginTop: 262 }}
              >
                <TouchableWithoutFeedback onPress={this.secondSelected}>
                  <View
                    flexDirection="row"
                    alignItems="center"
                    style={{
                      backgroundColor: "#fff",
                      height: 50,
                      marginLeft: 110
                    }}
                  >
                    <Text style={styles.popwindowTextStyle}>父母</Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={this.secondSelected2}>
                  <View
                    flexDirection="row"
                    alignItems="center"
                    style={{
                      backgroundColor: "#fff",
                      height: 50,
                      marginLeft: 110
                    }}
                  >
                    <Text style={styles.popwindowTextStyle}>配偶</Text>
                  </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={this.secondSelected3}>
                  <View
                    flexDirection="row"
                    alignItems="center"
                    style={{
                      backgroundColor: "#fff",
                      height: 50,
                      marginLeft: 110
                    }}
                  >
                    <Text style={styles.popwindowTextStyle}>兄弟</Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={this.secondSelected4}>
                  <View
                    flexDirection="row"
                    alignItems="center"
                    style={{
                      backgroundColor: "#fff",
                      height: 50,
                      marginLeft: 110
                    }}
                  >
                    <Text style={styles.popwindowTextStyle}>姐妹</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </ScrollView>
    );
  }
  showFirstPop = () => {
    this.setState({
      firstPop: true
    });
  };
  showSecondPop = () => {
    this.setState({
      secondPop: true
    });
  };
  canclePop = () => {
    this.setState({
      firstPop: false,
      secondPop: false
    });
  };
  firstSelected = () => {
    this.setState({
      relationshipone: "父母",
      firstPop: false
    });
  };
  firstSelected2 = () => {
    this.setState({
      relationshipone: "配偶",
      firstPop: false
    });
  };
  secondSelected = () => {
    this.setState({
      relationshipone2: "父母",
      secondPop: false
    });
  };
  secondSelected2 = () => {
    this.setState({
      relationshipone2: "配偶",
      secondPop: false
    });
  };
  secondSelected3 = () => {
    this.setState({
      relationshipone2: "兄弟",
      secondPop: false
    });
  };
  secondSelected4 = () => {
    this.setState({
      relationshipone2: "姐妹",
      secondPop: false
    });
  };
}
