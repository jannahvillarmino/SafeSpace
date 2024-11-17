import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Ensure this library is installed

const HomeScreen = () => {
  return (
    <ImageBackground 
      source={{ uri: 'https://i.pinimg.com/564x/32/20/75/3220750625ce5ee01f79b86ccaaf2e8c.jpg' }} 
      style={styles.backgroundImage}
    >
      <ScrollView style={styles.container}>

        {/* User Post */}
        <View style={styles.post}>
          <View style={styles.userInfo}>
            <Image 
              source={{ uri: 'https://i.pinimg.com/736x/2b/bf/da/2bbfdaa7fb11456031bdd8ce8fe69669.jpg' }} 
              style={styles.profilePic} 
            />
            <Text style={styles.username}>_jahanapv</Text>
          </View>
          <Text style={styles.postText}>What's new?</Text>
          <View style={styles.iconContainer}>
            <FontAwesome name="image" size={24} color="black" />
            <FontAwesome name="camera" size={24} color="black" style={styles.iconSpacing} />
            <FontAwesome name="microphone" size={24} color="black" style={styles.iconSpacing} />
            <FontAwesome name="file-image-o" size={24} color="black" style={styles.iconSpacing} />
          </View>
        </View>

        {/* Simple Text Post */}
        <View style={styles.post}>
          <View style={styles.userInfo}>
            <Image 
              source={{ uri: 'https://i.pinimg.com/736x/11/6f/16/116f164cdc3288ec89c364e6fc6a377e.jpg' }} 
              style={styles.profilePic} 
            />
            <Text style={styles.username}>ms.simple_dimple</Text>
          </View>
          <Text style={styles.postText}>Loving this community! Grateful for the safe space and positivity 💜</Text>
          <View style={styles.iconsRow}>
            {['heart-o', 'comment-o', 'retweet', 'bookmark-o'].map((icon, index) => (
              <View style={styles.iconWrapper} key={index}>
                <FontAwesome name={icon} size={20} color={icon === 'heart-o' ? 'red' : 'black'} />
                <Text style={styles.iconLabel}>{index === 0 ? '750' : index === 1 ? '150' : index === 2 ? '230' : '98'}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Post with Nature Images */}
        <View style={styles.post}>
          <View style={styles.userInfo}>
            <Image 
              source={{ uri: 'https://i.pinimg.com/736x/c9/ce/8d/c9ce8d419afdc886bebeaf512cad0535.jpg' }} 
              style={styles.profilePic} 
            />
            <Text style={styles.username}>cristoxher</Text>
          </View>
          <Text style={styles.postText}>Beautiful nature 🌿</Text>
          <View style={styles.imagesRow}>
            <Image 
              source={{ uri: 'https://i.pinimg.com/736x/9e/6a/25/9e6a250a6bd1a65ce2cb6ff4eab0eaf0.jpg' }} 
              style={styles.postImage} 
            />
            <Image 
              source={{ uri: 'https://i.pinimg.com/736x/ea/e9/d3/eae9d3bd595c774223401a546a5f59a2.jpg' }} 
              style={styles.postImage} 
            />
          </View>
          <View style={styles.iconsRow}>
            {['heart-o', 'comment-o', 'retweet', 'bookmark-o'].map((icon, index) => (
              <View style={styles.iconWrapper} key={index}>
                <FontAwesome name={icon} size={20} color={icon === 'heart-o' ? 'red' : 'black'} />
                <Text style={styles.iconLabel}>{index === 0 ? '1.9K' : index === 1 ? '997' : index === 2 ? '1.5K' : '576'}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Flower Post */}
        <View style={styles.post}>
          <View style={styles.userInfo}>
            <Image 
              source={{ uri: 'https://i.pinimg.com/736x/e5/87/e7/e587e7c3f4a3e040fd50942fe6033e89.jpg' }} 
              style={styles.profilePic} 
            />
            <Text style={styles.username}>estetixo</Text>
          </View>
          <Text style={styles.postText}>Obsessed with flowers 😍</Text>
          <View style={styles.imagesRow}>
            <Image 
              source={{ uri: 'https://i.pinimg.com/564x/0b/69/94/0b69947c97119bbb6e27b13cde4fa833.jpg' }} 
              style={styles.postImage} 
            />
            <Image 
              source={{ uri: 'https://i.pinimg.com/736x/ec/17/0f/ec170fc9010866fc41550d84c6cc08b8.jpg' }} 
              style={styles.postImage} 
            />
          </View>
          <View style={styles.iconsRow}>
            {['heart-o', 'comment-o', 'retweet', 'bookmark-o'].map((icon, index) => (
              <View style={styles.iconWrapper} key={index}>
                <FontAwesome name={icon} size={20} color={icon === 'heart-o' ? 'red' : 'black'} />
                <Text style={styles.iconLabel}>{index === 0 ? '3.4K' : index === 1 ? '1.5K' : index === 2 ? '996' : '546'}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Eras Tour Post */}
        <View style={styles.post}>
          <View style={styles.userInfo}>
            <Image 
              source={{ uri: 'https://i.pinimg.com/736x/cc/40/14/cc4014dd215631038aec6b7653fb3381.jpg' }} 
              style={styles.profilePic} 
            />
            <Text style={styles.username}>taylornation</Text>
          </View>
          <Text style={styles.postText}>Eras Tour Sydney</Text>
          <View style={styles.imagesRow}>
            <Image 
              source={{ uri: 'https://i.pinimg.com/736x/cc/b0/e7/ccb0e7a2f11fcbe48d977df1496aed71.jpg' }} 
              style={styles.postImage} 
            />
            <Image 
              source={{ uri: 'https://i.pinimg.com/736x/8b/0d/20/8b0d2066fd5b028830eb510293760b97.jpg' }} 
              style={styles.postImage} 
            />
          </View>
          <View style={styles.iconsRow}>
            {['heart-o', 'comment-o', 'retweet', 'bookmark-o'].map((icon, index) => (
              <View style={styles.iconWrapper} key={index}>
                <FontAwesome name={icon} size={20} color={icon === 'heart-o' ? 'red' : 'black'} />
                <Text style={styles.iconLabel}>{index === 0 ? '2M' : index === 1 ? '1.2K' : index === 2 ? '1M' : '99K'}</Text>
              </View>
            ))}
          </View>
        </View>

      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Ensures the background image covers the screen
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Slight overlay to ensure readability
  },
  post: {
    padding: 10,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    color: '#fff', // White text for better contrast
    fontWeight: 'bold',
  },
  postText: {
    color: '#fff', // White text for readability
    marginTop: 5,
  },
  imagesRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  postImage: {
    width: '49%', // Adjusted to fit two images
    height: 200, // Adjusted height for better appearance
    borderRadius: 7,
    marginRight: '2%',
  },
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  iconWrapper: {
    alignItems: 'center', // Center the icon and label
  },
  iconLabel: {
    fontSize: 12,
    color: 'white', // Text color for labels
    marginTop: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start', // Align the icons beside each other
    marginTop: 10,
  },
  iconSpacing: {
    marginLeft: 15, // Space between the icons
  },
});

export default HomeScreen;
