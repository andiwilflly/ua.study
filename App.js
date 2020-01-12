import React from 'react';
import { AppState } from 'react-native';
import { Spinner } from 'native-base';
import firebase from 'firebase';
// MobX
import { observer } from "mobx-react";
// Store
import store from "./app/store";
// Components
import LogInScreen from "./app/components/screens/LogInScreen.component";
import AppNavigator from './app/components/navigation/AppNavigator';


const firebaseConfig = {
	apiKey: "AIzaSyC4vw1ZWNpsjH-ZOdK1VGHX2SnyTEe8Pqg",
	authDomain: "ua-study.firebaseapp.com",
	databaseURL: "https://ua-study.firebaseio.com",
	projectId: "ua-study",
	storageBucket: "ua-study.appspot.com",
	messagingSenderId: "1000269219215",
	appId: "1:1000269219215:web:8552a0d4fc16235fd337fa",
	measurementId: "G-3TKSMDNZ3X"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(function(firebaseUser) {
	if (firebaseUser) {
		store.logIn({
			email: firebaseUser.email,
			uid: firebaseUser.uid
		});
		store.update({ isAppReady: true });
		console.log('login', store, store.user.uid, firebaseUser.email, firebaseUser.uid);
	} else {
		console.log('logout');
	}
});


// adb shell input keyevent 82
// adb devices
class App extends React.Component {

	constructor(props) {
		super(props);
		store.loadFromAsyncStorage();
	}


	componentDidMount() {
		AppState.addEventListener('change', this._handleAppStateChange);
	}


	componentWillUnmount() {
		AppState.removeEventListener('change', this._handleAppStateChange);
	}


	_handleAppStateChange = (nextAppState) => {
		if(nextAppState !== 'active') store.saveToAsyncStorage();
	};


	render() {
		console.log(store);
		if(store.isAppReady === false) return <Spinner />;
		if(!store.user) return <LogInScreen />;
		return <AppNavigator/>;
	}
}


export default observer(App);



