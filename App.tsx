/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Login from './component/Login'
import {AppCreateDrawerNavigator} from './component/Main'
import 'react-native-gesture-handler';
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import { Provider } from 'react-redux';
import appReducers from './reducer/index';
import {createStore,applyMiddleware } from 'redux';
import saga from './reducer/saga'
import createSagaMiddleware from 'redux-saga';
import JsonType from './Model/JsonType'
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  appReducers, /* preloadedState, */
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(saga)
// const Stack = createStackNavigator();
// const optionStack : JsonType = {headerLeft : null};
const AppSwitchNavigator = createSwitchNavigator({
  Login : {screen : Login},
  Main : {screen : AppCreateDrawerNavigator},
})
const AppContainer = createAppContainer(AppSwitchNavigator);
const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <AppContainer />
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Login}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen name="Main" component={Main} options={optionStack} />
        </Stack.Navigator>
      </NavigationContainer> */}
    </Provider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;


