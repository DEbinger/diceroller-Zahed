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
import Zahed from './app/components/Zahed';
import Zahed2 from './app/components/Zahed2';
import Zahed3 from './app/components/Zahed3';
import Zahed4 from './app/components/Zahed4';
import Zahed5 from './app/components/Zahed5';
import * as Animatable from 'react-native-animatable';
import { StackNavigator } from 'react-navigation';

EStyleSheet.build();

class LogoTitle1 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Zahed.png')}
      />
    );
  }
}

class LogoTitle2 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Zahed2.jpg')}
      />
    );
  }
}

class LogoTitle3 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Zahed3.jpg')}
      />
    );
  }
}

class LogoTitle4 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Zahed4.png')}
      />
    );
  }
}

class LogoTitle5 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Zahed5.jpg')}
      />
    );
  }
}

class ZahedHomeScreen extends React.Component {
  static navigationOptions = {
    title: 'ZAHED',
  };
  render (){
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.homeContainer}>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Zahed')}><LogoTitle1 />Shocking Grasp w/Concentration Check{"\n"}{"\n"}{"\n"}{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Zahed2')}>{"\n"}{"\n"}<LogoTitle2 />{"\n"}Shocking Grasp w/Concentration Check{"\n"}Haste{"\n"}{"\n"}{"\n"}{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Zahed3')}><LogoTitle3 />Shocking Grasp w/Concentration Check{"\n"}Song{"\n"}{"\n"}{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Zahed4')}><LogoTitle4 />Shocking Grasp w/Concentration Check{"\n"}Haste{"\n"}Song{"\n"}{"\n"}{"\n"}{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Zahed5')}><LogoTitle5 />Shocking Grasp w/Concentration Check{"\n"}Haste{"\n"}Song{"\n"}Flank/Charge{"\n"}
          </Text>
        </ScrollView>
      </View>
    )
  }
}

const NavigationApp = StackNavigator({
  // Home: { screen: Login },
  ZahedHome: { screen: ZahedHomeScreen },
  Zahed: { screen: Zahed },
  Zahed2: { screen: Zahed2 },
  Zahed3: { screen: Zahed3 },
  Zahed4: { screen: Zahed4 },
  Zahed5: { screen: Zahed5 },
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
          <ZahedHomeScreen />;
          <Zahed />;
          <Zahed2 />;
          <Zahed3 />;
          <Zahed4 />;
          <Zahed5 />;
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      flexWrap: 'wrap',
      backgroundColor: '#F2F203',
      alignContent: 'center',
      padding: 5,
    },
    homeContainer: {
      flex: 1,
      flexDirection: 'column',
      flexWrap: 'wrap',
      backgroundColor: '#F2F203',
      alignContent: 'center',
      alignSelf: 'center',
      padding: 5,
    },
    logo: {
      marginTop: 5,
      width: 350,
      height: 500,
    },
    textStyle: {
      color: '#000066'
    }
});
