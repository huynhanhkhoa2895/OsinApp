import React from 'react'
import {View,Text,ScrollView} from 'react-native';
import Home from './Home/Home'
import About from './About/About'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import {createDrawerNavigator} from 'react-navigation-drawer'
import Icon from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// const MainStackNavigator = createStackNavigator()
const MainFooterNavigator = createMaterialBottomTabNavigator({
    Home: {
        screen: Home,        
        navigationOptions:{
            tabBarLabel: "Home",
            tabBarVisible: true,
            tabBarIcon: () => {
                return <Icon color="#444" name="ios-home" size={26} />
            }
        },
    },
    About: {
        screen: About,
        navigationOptions:{
            tabBarLabel: "About",
            tabBarIcon: ({tintColor}) => {
                return <Icon color="#444" name="ios-person" size={26} />
            }
        },
    }
},{
    initialRouteName: 'Home',
    activeColor: '#444',
    inactiveColor: '#444',
    barStyle: { backgroundColor: '#fff',},
    // tabBarOptions: {

    // }
})

// function Main(props : any){
//     return(
//         <NavigationContainer>
//             <MainFooterNavigator.Navigator initialRouteName="Home">
//                 <MainFooterNavigator.Screen name="Home" component={Home} />
//                 <MainFooterNavigator.Screen name="About" component={About} />
//             </MainFooterNavigator.Navigator>
//         </NavigationContainer>

//     )
// }



export const AppCreateDrawerNavigator = createDrawerNavigator({
    // Main: {
    //     screen: MainFooterNavigator
    // },
    Home: {
        screen: MainFooterNavigator,
    },
    About: {
        screen: MainFooterNavigator
    }
})
// export default Main
// export default connect(mapStateToProps, mapDispatchToProps)(Main);