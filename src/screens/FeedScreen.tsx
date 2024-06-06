import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PostView from '../components/PostView';
import AddPostScreen from '../components/AddPostScreen';


export const FeedScreen = () => {
  const [isAddPostVisible, setAddPostVisible] = useState(false);

  const handlePost = (text: string) => {
    console.log('New Post:', text);
    // You can handle the new post here (e.g., send it to your backend or update the state)
  };

  if (isAddPostVisible) {
    return (
      <AddPostScreen
        onClose={() => setAddPostVisible(false)}
        onPost={handlePost}
      />
    );
  }

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
        <TouchableOpacity
          style={styles.newPostButton}
          onPress={() => setAddPostVisible(true)}>
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
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default FeedScreen;
