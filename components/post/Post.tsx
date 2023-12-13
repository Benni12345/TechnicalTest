import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import LikeButton from '../../widgets/LikeButton';
import CommentButton from '../../widgets/CommentButton';
import SaveButton from '../../widgets/SaveButton';
import ShareButton from '../../widgets/ShareButton';
import Moment from 'moment';

function Head(props: any): React.JSX.Element {
  const post: PostInfo = props.postInfo;
  const userInfo: UserInfo = props.userInfo;

  return (
    <View style={styles.headerContainer}>
      <View style={styles.row}>
        <Avatar.Image
          size={50}
          style={{marginRight: 10}}
          source={{
            uri: userInfo.imageUrl,
          }}
        />
        <View
          style={{
            height: 50,
            display: 'flex',
            justifyContent: 'center',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                ...styles.whiteText,
                fontWeight: '600',
                fontSize: 17,
                paddingRight: 10,
              }}>
              {userInfo.username}
            </Text>
            <Text
              style={{
                ...styles.whiteText,
                fontWeight: '300',
                fontSize: 17,
                color: '#6C6C6C',
              }}>
              {Moment(post.createdAt).format('YYYY-MM-DD')}
            </Text>
          </View>
          <Text style={{...styles.whiteText, fontWeight: '300', fontSize: 17}}>
            {post.caption}
          </Text>
        </View>
      </View>
    </View>
  );
}

function Main(props: any): React.JSX.Element {
  return (
    <View style={styles.postContainer}>
      <Image
        style={{aspectRatio: 4 / 3, borderRadius: 10}}
        source={{
          uri: props.imageUrl,
        }}></Image>
    </View>
  );
}

function Footer(props: any): React.JSX.Element {
  return (
    <View style={styles.footerContainer}>
      <LikeButton likeCount={props.likeCount}></LikeButton>
      <CommentButton commentCount={props.commentCount}></CommentButton>
      <SaveButton></SaveButton>
      <ShareButton></ShareButton>
    </View>
  );
}

function Post(props: any): React.JSX.Element {
  const post: PostInfo = props.post;

  return (
    <SafeAreaView>
      <View style={styles.postContainer}>
        <Head postInfo={post} userInfo={post.user}></Head>
        <Main imageUrl={post.imageUrl}></Main>
        <Footer
          likeCount={post.likeCount}
          commentCount={post.commentCount}></Footer>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: '#1B1B1B',
    borderRadius: 10,
    marginVertical: 5,
    padding: 5,
  },
  headerContainer: {
    padding: 5,
  },
  mainPartContainer: {
    padding: 5,
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom: 5,
  },
  text: {
    color: '#FFFFFF',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  whiteText: {
    color: '#FFFFFF',
  },
});

export default Post;
