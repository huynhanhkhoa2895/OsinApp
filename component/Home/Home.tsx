import React,{useState,useEffect,useMemo} from 'react';
import {connect} from 'react-redux'
import {_userCall} from '../../reducer/actions'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Button
  } from 'react-native';
import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
function Home(props : any){
    const [_location,setLocation] = useState<any>(1);
    const [_map,setMap] = useState<any>(null);
    const [_change,setChange] = useState<any>(true);
    const [_latitude,setLatitude] = useState<any>(null);
    const [_longitude,setLongitude] = useState<any>(null);
    const [_marker,setMarker] = useState({name : 1,latitude: 37.78825,longitude: -122.4324,});
    function getInitialState() {
        return {
          region: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
        };
      }
      
    // function onRegionChange(region : any) {
    //     setRegion(region)
    // }
    function locateCurrentPosition(){
        let test = {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        };
        setLocation(test)
    }
    useEffect(()=>{
        if(_change){
            renderMap()
        }
    },[_change])
    function renderMap(){
        Geolocation.getCurrentPosition((position)=>{
            const {latitude,longitude} = position.coords
            // setLatitude(position.coords.latitude)
            // setLongitude(position.coords.longitude)
            // setMarker({name : 1,latitude: position.coords.latitude,longitude: position.coords.longitude})
            // latitude = position.coords.latitude
            // longitude = position.coords.longitude
            // console.log(latitude,longitude)
            setMap(
                <MapView
                    provider={PROVIDER_GOOGLE}
                    zoomEnabled={true}
                    initialRegion={{
                        latitude: latitude,
                        longitude: longitude,
                        latitudeDelta: 0.00922,
                        longitudeDelta: 0.00421,
                    }}
                    style={{height : 300,width : "100%"}}
                >
                    <Marker 
                        coordinate = {{latitude: latitude,longitude: longitude}}
                        title = "Sanfasico"
                    />
                </MapView>
            )
        })
        
    }
    function callUser(){
        props.call();
    }
    return(
        <View style={styles.view}>
            <StatusBar hidden={true} />
            <Text>Home {props.name} {props.appReducer.stt}</Text>
            {_map}
            <Button title="ĐANG TEST" onPress={()=>callUser()} />
        </View>
    )
}
const styles = StyleSheet.create({
    view: {
        padding: 30
    }
})
const mapStateToProps = (state : any) => {
    return {
        appReducer : state.appReducer
    }
  }
const mapDispatchToProps = (dispatch : any) => {
    return {
        call : () =>{
            dispatch(_userCall());
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
