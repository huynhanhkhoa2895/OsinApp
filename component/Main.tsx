import React from 'react'
import {connect} from 'react-redux'
import {View,Text,ScrollView} from 'react-native';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
function Main(props : any){
    return(
        <View style={{flex: 1}}>
            <Header />        
            <ScrollView style={{flex: .8}}>
            <Home name="khoa" />
            </ScrollView>
            <Footer />
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
export default connect(mapStateToProps, mapDispatchToProps)(Main);