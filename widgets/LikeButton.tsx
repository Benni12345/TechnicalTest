import React, {useState} from 'react';
import {Pressable, View} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons/faHeart';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text} from 'react-native';

export default function LikeButton(props: any) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(props.likeCount);

  return (
    <View style={{display: 'flex', flexDirection: 'row'}}>
      <Pressable
        onPress={() => {
          setLiked(isLiked => !isLiked);
          if (liked) {
            setLikeCount(likeCount - 1);
          } else {
            setLikeCount(likeCount + 1);
          }
        }}
        style={{paddingRight: 5}}>
        <FontAwesomeIcon
          icon={faHeart}
          color={liked ? 'red' : '#6C6C6C'}
          size={18}
        />
      </Pressable>
      <Text style={{color: '#6C6C6C', fontSize: 14}}>{likeCount}</Text>
    </View>
  );
}
