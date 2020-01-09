import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Text, Button } from 'native-base';
import firebase from 'firebase';
// MobX
import { observer } from "mobx-react";
import { observable } from "mobx";
// Store
import store from "../../store";



class LogInScreen extends Component {


	form = observable({
		email: '',
		password: ''
	});


	onSubmit = ()=> {
		console.log('submit');
		firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password)
			.then((firebaseUser)=> {
				store.user.logIn(firebaseUser);
				console.log('LOGGEN IN', firebaseUser);
			}).catch((e)=> {
				console.log('auth ERROR!');
		});
	};


	render() {
		return (
			<Container>
				<Header />
				<Content>
					<Form>
						<Item stackedLabel>
							<Label>Email ({ store.user.uid })</Label>
							<Input value={ this.form.email }
								   onChangeText={ (text)=> this.form.email = text } />
						</Item>
						<Item stackedLabel last>
							<Label>Password</Label>
							<Input value={ this.form.password }
								   onChangeText={ (text)=> this.form.password = text }
								   secureTextEntry  />
						</Item>
						<Button light onPress={ this.onSubmit }>
							<Text>Log in</Text>
						</Button>
					</Form>
				</Content>
			</Container>
		);
	}
}


export default observer(LogInScreen);
