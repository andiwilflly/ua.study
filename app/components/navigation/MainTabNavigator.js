import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { Button, Text, Icon, Footer, FooterTab } from "native-base";

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SettingsScreen2 from '../screens/SettingsScreen2';

const config = Platform.select({
	web: { headerMode: 'screen' },
	default: {},
});

const HomeStack = createStackNavigator(
	{
		Home: HomeScreen,
	},
	config
);

HomeStack.navigationOptions = {
	tabBarLabel: 'Home'
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
	{
		Links: LinksScreen,
	},
	config
);

LinksStack.navigationOptions = {
	tabBarLabel: 'Links'
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
	{
		Settings: SettingsScreen,
		Settings2: SettingsScreen2
	},
	config
);

SettingsStack.navigationOptions = {
	tabBarLabel: 'Settings'
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
	HomeStack: {
		screen: HomeStack,
		navigationOptions: {
			tabBarOnPress: ((obj)=> {
				obj.navigation.navigate('HomeStack')
			}),
		}
	},
	LinksStack: {
		screen: LinksStack,
		navigationOptions: {
			tabBarOnPress: ((obj)=> {
				obj.navigation.navigate('LinksStack')
			}),
		}
	},
	SettingsStack: {
		screen: SettingsStack,
		navigationOptions: {
			tabBarOnPress: ((obj)=> {
				obj.navigation.navigate('SettingsStack')
			}),
		}
	},
}, {
	backBehavior: 'history',
	tabBarPosition: 'top',
	swipeEnabled: true,
	initialRouteName: 'SettingsStack',
	tabBarComponent: props => {
		return (
			<Footer>
				<FooterTab>
					<Button
						vertical
						onPress={() => props.navigation.navigate("HomeStack")}>
						<Text>Home</Text>
					</Button>
					<Button
						vertical
						onPress={() => props.navigation.navigate("LinksStack")}>
						<Text>Links</Text>
					</Button>
					<Button
						vertical
						onPress={() => props.navigation.navigate("SettingsStack")}>
						<Text>Settings</Text>
					</Button>
				</FooterTab>
			</Footer>
		);
	}
});

tabNavigator.path = '';

export default tabNavigator;
