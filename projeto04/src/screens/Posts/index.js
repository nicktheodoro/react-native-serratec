import React, {useEffect, useState} from 'react';
import {Text, FlatList, View, ActivityIndicator} from 'react-native';

import styles from './style';

import getPosts from '../../repository/postsRepository';

const Posts = () => {
  const [postList, setPostList] = useState([]);
  const [loading, setLoadiong] = useState(false);

  const loadPost = async () => {
    // if(loading) return;
    setLoadiong(true);

    const data = await getPosts();
    setPostList(data);
    setLoadiong(false);
  };

  useEffect(() => {
    loadPost();
  }, []);

  const renderFooter = () => {
    if (!loading) return null;
    return <ActivityIndicator size="large" color="#20C0DF" />;
  };

  return (
    <FlatList
      style={styles.container}
      data={postList}
      keyExtractor={item => item.id}
      ListFooterComponent={renderFooter}
      renderItem={({item}) => (
        <View
          style={{
            backgroundColor: 'lightgreen',
            margin: 5,
            padding: 20,
            borderRadius: 12,
          }}>
          <Text style={{fontSize: 18, textAlign: 'center'}}>
            {item.title.toUpperCase()}
          </Text>
        </View>
      )}
    />
  );
};

export default Posts;
