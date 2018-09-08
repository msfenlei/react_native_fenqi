import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  Modal
} from "react-native";
import SelectedDialog from "./SelectedDialog";
import ToastExample from "./ToastExample";
import { createStackNavigator } from "react-navigation";

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 14,
    color: "#495155",
    marginRight: 50,
    marginLeft: 15
  },
  inputStyle: { flex: 1, margin: 0, padding: 0 },

  viewStyle: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    backgroundColor: "#fff"
  },
  groupStyle: { height: 50, flexDirection: "column" },
  lineStyle: { height: 1, marginRight: 15, marginLeft: 15 },
  imageStyle: { height: 15, width: 8, marginRight: 15 },
  bottomImageStyle: { height: 76, width: 106, marginRight: 15 },
  buttonStyle: {
    flex: 1,
    color: "#fff",
    textAlign: "center",
    fontSize: 18
  }
});
export default class FirstPage extends Component {
  state = {
    popType: 1,
    showPop: false,
    list: [],
    title: "",
    education: "请选择",
    city: {},
    province: { name: "请输入" },
    region: {}
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
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
            <Text style={styles.textStyle}>身份证号</Text>
            <TextInput
              style={styles.inputStyle}
              keyboardType={"numeric"}
              placeholder={"请输入"}
              placeholderTextColor={"#6B7072"}
            />
          </View>
          <View style={styles.lineStyle} />
          <TouchableWithoutFeedback onPress={this.getprovince}>
            <View style={styles.viewStyle}>
              <Text style={styles.textStyle}>现居城市</Text>
              <Text style={{ flex: 1 }}>
                {this.state.province.name} {this.state.city.name}
              </Text>
              <Image
                style={styles.imageStyle}
                source={require("./image/ic_arrow_gray.png")}
              />
            </View>
          </TouchableWithoutFeedback>

          <View style={styles.lineStyle} />
          <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>现居地址</Text>
            <TextInput
              style={styles.inputStyle}
              placeholder={"请输入"}
              placeholderTextColor={"#6B7072"}
            />
          </View>
          <View style={styles.lineStyle} />
          <TouchableWithoutFeedback
            onPress={() => {
              this.selectEducation();
            }}
          >
            <View style={styles.viewStyle}>
              <Text style={styles.textStyle}>最高学历</Text>
              <Text style={{ flex: 1 }}>{this.state.education}</Text>
              <Image
                style={styles.imageStyle}
                source={require("./image/ic_arrow_gray.png")}
              />
            </View>
          </TouchableWithoutFeedback>

          <View style={styles.lineStyle} />
          <TouchableWithoutFeedback
            onPress={() => {
              this.selectdentityCard(1);
            }}
          >
            <View
              style={{
                height: 100,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#fff"
              }}
            >
              <Text style={styles.textStyle}>身份证照</Text>
              <Image
                style={styles.bottomImageStyle}
                source={require("./image/certificate_idcardfront_take.png")}
              />
              <Image
                style={styles.bottomImageStyle}
                source={require("./image/certificate_idcardback_take.png")}
              />
            </View>
          </TouchableWithoutFeedback>

          <View style={styles.lineStyle} />

          <View
            style={{
              height: 100,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff"
            }}
          >
            <Text style={styles.textStyle}>人脸识别</Text>
            <Image
              style={styles.bottomImageStyle}
              source={require("./image/certificate_facepp_detect.png")}
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
            style={{
              flex: 1
            }}
            onRequestClose={() => {
              this.cancelPopWindow();
            }}
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
                onItemClick={content => {
                  this.itemclick(content);
                }}
                title={this.state.title}
                style={{
                  justifyContent: "center"
                }}
                listData={this.state.list}
              />
            </View>
          </Modal>
        </ScrollView>
      </View>
    );
  }

  selectEducation() {
    this.setState({
      popType: 2,
      showPop: true,
      title: "请选择学历",
      list: [
        { key: "初中以下" },
        { key: "中专" },
        { key: "高中" },
        { key: "大专" },
        { key: "本科" },
        { key: "硕士及以上" }
      ]
    });
  }

  /**
   * 弹窗回调
   * @param {} item
   */
  itemclick(item) {
    if (this.state.popType == 1) {
      if (
        !this.state.province.name == null &&
        !this.state.city.name == null &&
        !this.state.region.name == null
      ) {
        this.setState({
          province: { name: "请选择", id: "" },
          city: {},
          region: {},
          showPop: false
        });
      }

      if (this.state.province.id == null) {
        this.setState({
          province: { name: item.key, id: item.id },
          showPop: false
        });
        return;
      }
      if (this.state.city.id == null) {
        this.setState({
          city: { name: item.key, id: item.id },
          showPop: false
        });
        return;
      }
      if (this.state.region.id == null) {
        this.setState({
          region: { name: item.key, id: item.id },
          showPop: false
        });
        return;
      }
    }
    if (this.state.popType == 2) {
      this.setState({
        education: item.key,
        showPop: false
      });
    }
  }
  selectdentityCard(type) {
    this.props.navigation.navigate("CameraPage");
  }
  callBack(imgUri, pickType) {
    if (imgUri == null || imgUri.isEmpty()) {
      return;
    }
    alert(imgUri);
    if (pickType == 1) {
      this.setState({ FrontPhotoUri: imgUri });
    } else {
      this.setState({ reversePhotoUri: imgUri });
    }
  }
  inputCity() {
    this.setState({
      showPop: true,
      title: "请选择省份",
      popType: 1
    });
  }

  cancelPopWindow() {
    this.setState({
      showPop: false
    });
  }

  /**
   * 获取省列表
   */
  getprovince = () => {
    let id = this.state.province.id
    let url = "http://api.jisuapi.com/area/province?appkey=6da94f8dfbde451c"
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.status == 0) {
          let listData = [];
          for (let i = 0; i < responseJson.result.length; i++) {
            listData[i] = {
              key: responseJson.result[i].name
            };
          }
          this.setState({
            popType: 1,
            showPop: true,
            title: "请选择省",
            list: listData
          });
        } else {
          console.error(responseJson.msg);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };
}
