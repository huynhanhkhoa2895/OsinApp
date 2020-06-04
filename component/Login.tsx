import React from 'react'
import {connect} from 'react-redux'
import {View,Text,Button} from 'react-native';
import Home from './Home/Home'
import Header from './Header'
import Footer from './Footer'
function Login(props : any){
    function handleLogin(){
        // console.log("handleLogin",navigation)
        props.navigation.navigate("Main",{})
    }
    return(
        <View style={{flex: 1}}>
            <Text>LOGIN VIEW</Text>
            <Button onPress={()=>handleLogin()} title="Đăng nhập" />
        </View>
    )
}
const mapStateToProps = (state : any) => {
    return {
        appReducer : state.appReducer
    }
  }
const mapDispatchToProps = (dispatch : any) => {
    return {
        call : () =>{
            // dispatch(_userCall());
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);