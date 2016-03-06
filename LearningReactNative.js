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
      forecast: null,
    };
  },

  _handleTextChange(event) {
    var zip = event.nativeEvent.text;
    this.setState({zip: zip});
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + zip + '&units=metric')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          forecast: {
            main: responseJson.weather[0].main,
            description: responseJson.weather[0].description,
            temp: responseJson.main.temp,
          }
        });
      })
      .catch((error) => {
        console.warn(error);
      });
  },

  render() {
    var content = null;
    if (this.state.forecast !== null) {
      content = <Forecast
                  main={this.state.forecast.main}
                  description={this.state.forecast.description}
                  temp={this.state.forecast.temp} />;
    }
    return (
      <View style={styles.container}>
        <Image
          source={require('image!clouds')}
          resizeMode='cover'
          style={styles.backdrop}>
          <View style={styles.overlay}>
            <View style={styles.row}>
              <Text style={styles.mainText}>
                Current weather for
              </Text>
              <View style={styles.zipContainer}>
                <TextInput
                  style={[styles.zipcode, styles.mainText]}
                  returnKeyType='go'
                  onSubmitEditing={this._handleTextChange}/>
              </View>
            </View>
            {content}
          </View>
        </Image>
      </View>
    );
  }
});

var baseFontSize = 16;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },
  backdrop: {
    flex: 1,
    flexDirection: 'column'
  },
  overlay: {
    paddingTop: 5,
    backgroundColor: '#000000',
    opacity: 0.5,
    flexDirection: 'column',
    alignItems: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    padding: 30,
  },
  zipContainer: {
    flex: 1,
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3,
    backgroundColor: '#FF0000',
  },
  zipCode: {
    width: 50,
    height: baseFontSize,
  },
  mainText: {
    flex: 1,
    fontSize: baseFontSize,
    color: '#FFFFFF',
  },
});

module.exports = LearningReactNative;
