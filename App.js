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
import Laylo7 from './app/components/Laylo7';
import Laylo8 from './app/components/Laylo8';
import * as Animatable from 'react-native-animatable';
import { StackNavigator } from 'react-navigation';

EStyleSheet.build();

class LogoTitle1 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Laylo.jpg')}
      />
    );
  }
}

class LogoTitle2 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Laylo2.jpeg')}
      />
    );
  }
}

class LogoTitle3 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Laylo3.jpg')}
      />
    );
  }
}

class LogoTitle4 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Laylo4.jpg')}
      />
    );
  }
}

class LogoTitle5 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Laylo5.jpg')}
      />
    );
  }
}

class LogoTitle6 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Laylo6.jpg')}
      />
    );
  }
}

class LogoTitle7 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Laylo7.jpg')}
      />
    );
  }
}

class LogoTitle8 extends React.Component {
  render() {
    return (
      <Image style={styles.logo}
        source={require('./app/images/Laylo8.jpg')}
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
      <View style={styles.container}>
        <ScrollView style={styles.homeContainer}>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Laylo')}><LogoTitle1 />{"\n"}Flank/Charge{"\n"}/Canny Tumble{"\n"}{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Laylo2')}>{"\n"}{"\n"}<LogoTitle2 />{"\n"}Haste{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Laylo3')}><LogoTitle3 />{"\n"}Song{"\n"}{"\n"}{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Laylo4')}>{"\n"}{"\n"}<LogoTitle4 />{"\n"}Haste{"\n"}Song{"\n"}{"\n"}{"\n"}{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Laylo5')}><LogoTitle5 />{"\n"}Haste{"\n"}Song{"\n"}Flank/Charge{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Laylo6')}>{"\n"}{"\n"}<LogoTitle6 />{"\n"}Haste{"\n"}Song{"\n"}Fighting{"\n"}Defensively{"\n"}{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Laylo7')}>{"\n"}{"\n"}<LogoTitle7 />{"\n"}Two Weapon Fighting{"\n"}{"\n"}
          </Text>
          <Text style={styles.textStyle}
            onPress= { ()=> navigate('Laylo8')}>{"\n"}{"\n"}<LogoTitle8 />{"\n"}Haste{"\n"}Song{"\n"}Two Weapon Fighting{"\n"}{"\n"}
          </Text>
        </ScrollView>
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
  Laylo7: { screen: Laylo7 },
  Laylo8: { screen: Laylo8 },
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
          <Laylo7 />;
          <Laylo8 />;
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      flexWrap: 'wrap',
      backgroundColor: '#00047A',
      alignContent: 'center',
      padding: 5,
    },
    homeContainer: {
      flex: 1,
      flexDirection: 'column',
      flexWrap: 'wrap',
      backgroundColor: '#00047A',
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
      color: 'goldenrod'
    }
});
