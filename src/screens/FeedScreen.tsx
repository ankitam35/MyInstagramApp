import React from 'react';
import PostView from '../components/PostView';
import { ImageSourcePropType } from 'react-native';

export const FeedScreen = () => {
  return (
    <PostView
      userImg={require('../assets/image.png') as ImageSourcePropType}
      name="John Doe"
      handle="@johndoe"
      time="2h"
      text="This is a post by John Doe."
      image={require('../assets/image.png') as ImageSourcePropType}
      likes={120}
      liked={true}
      comments={15}
      shares={10}
    />
  );
};
