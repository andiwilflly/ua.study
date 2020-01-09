import React from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';


export default function SettingsScreen({ navigation }) {
	return (
		<Container>
			<Header />
			<Content>
				<Button light><Text> Light </Text></Button>
				<Button primary><Text> Primary </Text></Button>
				<Button success><Text> Success </Text></Button>
				<Button info><Text> Info </Text></Button>
				<Button warning><Text> Warning </Text></Button>
				<Button danger><Text> Danger </Text></Button>
				<Button dark><Text> Dark </Text></Button>
			</Content>
		</Container>
	);
}

SettingsScreen.navigationOptions = {
	title: 'app.json',
};
