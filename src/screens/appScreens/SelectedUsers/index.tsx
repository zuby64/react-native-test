import React, {useContext} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AuthContext} from '../../../context/AuthContext';
export default function index(props: any) {
  const {selectedUsers} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Text style={styles.backButton}>Go back</Text>
      </TouchableOpacity>
      {selectedUsers.length > 0 &&
        selectedUsers.map((user: any, i: number) => {
          return (
            <View style={styles.selectedContainer}>
              <Text>
                {user.liked ? (
                  <Text>User at Index {user.userIndex} Liked</Text>
                ) : (
                  <Text>User at Index {user.userIndex} Disliked</Text>
                )}
              </Text>
            </View>
          );
        })}
      {selectedUsers.length == 0 && (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>no user selected</Text>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 20, paddingVertical: 50},
  backButton: {
    color: '#000',
  },
  selectedContainer: {
    borderBottomWidth: 1,
    borderColor: '#000',
    padding: 10,
  },
});
