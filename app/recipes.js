'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight,
  ListView
} = React;

var Recipes = require('./recipes.js');

var Welcome = React.createClass({

  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    return {
      dataSource: ds.cloneWithRows([
        'row 1',
        'row 2',
        'row 3',
        'row 4',
        'row 5'
        ]),
    };
  },

  render: function() {
    return (
        <ListView
          style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <Text>{rowData}</Text>
          }
        />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3D1DA',
  }
});

module.exports = Welcome;
