import React,{useState,useEffect,useMemo} from 'react';
import {isEmpty} from "lodash"
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
        console.log("locateCurrentPosition",_location)
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
        
        // renderMap()
        // Geolocation.getCurrentPosition((position)=>{
        //     // setLatitude(position.coords.latitude)
        //     // setLongitude(position.coords.longitude)
        //     // setMarker({name : 1,latitude: position.coords.latitude,longitude: position.coords.longitude})
        //     renderMap(position.coords.latitude,position.coords.longitude,{name : 1,latitude: position.coords.latitude,longitude: position.coords.longitude})
        //     // latitude = position.coords.latitude
        //     // longitude = position.coords.longitude
        //     // console.log(latitude,longitude)
        // })
        // renderMap()
    },[_change])
    function renderMap(){
        console.log("renderMap")
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
    return(
        <View style={styles.view}>
            <StatusBar hidden={true} />
            <Text>Home {props.name} </Text>
            {_map}
            {/* <MapView
                provider={PROVIDER_GOOGLE}
                zoomEnabled={true}
                initialRegion={_location}
                style={{height : 300,width : "100%"}}
            >
                <Marker 
                    coordinate = {_marker}
                    title = "Sanfasico"
                />
            </MapView> */}
            {/* {renderMap()} */}
        </View>
    )
}
const styles = StyleSheet.create({
    view: {
        padding: 30
    }
})
export default Home;