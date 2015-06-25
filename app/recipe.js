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

var Recipe = React.createClass({

  render: function() {
    return (
      <View style={styles.container}>
        <Text>
          Recipe View
        </Text>
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
  }
});

module.exports = Recipe;
