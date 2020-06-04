import React from 'react'
import {View,Text,ScrollView} from 'react-native';
import Home from './Home/Home'
import About from './About/About'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
function Main(props : any){
    return(
        <View style={{flex: 1,alignItems: "center",justifyContent: "center"}}>
            {/* <Header />        
            <ScrollView style={{flex: .8}}>
                <Home name="khoa" />
            </ScrollView>
            <Footer /> */}
        </View>
    )
}
export default createMaterialBottomTabNavigator({
    Home : {
        screen : Home,
        navigationOptions:{
            tabBarLabel: 'Home',
            tabBarIcon: ()=>{
                <Icon name="ios-home" size={24} />
            }
        }
    },
    About : {
        screen : About,
        navigationOptions:{
            tabBarLabel: 'Home',
            tabBarIcon: ()=>{
                <Icon name="ios-home" size={24} />
            }
        }
    },
},{
    initialRouteName: 'Home',
    order: ['Home','About'],
})
// export default Main
// export default connect(mapStateToProps, mapDispatchToProps)(Main);