/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');
var {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image
} = React;

var LearningReactNative = React.createClass({
  getInitialState() {
    return ({
      zip: ''
    });
  },

  _handleTextChange(event) {
    console.log(event.nativeEvent.text);

    this.setState({
      zip: event.nativeEvent.text
    });
  },

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Your input: {this.state.zip}
        </Text>
        <TextInput
          style={styles.input}
          onSubmitEditing={this._handleTextChange} />
      </View>
    );
  }
});

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
  input: {
    fontSize: 20,
    borderWidth: 2,
    height: 40,
  },
});

module.exports = LearningReactNative;
