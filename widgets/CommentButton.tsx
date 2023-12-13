import React, {useState} from 'react';
import {Pressable, View} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faComment} from '@fortawesome/free-solid-svg-icons/faComment';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text} from 'react-native';

export default function CommentButton(props: any) {
  const [commentCount, setCommentCount] = useState(0);

  return (
    <View style={{display: 'flex', flexDirection: 'row'}}>
      <Pressable
        // onPress={() => {
        //   setLiked(isLiked => !isLiked);
        //   if (liked) {
        //     setLikeCount(likeCount - 1);
        //   } else {
        //     setLikeCount(likeCount + 1);
        //   }
        // }}
        style={{paddingRight: 5}}>
        <FontAwesomeIcon icon={faComment} color={'#6C6C6C'} size={18} />
      </Pressable>
      <Text style={{color: '#6C6C6C', fontSize: 14}}>{props.commentCount}</Text>
    </View>
  );
}
