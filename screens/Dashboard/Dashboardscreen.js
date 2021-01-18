import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
const DashboardScreen=(props)=>{
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={()=>props.navigation.navigate('WordFormation')}>
                <Text>Word Formation</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>props.navigation.navigate('OddOneOut')}>
                <Text>Odd One Out</Text>
            </TouchableOpacity>
        </View>
    )
}
export default DashboardScreen;