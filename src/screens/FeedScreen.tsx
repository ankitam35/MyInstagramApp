import React from 'react';
import { View, StyleSheet, TouchableOpacity, ImageSourcePropType } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PostView from '../components/PostView';


export const FeedScreen = () => {
  return (
    <View style={styles.container}>
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

      <View style={styles.overlayContainer}>
        <TouchableOpacity style={styles.newPostButton}>
          <Icon name="plus" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  overlayContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  newPostButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default FeedScreen;
