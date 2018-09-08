import React, { Component } from 'react'
import{}from 'react-native'
export default class MyNavigator extends React.Component {
    static router = MyRouter;
    render() {
        const { state, dispatch } = this.props.navigation;
        const { routes, index } = state;

        // Figure out what to render based on the navigation state and the router:
        const Component = MyRouter.getComponentForState(state);

        // The state of the active child screen can be found at routes[index]
        let childNavigation = { dispatch, state: routes[index] };
        // If we want, we can also tinker with the dispatch function here, to limit
        // or augment our children's actions

        // Assuming our children want the convenience of calling .navigate() and so on,
        // we should call addNavigationHelpers to augment our navigation prop:
        childNavigation = addNavigationHelpers(childNavigation);

        return <Component navigation={childNavigation} />;
    }
}