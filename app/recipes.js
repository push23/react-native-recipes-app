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

  render: function() {
    return (
      <View style={styles.container}>
        <Text>Recipes</Text>
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
    backgroundColor: '#C3D1DA',
  }
});

module.exports = Welcome;
