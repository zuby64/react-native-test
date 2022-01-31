
import React, {useState, useEffect, useRef,useContext} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import TopBar from '../../../components/TopBar';
import axios from 'axios';
import BottomBar from '../../../components/BottomBar';
import Swipes from '../../../components/Swipes';
import { AuthContext } from '../../../context/AuthContext';
export default function App(props) {
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [chosenUsers,setChosenUsers] = useState([]);
  const swipesRef = useRef(null);
  const {selectedUsers} = useContext(AuthContext);
  async function fetchUsers() {
    try {
      const {data} = await axios.get(
        'https://randomuser.me/api/?gender=female&results=50',
      );
      setUsers(data.results);
    } catch (error) {
      console.log(error);
      Alert.alert('Error getting users', '', [
        {text: 'Retry', onPress: () => fetchUsers()},
      ]);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  function handleLike() {
    selectedUsers.push({liked:true,userIndex:currentIndex})
    nextUser();
  }

  function handlePass() {
    selectedUsers.push({liked:false,userIndex:currentIndex})
    nextUser();
  }

  function nextUser() {
    const nextIndex = users.length - 2 === currentIndex ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  }

  function handleLikePress() {
    swipesRef.current.openLeft();
  }
  function handlePassPress() {
    swipesRef.current.openRight();
  }

  return (
    <View style={styles.container}>
      <TopBar navigation = {props.navigation}/>
      <View style={styles.swipes}>
        {users.length > 1 &&
          users.map(
            (u, i) =>
              currentIndex === i && (
                <Swipes
                  key={i}
                  ref={swipesRef}
                  currentIndex={currentIndex}
                  users={users}
                  handleLike={handleLike}
                  handlePass={handlePass}></Swipes>
              ),
          )}
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
  },
  swipes: {
    flex: 1,
    padding: 10,
    paddingTop: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});
