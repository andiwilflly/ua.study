import React from 'react';
import {
	View,
	Text,
	StatusBar,
	StyleSheet
} from 'react-native';
import AppNavigator from './app/components/navigation/AppNavigator';

console.log(23423, 42);

// import firebase from '@react-native-firebase/app';
// import firestore from '@react-native-firebase/firestore';
//
// const firebaseConfig = {
// 	apiKey: "AIzaSyC4vw1ZWNpsjH-ZOdK1VGHX2SnyTEe8Pqg",
// 	authDomain: "ua-study.firebaseapp.com",
// 	databaseURL: "https://ua-study.firebaseio.com",
// 	projectId: "ua-study",
// 	storageBucket: "ua-study.appspot.com",
// 	messagingSenderId: "1000269219215",
// 	appId: "1:1000269219215:web:8552a0d4fc16235fd337fa",
// 	measurementId: "G-3TKSMDNZ3X"
// };
// // Initialize Firebase
// if (!firebase.apps.length) {
// 	firebase.initializeApp(firebaseConfig);
// }

// adb shell input keyevent 82
// console.log(firebase, 42);

export default function App(props) {
	return (
		<View style={styles.container}>
			{Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
			<AppNavigator/>
		</View>
	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
