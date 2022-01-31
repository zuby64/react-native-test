import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {AuthContext} from '../../context/AuthContext';
import {
  Drawer,
  Avatar,
  Title,
  Caption,
  Paragraph,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const [isDarkedTheme, setIsDarkTheme] = useState<boolean>(false);
  const {signOut} = useContext(AuthContext);
  const signout = async () => {
    //will remove token etc...here..
    AsyncStorage.clear();
    signOut();
  };
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri: 'https://api.adorable.io/avatars/50/abott@adorable.png',
                }}
                size={50}
              />
              <View style={{marginLeft: 15}}>
                <Title style={styles.title}>Muhammad Zubair</Title>
                <Caption style={styles.caption}>zuby641@gmail.com</Caption>
              </View>
            </View>
            {/* sub details of the user */}
            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  80
                </Paragraph>
                <Caption>Followings</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  100
                </Paragraph>
                <Caption>Followers</Caption>
              </View>
            </View>
          </View>
          {/* adding drawer items in here */}
          {/* <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label="Home"
              icon={({color, size}) => (
                <Icon color={color} size={size} name="home-outline" />
              )}
              onPress={() => {}}
            />
            <DrawerItem
              label="Profile"
              onPress={() => {}}
              icon={({color, size}) => (
                <Icon color={color} size={size} name="account-outline" />
              )}
            />
            <DrawerItem
              label="Bookmarks"
              icon={({color, size}) => (
                <Icon color={color} size={size} name="bookmark-outline" />
              )}
              onPress={() => {}}
            />
            <DrawerItem
              label="Settings"
              icon={({color, size}) => (
                <Icon color={color} size={size} name="settings-helper" />
              )}
              onPress={() => {}}
            />
            <DrawerItem
              label="Support"
              icon={({color, size}) => (
                <Icon color={color} size={size} name="account-check-outline" />
              )}
              onPress={() => {}}
            />
          </Drawer.Section> */}
          {/* <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={isDarkedTheme} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section> */}
        </View>

        {/* <DrawerItemList {...props} /> */}
      </DrawerContentScrollView>
      <Drawer.Section style={styles.borderBottomSection}>
        <DrawerItem
          label="Sign Out"
          icon={({color, size}) => (
            <Icon color={color} size={size} name="exit-to-app" />
          )}
          onPress={() => signout()}
        />
      </Drawer.Section>
    </View>
  );
}

export default CustomDrawerContent;

const styles = StyleSheet.create({
  borderBottomSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
