import React, { Component } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Modal
} from "react-native";
import SelectedDialog from "./SelectedDialog";
import LoadingView from "./LoadingView";

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    backgroundColor: "#fff"
  },
  textStyle: {
    fontSize: 14,
    width: 80,
    color: "#495155",
    marginRight: 30,
    marginLeft: 15
  },
  lineStyle: { height: 1, marginRight: 15, marginLeft: 15 },
  imageStyle: { height: 15, width: 8, marginRight: 15 },
  inputStyle: { flex: 1, margin: 0, padding: 0 },

  buttonStyle: {
    flex: 1,
    color: "#fff",
    textAlign: "center",
    fontSize: 18
  }
});
export default class SecondPage extends Component {
  state = {
    title: "",
    showPop: false,
    list: [],
    popType: 1,
    salary: "请选择",
    payDay: "请选择",
    address: "请选择"
  };
  render() {
    return (
      <ScrollView
        data={[
          { key: "aaaa" },
          { key: "bbbb" },
          { key: "cccc" },
          { key: "dddd" }
        ]}
      >
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>你的姓名</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder={"请输入"}
            placeholderTextColor={"#6B7072"}
          />
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>工作岗位</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder={"请输入"}
            placeholderTextColor={"#6B7072"}
          />
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>单位名称</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder={"请输入"}
            placeholderTextColor={"#6B7072"}
          />
        </View>
        <View style={styles.lineStyle} />

        <TouchableWithoutFeedback onPress={this.selectedAddress}>
          <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>单位所在地</Text>
            <Text style={{ flex: 1 }}>{this.state.address}</Text>
            <Image
              style={styles.imageStyle}
              source={require("./image/ic_arrow_gray.png")}
            />
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.lineStyle} />

        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>单位地址</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder={"请输入"}
            placeholderTextColor={"#6B7072"}
          />
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>单位电话</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder={"必填"}
            placeholderTextColor={"#6B7072"}
          />
        </View>
        <View style={styles.lineStyle} />
        <TouchableWithoutFeedback onPress={this.getmonthlyProfit}>
          <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>月收入</Text>
            <Text style={{ flex: 1 }}>{this.state.salary}</Text>
            <Image
              style={styles.imageStyle}
              source={require("./image/ic_arrow_gray.png")}
            />
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.lineStyle} />
        <TouchableWithoutFeedback onPress={this.inputPayDay}>
          <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>发薪日</Text>
            <Text style={{ flex: 1 }}>{this.state.payDay}</Text>
            <Image
              style={styles.imageStyle}
              source={require("./image/ic_arrow_gray.png")}
            />
          </View>
        </TouchableWithoutFeedback>

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
          style={{
            flex: 1
          }}
          onRequestClose={this.cancelPopWindow}
          transparent={true}
          animationType={"fade"}
          visible={this.state.showPop}
        >
          <View
            style={{
              backgroundColor: "#000000",
              opacity: 0.8,
              justifyContent: "center",
              flexDirection: "column",
              flex: 1,
              alignItems: "center"
            }}
          >
            <SelectedDialog
              onItemClick={this.itemclick}
              title={this.state.title}
              style={{
                justifyContent: "center"
              }}
              listData={this.state.list}
            />
          </View>
        </Modal>
      </ScrollView>
    );
  }
  selectedAddress = () => {
    this.setState({
      popType: 1,
      title: "请选择省份",
      list: [],
      showPop: true
    });
  };

  getmonthlyProfit = () => {
    this.setState({
      title: "请选择月收入",
      popType: 2,

      list: [
        { key: "两千元以下" },
        { key: "2000-5000元" },
        { key: "5000-8000元" },
        { key: "8000-10000元" },
        { key: "10000-20000元" },
        { key: "20000-30000元" },
        { key: "20000-30000元" },
        { key: "30000-50000元" },
        { key: "50000以上" }
      ],
      showPop: true
    });
  };

  inputPayDay = () => {
    let listData = [];
    for (let i = 0; i < 31; i++) {
      listData[i] = {
        key: (i + 1).toString()
      };
    }
    this.setState({
      popType: 3,
      title: "请选择发薪日",
      list: listData,
      showPop: true
    });
  };
  cancelPopWindow = () => {
    this.setState({
      showPop: false
    });
  };
  itemclick = item => {
    if (this.state.popType == 1) {
      this.setState({
        address: item.key,
        showPop: false
      });
    }
    if (this.state.popType == 2) {
      this.setState({
        salary: item.key,
        showPop: false
      });
    }
    if (this.state.popType == 3) {
      this.setState({
        payDay: item.key,
        showPop: false
      });
    }
  };
}
