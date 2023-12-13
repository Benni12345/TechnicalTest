import React, {useState} from 'react';
import {Pressable, View} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBookmark} from '@fortawesome/free-solid-svg-icons/faBookmark';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text} from 'react-native';

export default function SaveButton(props: any) {
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <View style={{display: 'flex', flexDirection: 'row'}}>
      <Pressable
        onPress={() => {
          setBookmarked(isBookmarked => !isBookmarked);
        }}
        style={{paddingRight: 5}}>
        <FontAwesomeIcon
          icon={faBookmark}
          color={bookmarked ? 'white' : '#6C6C6C'}
          size={18}
        />
      </Pressable>
      <Text style={{color: '#6C6C6C', fontSize: 14}}>Save</Text>
    </View>
  );
}
