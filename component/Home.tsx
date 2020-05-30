import React,{useState,useEffect} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';
function Home(props : any){
    return(
        <View style={styles.view}>
            <StatusBar hidden={true} />
            <Text>Home {props.name}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    view: {
        padding: 30
    }
})
export default Home;