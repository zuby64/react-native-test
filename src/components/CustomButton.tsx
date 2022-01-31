import React, {Children} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import theme from './theme';
import {ButtonColor} from '../util';

export default function CustomButton({
  children,
  toggle,
  onPress,
}: {
  children: any;
  toggle: boolean;
  onPress: any;
}) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.container,
          {
            backgroundColor: toggle ? ButtonColor : '',
            borderWidth: toggle ? 0 : 1,
            borderColor: toggle ? '' : ButtonColor,
          },
        ]}>
        <Text
          style={{
            color: toggle ? theme.text.labelWhite : theme.text.label,
            fontWeight: '600',
          }}>
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: wp(12),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(1),
  },
  buttonContainer: {
    // flex:1,
    alignItems: 'center',
    paddingTop: hp(3),
    width: '80%',
    alignSelf: 'center',
  },
});
