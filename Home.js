import React, { Component } from "react";
import { Dimensions, StyleSheet, Text } from "react-native";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import ScrollableTabView, {
  DefaultTabBar
} from "react-native-scrollable-tab-view";

const styles = StyleSheet.create({
  scene: {
    flex: 1
  },
  header: {
    height: 50,
    backgroundColor: "#f6f6f6",
    fontSize: 14
  },
  underLineStyle: {
    backgroundColor: "#0fc499",
    height: 2
  },
  titleTextStyle: {
    fontSize: 14,
    textAlign: "center"
  }
});

export default class Home extends Component {
  static navigationOptions = {
    title: "个人信息",
    headerStyle: {
      backgroundColor: "#01ca71",
      height:50
    },
    headerTitleStyle: {
      color: "#fff",
      fontSize: 18
    }
  };

  render() {
    return (
      <ScrollableTabView
        style={{ flex: 1 }}
        tabBarUnderlineStyle={styles.underLineStyle}
        initialPage={1}
        tabBarActiveTextColor="#0fc499"
        tabBarInactiveTextColor="#afb2b3"
        tabBarTextStyle={styles.titleTextStyle}
        tabBarBackgroundColor="#f6f6f6"
        renderTabBar={() => <DefaultTabBar />}
      >
        <FirstPage tabLabel="身份信息" navigation={this.props.navigation} />
        <SecondPage tabLabel="工作信息" />
        <ThirdPage tabLabel="人际关系" />
      </ScrollableTabView>
    );
  }
  gotoPage(page) {
    this.props.navigation.navigate(page);
  }

  
}
