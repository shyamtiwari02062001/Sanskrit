import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';

const { height } = Dimensions.get('screen');
const logoHeight = height * 0.35;
const SplashScreen = (props) => {
  setTimeout(() => {
    props.navigation.replace('Dashboard');
  }, 5000);
  return (
    <View style={styles.container} data-test="container">
      <Animatable.Text animation="bounceInLeft" style={styles.headingText}>अध्ययनतनत्रांश</Animatable.Text>
      <Animatable.Text animation="bounceInRight" style={styles.meaningText}>{'\n\n'}Meaning</Animatable.Text>
      <Animatable.Text animation="bounceInRight" style={styles.meaningText}>THIS NAME SIGNIFIES THAT</Animatable.Text>
      <Animatable.Text animation="bounceInRight" style={styles.meaningText}>IT IS A LEARNING</Animatable.Text>
      <Animatable.Text animation="bounceInRight" style={styles.meaningText}>SOFTWARE WHICH TEACHES</Animatable.Text>
      <Animatable.Text animation="bounceInRight" style={styles.meaningText}>SANSKRIT IN A FUN WAY</Animatable.Text>
      <Animatable.Text animation="bounceInRight" style={styles.meaningText}>BY USING GAMES.</Animatable.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#12947f',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  headingText: {
    fontSize:40,
    fontWeight:'bold',
    color:'white',
    textAlign:'center'
 },
 meaningText: {
    fontSize:20,
    fontWeight:'bold',
    color:'white',
    textAlign:'center'
 },
});
export default SplashScreen;