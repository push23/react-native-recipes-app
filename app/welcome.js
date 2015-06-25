'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight
} = React;

var Recipes = require('./recipes.js');

var Welcome = React.createClass({

  _onGetStartedButton: function(){
    this.props.navigator.push({
      title: 'Recipes',
      component: Recipes
      });
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Awesome Recipes App!
        </Text>
        <Text style={styles.credits}>
            by React Native
        </Text>

        <TouchableHighlight
          onPress={this._onGetStartedButton}
          style={styles.button}
          underlayColor='#ccc'>
          <Text>
              Get Started
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 64,
    backgroundColor: '#5A708E',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff'
  },
  credits: {
    textAlign: 'center',
    color: '#ccc',
    marginBottom: 5,
  },
  button: {
    borderColor: '#555',
    borderWidth: 1,
    padding: 5,
    backgroundColor: '#eee',
    borderRadius: 2,
    marginTop: 20
  }
});

module.exports = Welcome;
