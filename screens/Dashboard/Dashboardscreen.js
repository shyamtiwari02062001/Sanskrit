import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,Dimensions} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
const DashboardScreen=(props)=>{
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <LinearGradient
          colors={['#B7F8DB', '#50A7C2']}
          style={{flex:1,width:Dimensions.get('window').width,alignItems:'center',justifyContent:'space-evenly'}}
        >
            <TouchableOpacity style={styles.shape} onPress={()=>props.navigation.navigate('WordFormation')}>
                <Text style={styles.text}>शब्द निर्माण</Text>
                <Text style={styles.englishText}>( Word Formation )</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shape} onPress={()=>props.navigation.navigate('OddOneOut')}>
                <Text style={styles.text}>विषम शब्द चयन</Text>
                <Text style={styles.englishText}>( Odd One Out )</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shape} onPress={()=>props.navigation.navigate('SentenceFormation')}>
                <Text style={styles.text}>वाक्यांश निर्माण</Text>
                <Text style={styles.englishText}>( Sentence Formation )</Text>
            </TouchableOpacity>
            </LinearGradient>
        </View>
    )
}
export default DashboardScreen;
const styles = StyleSheet.create({
    text:{
        fontSize:30,
        fontWeight:'bold',
        paddingLeft:40,
        paddingRight:40,
        paddingTop:10,
        color:'white',
        textAlign:'center'
    },
    englishText:{
        fontSize:20,
        fontWeight:'bold',
        paddingLeft:20,
        paddingRight:20,
        color:'white',
        textAlign:'center',
        paddingBottom:10
    },
    shape:{
        backgroundColor:'#050637',
        borderRadius:50,
        width:'80%'
    }
});