import React, {Component} from 'react'
import {View, Animated, Easing} from 'react-native'

export default class LoadingView extends Component {
    constructor(props) {
        super(props);
        this.rotateValue = new Animated.Value(0)
    }

    componentDidMount() {
        this.rotateValue.setValue(0);
        Animated.timing(this.rotateValue, {
            toValue: 1,
            duration: 4000,
            easeing: Easing.linear
        }).start();
    }

    render() {
        const spin = this.rotateValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });
        return (<Animated.Image
            style={{
                ...this.props.style,
                transform: [{rotate: spin}],
            }}
            source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
        />);


    }

}