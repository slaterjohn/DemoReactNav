/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from 'HomeScreen.js';

const DemoReactNav = StackNavigator({
	Home: {
		screen: HomeScreen
	},
});

AppRegistry.registerComponent('DemoReactNav', () => DemoReactNav);
