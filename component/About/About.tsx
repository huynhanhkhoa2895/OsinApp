import React from 'react'
import {connect} from 'react-redux'
import {View,Text} from 'react-native'
function About(props : any){
    return(
        <View style={{backgroundColor : "green",height : 50}}>
            <Text>ABOUT SCREEN</Text>
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
export default connect(mapStateToProps, mapDispatchToProps)(About);