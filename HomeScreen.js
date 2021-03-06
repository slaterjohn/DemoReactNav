import React, { Component } from 'react';
import {
	Text,
	View,
	Button,
	StyleSheet
} from 'react-native';


export default class HomeScreen extends Component {

	static navigationOptions = {
		title: 'Welcome',
	};

	render() {
		const { navigate } = this.props.navigation;

		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Welcome to React Native!
				</Text>
				<Text style={styles.instructions}>
					To get started, edit index.ios.js
				</Text>
				<Text style={styles.instructions}>
					Press Cmd+R to reload,{'\n'}
					Cmd+D or shake for dev menu
				</Text>
				<Button
		          onPress={() => navigate('Page1', {
					  fuck: "yes",
					  onBack: (value)=>{
						  console.log('Function to happen on Back click');
					  }
				  })}
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
