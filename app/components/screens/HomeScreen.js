import React from 'react';

import { Container, Header, Title, Content, Spinner, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';


export default function HomeScreen() {
	return (
		<Container>
			<Header>
				<Left>
				</Left>
				<Body>
					<Title>Header</Title>
				</Body>
				<Right />
			</Header>
			<Content>
					<Spinner />
			</Content>
		</Container>
	);
}

HomeScreen.navigationOptions = {
	headerShown: false,
};
