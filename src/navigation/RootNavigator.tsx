import React, {useState, useMemo, useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import AsyncStorage from '@react-native-community/async-storage';
import AuthStackNavigator from './authNavigator/AuthStackNavigator';
import {AuthContext} from '../context/AuthContext';
import DrawerNavigator from './drawerNavigator';
export default function RootNavigator() {
  const [userToken, setUserToken] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    checkToken();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });
  const authContext = useMemo(
    () => ({
      signIn: (token: string) => {
        setUserToken(token);
        setIsLoading(false);
      },
      signOut: () => {
        setUserToken(null);
        setIsLoading(false);
      },
      selectedUsers: [],
      // signUp: (token:any) => {
      //   setUserToken(token);
      //   setIsLoading(false);
      // },
    }),
    [],
  );

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');
    // 1)if user is alrady logged in,then render appflow,
    //2)otherwiase redirect to authFlow
    if (token != null) {
      setUserToken(token);
    } else {
      setUserToken(null);
    }
  };
  return (
    <>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          {isLoading ? (
            <View style={styles.container}>
              <ActivityIndicator />
            </View>
          ) : userToken == null ? (
            <AuthStackNavigator />
          ) : (
            <DrawerNavigator />
          )}
        </NavigationContainer>
      </AuthContext.Provider>
      <FlashMessage position="top" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
