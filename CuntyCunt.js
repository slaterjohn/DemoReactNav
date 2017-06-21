import React, { Component } from 'react';
import {
	Text,
	View,
	Button,
	StyleSheet,
	StatusBar
} from 'react-native';


export default class CuntyCunt extends Component {

	static navigationOptions = {
		title: 'Cunts',
	};

	render() {
		const { navigate, goBack, state } = this.props.navigation;

		return (
			<View style={styles.container}>
				<StatusBar backgroundColor="blue" barStyle="light-content" />
				<Text style={styles.welcome}>
					FUCK OFF {this.props.navigation.state.params.fuck}
				</Text>
				<Button
		          onPress={() => {
					  this.props.navigation.state.params.onBack();
					  goBack();
				  }}
		          title="Chat with Lucy"
		        />
			</View>
		);
	}
}



const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
		welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
		instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
