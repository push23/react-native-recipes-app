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

var KDSocialShare = require('NativeModules').KDSocialShare;

var Recipe = require('./recipe.js');

var recipesMock = require('./data/recipesMock.js');



var Recipes = React.createClass({

  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    return {
      dataSource: ds.cloneWithRows(recipesMock)
    };
  },

  _onShareButton: function(rowData){

    // https://raw.githubusercontent.com/doefler/react-native-social-share/master/animation-looping.gif

    KDSocialShare.tweet({
         'text':'Sharing'+ rowData.name
       },
       (results) => {
         console.log(results);
       }
     );

  },

  _onGoToRecipeButton: function(rowData){
    this.props.navigator.push({
      title: rowData.name,
      component: Recipe,
      rightButtonTitle: 'Share',
      onRightButtonPress: () => this._onShareButton(rowData),
      passProps: {
        recipe: rowData
      }
    });
  },

  getListItem: function(rowData){
    return (
      <TouchableHighlight
        onPress={() => this._onGoToRecipeButton(rowData)}
        underlayColor='#D9C65D'>
        <View style={styles.listItem}>
          <Text>{rowData.name}</Text>
        </View>
      </TouchableHighlight>
    );
  },

  render: function() {
    return (
        <ListView
          style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={rowData => this.getListItem(rowData)}
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

module.exports = Recipes;
