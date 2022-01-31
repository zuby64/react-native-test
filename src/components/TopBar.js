import React,{useEffect,useState} from 'react'
import { View, StyleSheet,Text ,TouchableOpacity} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';

export default function TopBar({navigation}) {
  const [name,setName] = useState('');
  useEffect(()=>{
   _retrieveData();
    
  },[])

_retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('userData');
    if (value !== null) {
      // We have data!!
      setName(value)
    }
  } catch (error) {
    // Error retrieving data
  }
};
  return (
    <View style={styles.container}>
      
      <FontAwesome name="fire" size={27} color="#F06795" />
      <Text>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center',
    padding: 15,

    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 5.46,
    elevation: 9,
  },
})
