import React from 'react';
import {RefreshControl, ScrollView, StyleSheet, Text, View} from 'react-native';
import Post from '../post/Post';
import {postArray} from '../../data/Data';

function Home(): React.JSX.Element {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          progressBackgroundColor={'black'}
          colors={['red']}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
      style={styles.mainContainer}>
      {postArray.map((post, index) => (
        <Post key={`key-${index}`} post={post}></Post>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    backgroundColor: '#000000',
  },
});

export default Home;
