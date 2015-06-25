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

var recipesMock = require('./data/recipesMock.js');

var Welcome = React.createClass({

  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    return {
      dataSource: ds.cloneWithRows(recipesMock)
    };
  },


  render: function() {

    function getListItem(rowData){
      return (
        <TouchableHighlight
          underlayColor='#D9C65D'>
          <View style={styles.listItem}>
            <Text>{rowData.name}</Text>
          </View>
        </TouchableHighlight>
      );
    }

    return (
        <ListView
          style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={rowData => getListItem(rowData)}
        />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3D1DA',
  },
  listItem:{
    padding:10
  }
});

module.exports = Welcome;
