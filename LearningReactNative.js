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

var Forecast = require('./Forecast');

var LearningReactNative = React.createClass({
  getInitialState() {
    return {
      zip: '',
      forecast: {
        main: 'Clouds',
        description: 'few clouds',
        temp: 45.7
      }
    }
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
        <Forecast
          main={this.state.forecast.main}
          description={this.state.forecast.description}
          temp={this.state.forecast.temp} />
        <TextInput
          style={styles.input}
          returnKeyType='go'
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
    backgroundColor: '#4D4D4D',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    height: 40,
  },
});

module.exports = LearningReactNative;
