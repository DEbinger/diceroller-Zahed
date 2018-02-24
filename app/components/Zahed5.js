import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
       } from 'react-native';
import { Button } from './Button';
import * as Animatable from 'react-native-animatable';

const {width, height} = Dimensions.get('window')

export default class Zahed extends React.Component {
  static navigationOptions = {
    title: '19|19|14 +11',
  };
  constructor(props) {
    super(props);

    this.state={

      // This is the Display number value, prior to button press
      NumberHolderD20S1 : 20,
      NumberHolderD20S2 : 20,
      NumberHolderD20S3 : 20,
      NumberHolderD20S4 : 20,
      NumberHolderD6S1 : 6,
      NumberHolderD6S2 : 6,
      NumberHolderD6S3 : 6,
      NumberHolderD6S4 : 6,
      NumberHolderD6S5 : 6,
      NumberHolderD6S6 : 6,
      NumberHolderD6S7 : 6,
      NumberHolderD6S8 : 6,
      NumberHolderD6S9 : 6,
      NumberHolderD6S10 : 6,
      NumberHolderD6S11 : 6,
      NumberHolderD6S12 : 6,
      NumberHolderD6S13 : 6,
      NumberHolderD6S14 : 6,
      NumberHolderTotalS1 : 'SG',
      NumberHolderTotalS2 : 'SG',
      NumberHolderTotalS3 : 'SG',
      NumberHolderTotalS3 : 'SG',
      NumberHolderTotalD20S1 : 'T20',
      NumberHolderTotalD20S2 : 'T20',
      NumberHolderTotalD20S3 : 'T20',
      NumberHolderTotalD20S4 : 'T20',
    }
  }

  handleButtonPress=()=> {
    let D20S1 = Math.floor(Math.random() * 20) + 1 ;
    let D20S2 = Math.floor(Math.random() * 20) + 1 ;
    let D20S3 = Math.floor(Math.random() * 20) + 1 ;
    let D20S4 = Math.floor(Math.random() * 20) + 1 ;
    let D20TotalS1 = D20S1 + 16;
    let D20TotalS2 = D20S2 + 19;
    let D20TotalS3 = D20S3 + 19;
    let D20TotalS4 = D20S4 + 14;
    let diceroll6S1a = Math.floor(Math.random() * 6) + 1 ;
    let diceroll6S1b = Math.floor(Math.random() * 6) + 1 ;
    let diceroll6S1c = Math.floor(Math.random() * 6) + 1 ;
    let diceroll6S1d = Math.floor(Math.random() * 6) + 1 ;
    let diceroll6S1e = Math.floor(Math.random() * 6) + 1 ;
    let diceroll6S1f = Math.floor(Math.random() * 6) + 1 ;
    let diceroll6S1g = Math.floor(Math.random() * 6) + 1 ;
    let diceroll6S1h = Math.floor(Math.random() * 6) + 1 ;
    let diceroll6S1i = Math.floor(Math.random() * 6) + 1 ;
    let diceroll6S1j = Math.floor(Math.random() * 6) + 1 ;
    let diceroll6S1k = Math.floor(Math.random() * 6) + 1 ;
    let diceroll6S1l = Math.floor(Math.random() * 6) + 1 ;
    let diceroll6S1m = Math.floor(Math.random() * 6) + 1 ;
    let diceroll6S1n = Math.floor(Math.random() * 6) + 1 ;
    let D6S1 = diceroll6S1a + diceroll6S1b + diceroll6S1c +
    diceroll6S1d + diceroll6S1e + diceroll6S1f +
    diceroll6S1g + diceroll6S1h + diceroll6S1i +
    diceroll6S1j + diceroll6S1k + diceroll6S1l +
    diceroll6S1m + diceroll6S1n;
    let TotalS1 = D6S1 + 11;
    let TotalS2 = diceroll6S1a + 11;
    let TotalS3 = diceroll6S1b + 11;

  this.setState({

    NumberHolderD20S1 : D20TotalS1,
    NumberHolderD20S2 : D20S2,
    NumberHolderD20S3 : D20S3,
    NumberHolderD20S4 : D20S4,
    NumberHolderD6S1 : diceroll6S1a,
    NumberHolderD6S2 : diceroll6S1b,
    NumberHolderD6S3 : diceroll6S1c,
    NumberHolderD6S4 : diceroll6S1d,
    NumberHolderD6S5 : diceroll6S1e,
    NumberHolderD6S6 : diceroll6S1f,
    NumberHolderD6S7 : diceroll6S1g,
    NumberHolderD6S8 : diceroll6S1h,
    NumberHolderD6S9 : diceroll6S1i,
    NumberHolderD6S10 : diceroll6S1j,
    NumberHolderD6S11 : diceroll6S1k,
    NumberHolderD6S12 : diceroll6S1l,
    NumberHolderD6S13 : diceroll6S1m,
    NumberHolderD6S14 : diceroll6S1n,
    NumberHolderTotalS1 : TotalS1,
    NumberHolderTotalS2 : TotalS2,
    NumberHolderTotalS3 : TotalS3,
    NumberHolderTotalD20S1 : D20TotalS1,
    NumberHolderTotalD20S2 : D20TotalS2,
    NumberHolderTotalD20S3 : D20TotalS3,
    NumberHolderTotalD20S4 : D20TotalS4,
    })
  }

  render() {
    const { navigate } = this.props.navigation;
    const D20S1Style = this.state.NumberHolderD20S2 === 20 | this.state.NumberHolderD20S2 === 19 | this.state.NumberHolderD20S2 === 18 |this.state.NumberHolderD20S2 === 17 | this.state.NumberHolderD20S2 === 16 | this.state.NumberHolderD20S2 === 15 | this.state.NumberHolderD20S2 === 1 ? styles.bottomItemInner20picked : styles.bottomItemInner20;
    const D20S2Style = this.state.NumberHolderD20S3 === 20 | this.state.NumberHolderD20S3 === 19 | this.state.NumberHolderD20S3 === 18 |this.state.NumberHolderD20S3 === 17 | this.state.NumberHolderD20S3 === 16 | this.state.NumberHolderD20S3 === 15 | this.state.NumberHolderD20S3 === 1 ? styles.bottomItemInner20picked : styles.bottomItemInner20;
    const D20S3Style = this.state.NumberHolderD20S4 === 20 | this.state.NumberHolderD20S4 === 19 | this.state.NumberHolderD20S4 === 18 |this.state.NumberHolderD20S4 === 17 | this.state.NumberHolderD20S4 === 16 | this.state.NumberHolderD20S4 === 15 | this.state.NumberHolderD20S4 === 1 ? styles.bottomItemInner20picked : styles.bottomItemInner20;

    return (
      <ImageBackground source={require('../images/Zahed5.jpg')} style={styles.container}>
        <Animatable.View animation="bounce" easing="ease-out" iterationCount="5" style={styles.center} >
            <Button style={styles.button} text="Attack!"
            onPress={() => this.handleButtonPress()}/>
        </Animatable.View>

          <View style={styles.bottomItem}>
              <Animatable.Text animation="fadeInUpBig" style={styles.concentration} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderD20S1}</Animatable.Text>
          </View>

          <View style={styles.bottom}>
              <View style={styles.bottomItem}>
                <Animatable.Text animation="fadeInUpBig" style={D20S1Style} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderD20S2}</Animatable.Text>
              </View>

              <View style={styles.bottomItem}>
                <Animatable.Text animation="fadeInUpBig" style={D20S2Style} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderD20S3}</Animatable.Text>
              </View>

              <View style={styles.bottomItem}>
                <Animatable.Text animation="fadeInUpBig" style={D20S3Style} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderD20S4}</Animatable.Text>
              </View>

              <View style={styles.bottomItemTotal}>
                <Animatable.Text animation="fadeInUpBig" style={styles.bottomItemInnerTotalD20} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderTotalD20S2}</Animatable.Text>
              </View>

              <View style={styles.bottomItemTotal}>
                <Animatable.Text animation="fadeInUpBig" style={styles.bottomItemInnerTotalD20} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderTotalD20S3}</Animatable.Text>
              </View>

              <View style={styles.bottomItemTotal}>
                <Animatable.Text animation="fadeInUpBig" style={styles.bottomItemInnerTotalD20} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderTotalD20S4}</Animatable.Text>
              </View>

              <View style={styles.bottomItemTotal}>
                <Animatable.Text animation="fadeInUpBig" style={styles.bottomItemInnerTotalSG} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderTotalS1}</Animatable.Text>
              </View>

              <View style={styles.bottomItemTotal}>
                <Animatable.Text animation="fadeInUpBig" style={styles.bottomItemInnerTotal} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderTotalS2}</Animatable.Text>
              </View>

              <View style={styles.bottomItemTotal}>
                <Animatable.Text animation="fadeInUpBig" style={styles.bottomItemInnerTotal} adjustsFontSizeToFit
              numberOfLines={1}>{this.state.NumberHolderTotalS3}</Animatable.Text>
              </View>
          </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: 5,
    },
    concentration: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      backgroundColor: 'white',
      borderColor: '#444054',
      borderWidth: 2,
      textAlign: 'center',
      fontSize: 45,
      fontWeight: '900',
      color: '#d2691e',
    },
    center: {
      height: '40%',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',

    },
    bottom: {
      height: '40%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 2,
    },
    bottomItem: {
      width: Dimensions.get('window').width / 3 -6,
      height: 60,
      padding: 5
    },
    bottomItemTotal: {
      width: Dimensions.get('window').width / 3 -6,
      height: 60,
      padding: 5
    },
    bottomItemInner20: {
      flex: 1,
      backgroundColor: 'white',
      borderColor: '#444054',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 45,
      fontWeight: '900',
      color: '#d2691e',
    },
    bottomItemInner20picked: {
      flex: 1,
      backgroundColor: 'red',
      borderColor: '#444054',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 45,
      fontWeight: '900',
      color: 'white',
    },
    bottomItemInnerTotal: {
      flex: 1,
      backgroundColor: 'grey',
      borderColor: '#340068',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 45,
      fontWeight: '900',
      color: 'papayawhip',
    },
    bottomItemInnerTotalSG: {
      flex: 1,
      backgroundColor: 'goldenrod',
      borderColor: '#340068',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 45,
      fontWeight: '900',
      color: 'firebrick',
    },
    bottomItemInnerTotalD20: {
      flex: 1,
      backgroundColor: 'firebrick',
      borderColor: '#340068',
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: 45,
      fontWeight: '900',
      color: 'violet',
    },
});