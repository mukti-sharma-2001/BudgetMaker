/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

// import {
//   Colors,
// } from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';

import store from './components/redux/store';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import BudgetEntry from './components/BudgetEntry';
import BudgetListing from './components/BudgetListing';

const Stack=createNativeStackNavigator();
function App() {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    // <SafeAreaView style={backgroundStyle}>
     
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     style={backgroundStyle}>

    //     <View
    //       style={{
    //         backgroundColor: isDarkMode ? Colors.black : Colors.white,
    //       }}>
    //        <Text>Hey!</Text>
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator 
            screenOptions={{
            title:"Budget Entry",
            headerStyle:{
              backgroundColor:'black'
            },
            headerTintColor:'white',
            headerTitleStyle:{
                fontSize:26
            }
            
          }}>
          {/* <ScrollView style={style.main}>
              <BudgetEntry/>
          </ScrollView> */}
          <Stack.Screen name="Budget Entry" component={BudgetEntry} options={{title:"Budget Entry"}}></Stack.Screen>
          <Stack.Screen name="Budget Listing" component={BudgetListing} options={{title:"Budget Entry Listing"}}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


export default App;
