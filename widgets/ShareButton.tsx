import React, {useState} from 'react';
import {Alert, Pressable, Share, View} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faShare} from '@fortawesome/free-solid-svg-icons/faShare';
import {Text} from 'react-native';

export default function ShareButton(props: any) {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Look at this cool test app ;)',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
    <View style={{display: 'flex', flexDirection: 'row'}}>
      <Pressable onPress={onShare} style={{paddingRight: 5}}>
        <FontAwesomeIcon icon={faShare} color={'#6C6C6C'} size={18} />
      </Pressable>
      <Text style={{color: '#6C6C6C', fontSize: 14}}>Share</Text>
    </View>
  );
}
