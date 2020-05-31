import React from 'react'
import {connect} from 'react-redux'
import {View,Text} from 'react-native'
function Header(props : any){
    return(
        <View style={{backgroundColor : "green",height : 50}}>
            <Text>header</Text>
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
export default connect(mapStateToProps, mapDispatchToProps)(Header);