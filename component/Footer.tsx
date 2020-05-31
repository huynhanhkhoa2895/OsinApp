import React from 'react'
import {connect} from 'react-redux'
import {View,Text} from 'react-native'
function Footer(props : any){
    return(
        <View style={{backgroundColor : "red",height : 50}}>
            <Text>footer</Text>
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
export default connect(mapStateToProps, mapDispatchToProps)(Footer);