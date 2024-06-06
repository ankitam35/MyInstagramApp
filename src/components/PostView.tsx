import {View, Text, StyleSheet, Image} from 'react-native';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconFeather from 'react-native-vector-icons/Feather';
import {useState} from 'react';

type PostViewPropType = any & {
  userImg: any;
  image?: any;
};

const PostView = ({
  userImg,
  name,
  handle,
  time,
  text,
  image,
  likes,
  liked,
  comments,
  shares,
}: PostViewPropType) => {
  const [like, setLike] = useState(liked);

  const changeLike = () => {
    setLike(prev => !prev);
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={userImg} style={styles.profilePic} />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.contentHeader}>
          <View style={styles.contact}>
            <Text style={styles.fullName}>{name}</Text>
            <Text style={styles.handle}>{handle}</Text>
          </View>
          <View>
            <Text style={styles.time}>{time}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.content}>{text}</Text>
          {image && <Image source={image} style={styles.contentImage} />}
        </View>

        <View style={styles.contentAction}>
          <View style={styles.action}>
            <IconFontisto
              name={`${like ? 'heart' : 'heart-alt'}`}
              size={18}
              onPress={changeLike}
            />
            <Text style={styles.actionText}>{likes}</Text>
          </View>
          <View style={styles.action}>
            <IconFontisto name="commenting" size={18} />
            <Text style={styles.actionText}>{comments}</Text>
          </View>
          <View style={styles.action}>
            <IconFeather name="send" size={18} />
            <Text style={styles.actionText}>{shares}</Text>
          </View>
          <View style={styles.action}>
            <IconFeather name="more-horizontal" size={18} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    borderTopWidth: 0,
    borderBottomColor: '#BBBBBB',
    borderBottomWidth: 1,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  contentContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 10,
  },
  contact: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    paddingTop: 10,
    fontSize: 14,
    color: 'black',
  },
  fullName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    paddingRight: 10,
  },
  handle: {
    fontSize: 12,
  },
  time: {
    fontSize: 14,
    textAlign: 'right',
  },
  contentImage: {
    height: 200,
    width: 200,
    borderRadius: 10,
    marginTop: 10,
  },
  contentAction: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  action: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    paddingLeft: 5,
  },
});
export default PostView;
