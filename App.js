import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, ScrollView, View, Button, Alert, Image } from 'react-native';
import { StackNavigator } from 'react-navigation'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'The state of our nation is not good.',
  };
  render () {
    const { navigate } = this.props.navigation;
    let flag = {
      uri: 'https://images-na.ssl-images-amazon.com/images/I/71X%2BwfQBpKL._UX385_.jpg'
    }
    return (
      <View>
        <Button
          title="Click to see why"
          onPress={() => navigate('TheStateOfOurNation')}
        />
        <Image source={flag} style={styles.imageStyle}/>
      </View>
    );
  }
}

class TheStateOfOurNationScreen extends Component {
  render() {
    let trump1 = {
      uri: 'https://i.ytimg.com/vi/vIs_GoQXb_o/hqdefault.jpg'
    }
    let trump2 = {
      uri: 'https://i.ytimg.com/vi/6iZuN7nnVm8/maxresdefault.jpg'
    }
    let trump3 = {
      uri: 'http://i.imgur.com/uQ0W3Tt.jpg'
    }
    let trump4 = {
      uri: 'http://cdn.ebaumsworld.com/thumbs/2016/03/05/044117/84948165/trump-chiump.jpg'
    }
    let trump5 = {
      uri: 'http://www.bestfunnyjokes4u.com/wp-content/uploads/2016/08/donaldtrumpwithoutwig-296x300.png'
    }
    let trump6 = {
      uri: 'https://i.ytimg.com/vi/GIDkhZueh6Q/maxresdefault.jpg'
    }
    let trump7 = {
      uri: 'https://thoughtcatalog.files.wordpress.com/2015/08/991439100_c886528b73_o.jpg?w=786&h=590'
    }
    let trump8 = {
      uri: 'http://s.newsweek.com/sites/www.newsweek.com/files/styles/lg/public/2017/05/11/adsgads.jpg'
    }
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Scroll down to find something scary</Text>
        <ScrollView>
          <Image source={trump1} style={styles.imageStyle}/>
          <Image source={trump2} style={styles.imageStyle}/>
          <Image source={trump3} style={styles.imageStyle}/>
          <Image source={trump4} style={styles.imageStyle}/>
          <Image source={trump5} style={styles.imageStyle}/>
          <Image source={trump6} style={styles.imageStyle}/>
          <Image source={trump7} style={styles.imageStyle}/>
          <Image source={trump8} style={styles.imageStyle}/>
          <Button
            onPress={() => { Alert.alert('This man is our president! AHHH!') }}
            title="You know what's scary?"
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    padding: 20,
    fontSize: 17,
    color: '#229',
  },
  imageStyle: {
    width: 386,
    height: 220,
  }
});

const App = StackNavigator({
  Home: { screen: HomeScreen },
  TheStateOfOurNation: { screen: TheStateOfOurNationScreen },
});

export default App;

AppRegistry.registerComponent('TinyApp1', () => App);
