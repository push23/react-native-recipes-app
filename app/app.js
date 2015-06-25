'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} = React;

var Welcome = require('./welcome.js');

var Application = React.createClass({

  statics: {
    title: '<NavigatorIOS>',
    description: 'iOS navigation capabilities',
  },

  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Welcome',
          component: Welcome,
          backButtonTitle: 'Back',
        }}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

module.exports = Application;
