import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  ScrollView,
  Dimensions,
       } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Login from './app/components/Login';
import Laylo from './app/components/Laylo';
import Laylo2 from './app/components/Laylo2';
import Laylo3 from './app/components/Laylo3';
import Laylo4 from './app/components/Laylo4';
import Laylo5 from './app/components/Laylo5';
import Laylo6 from './app/components/Laylo6';
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

class LogoTitle3 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Laylo3.jpg')}
        style={{ width: 100, height: 150 }}
      />
    );
  }
}

class LogoTitle4 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Laylo4.jpg')}
        style={{ width: 100, height: 150 }}
      />
    );
  }
}

class LogoTitle5 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Laylo5.jpg')}
        style={{ width: 100, height: 150 }}
      />
    );
  }
}

class LogoTitle6 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Laylo6.jpg')}
        style={{ width: 100, height: 150 }}
      />
    );
  }
}

class LayloHomeScreen extends React.Component {
  static navigationOptions = {
    title: 'LAYLO',
  };
  render (){
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.homeContainer}>
        <Text
          onPress= { ()=> navigate('Laylo')}><LogoTitle1 />{"\n"}Flank/Charge{"\n"}/Canny Tumble{"\n"}{"\n"}
        </Text>
        <Text
          onPress= { ()=> navigate('Laylo2')}>{"\n"}{"\n"}<LogoTitle2 />{"\n"}Haste{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}
        </Text>
        <Text
          onPress= { ()=> navigate('Laylo3')}><LogoTitle3 />{"\n"}Song{"\n"}{"\n"}{"\n"}
        </Text>
        <Text
          onPress= { ()=> navigate('Laylo4')}>{"\n"}{"\n"}<LogoTitle4 />{"\n"}Haste{"\n"}Song{"\n"}{"\n"}{"\n"}{"\n"}
        </Text>
        <Text
          onPress= { ()=> navigate('Laylo5')}><LogoTitle5 />{"\n"}Haste{"\n"}Song{"\n"}Flank/Charge{"\n"}
        </Text>
        <Text
          onPress= { ()=> navigate('Laylo6')}>{"\n"}{"\n"}<LogoTitle6 />{"\n"}Haste{"\n"}Song{"\n"}Fighting{"\n"}Defensively{"\n"}{"\n"}
        </Text>
      </View>
    )
  }
}

const NavigationApp = StackNavigator({
  // Home: { screen: Login },
  LayloHome: { screen: LayloHomeScreen },
  Laylo: { screen: Laylo },
  Laylo2: { screen: Laylo2 },
  Laylo3: { screen: Laylo3 },
  Laylo4: { screen: Laylo4 },
  Laylo5: { screen: Laylo5 },
  Laylo6: { screen: Laylo6 },
  }, {
    navigationOptions: {
      headerStyle: {
        marginTop: Expo.Constants.statusBarHeight
      }
    }
  })

export default class App extends React.Component {
  render() {
    return <NavigationApp />;
          <LayloHomeScreen />;
          <Laylo />;
          <Laylo2 />;
          <Laylo3 />;
          <Laylo4 />;
          <Laylo5 />;
          <Laylo6 />;
  }
}


const styles = StyleSheet.create({
    homeContainer: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: '#5CA4A9',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
    },
    logo: {
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },
});
