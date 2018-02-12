import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity
       } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Laylo from './app/components/Laylo';
import Laylo2 from './app/components/Laylo2';
import * as Animatable from 'react-native-animatable';
import { StackNavigator } from 'react-navigation';

EStyleSheet.build();

class LogoTitle1 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Laylo.jpg')}
        style={{ width: 100, height: 150 }}
      />
    );
  }
}

class LogoTitle2 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Laylo2.jpeg')}
        style={{ width: 100, height: 150 }}
      />
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'LAYLO',
  };
  render (){
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.homeContainer}>
        <Text
          onPress= { ()=> navigate('Laylo')}>{"\n"}Haste{"\n"}Song{"\n"}{"\n"}<LogoTitle1 />
        </Text>
        <Text
          onPress= { ()=> navigate('Laylo2')}>Haste{"\n"}Song{"\n"}Fighting{"\n"}Defensively{"\n"}{"\n"}<LogoTitle2 />
        </Text>
      </View>
    )
  }
}

const NavigationApp = StackNavigator({
  Home: { screen: HomeScreen },
  Laylo: { screen: Laylo },
  Laylo2: { screen: Laylo2 },
  }, {
    navigationOptions: {
      headeStyle: {
        marginTop: Expo.Constants.statusBarHeight
      }
    }
  })

export default class App extends React.Component {
  render() {
    return <NavigationApp />;
           <Laylo />;
           <Laylo2 />;
  }
}


const styles = StyleSheet.create({
    homeContainer: {
      flex: 1,
      flexDirection: 'column',
      flexWrap: 'nowrap',
      backgroundColor: '#2E5339',
      alignContent: 'space-between',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {

    },
});
