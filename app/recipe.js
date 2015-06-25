'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  NavigatorIOS,
  TouchableHighlight,
  ScrollView
} = React;

var Recipes = require('./recipes.js');

var Recipe = React.createClass({

  render: function() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={{uri: this.props.recipe.photoUrl}}
              style={{width:300, height:300}}></Image>
          </View>

          <View style={styles.details}>
            <Text style={styles.name}>
              {this.props.recipe.name}
            </Text>

            <Text style={styles.ingredients}>
              {this.props.recipe.ingredients}
            </Text>

          </View>

        </View>
      </ScrollView>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  imageContainer: {
    flex: 1,
    alignItems:'center'
  },
  details: {
    backgroundColor: '#fff',
    padding: 5
  },
  ingredients: {
    marginTop: 10,
    padding: 5
  },
  name: {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    fontSize: 20
  }
});

module.exports = Recipe;
