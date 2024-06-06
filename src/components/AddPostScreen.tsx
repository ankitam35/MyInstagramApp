import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  Linking,
} from 'react-native';

import {launchImageLibrary} from 'react-native-image-picker';

const AddPostScreen = () => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const handleSend = () => {
    if (text.trim() || image) {
      const message = {
        id: Date.now(),
        sender: 'currentUser',
        message: text.trim(),
        image: image?.uri,
      };
      setText('');
      setImage(null);
    }
  };

  const selectImage = () => {
    const options = {
      mediaType: 'photo',
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response?.error);
      } else {
        setImage(response.assets[0]);
      }
    });
  };

  const renderItem = ({item}: any) => (
    <TouchableOpacity
      style={
        item.sender === 'currentUser' ? styles.myMessage : styles.theirMessage
      }>
      <Text>{item.message}</Text>
      {item.image && <Image source={{uri: item.image}} style={styles.image} />}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={selectImage}>
          <Icon name="photo" size={30} color="#007bff" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Type a message"
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity style={styles.iconButton} onPress={handleSend}>
          <Text>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 8,
    padding: 8,
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#dcf8c6',
    padding: 8,
    margin: 4,
    borderRadius: 8,
  },
  theirMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    padding: 8,
    margin: 4,
    borderRadius: 8,
  },
  iconButton: {
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginTop: 5,
  },
});

export default AddPostScreen;
