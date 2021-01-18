import React from 'react';
import { StyleSheet, View, Dimensions,ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';

const { height } = Dimensions.get('screen');
const logoHeight = height * 0.35;
const SplashScreen = (props) => {
  setTimeout(() => {
    props.navigation.replace('Dashboard');
  }, 5000);
  return (
    <View style={styles.container} data-test="container">
      <ImageBackground source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwTRIb_53hqrRIMS1Kcux4Zjf7LiafMqRibQ&usqp=CAU'}} style={{flex: 1,justifyContent: "center",widht:Dimensions.get('window').width}}>
      <View style={{height:'100%',width:'100%',backgroundColor:'#820909',opacity:0.95,alignItems:'center',justifyContent:'center'}}>
      <Animatable.Text animation="bounceInLeft" style={styles.headingText}>अध्ययनतनत्रांश</Animatable.Text>
      <Animatable.Text animation="bounceInRight" style={styles.meaningText}>{'\n \n'}A LEARNING</Animatable.Text>
      <Animatable.Text animation="bounceInRight" style={styles.meaningText}>SOFTWARE WHICH TEACHES</Animatable.Text>
      <Animatable.Text animation="bounceInRight" style={styles.meaningText}>SANSKRIT IN A FUN WAY</Animatable.Text>
      <Animatable.Text animation="bounceInRight" style={styles.meaningText}>BY USING GAMES.</Animatable.Text>
      </View>
    </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
  },
  headingText: {
    fontSize:40,
    fontWeight:'bold',
    color:'#ffcc00',
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