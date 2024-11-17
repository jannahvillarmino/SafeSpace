import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

// Sample data for search results with unique profile images for each user
const searchData = [
  { 
    id: '1', 
    name: 'Swiftie Nation', 
    username: 'swiftienationts', 
    followers: '98.5K', 
    isVerified: false, 
    profileImage: 'https://i.pinimg.com/736x/46/67/df/4667df4fc18e0139ed6aa158b16914b5.jpg'
  },
  { 
    id: '2', 
    name: 'kxxdrama_', 
    username: 'kxxdrama_', 
    followers: '1,915', 
    isVerified: false, 
    profileImage: 'https://i.pinimg.com/736x/0e/4f/84/0e4f84b7de8743f7365a111cd5abec6e.jpg'
  },
  { 
    id: '3', 
    name: 'ourlittlefictworld', 
    username: 'ourlittlefictworld', 
    followers: '2,660', 
    isVerified: false, 
    profileImage: 'https://i.pinimg.com/736x/35/ea/65/35ea656038ad2f015a184fa1a9e24947.jpg'
  },
  { 
    id: '4', 
    name: 'Catherine Gonzalez', 
    username: 'catherineeeeee02', 
    followers: '47', 
    isVerified: false, 
    profileImage: 'https://i.pinimg.com/736x/43/43/63/4343635948d82d77016df2572514e1b7.jpg'
  },
  { 
    id: '5', 
    name: 'Victoria | bookstagram 🌸', 
    username: 'lost.inthe.word.wonderland', 
    followers: '10.4K', 
    isVerified: false, 
    profileImage: 'https://i.pinimg.com/736x/37/4e/4b/374e4bd8aff77573caee7989da88f656.jpg'
  },
  { 
    id: '6', 
    name: 'Taylor Swift & Eras tour updates', 
    username: 'swiftieerptv13', 
    followers: '1,098', 
    isVerified: false, 
    profileImage: 'https://i.pinimg.com/736x/a9/45/04/a9450459cbb6c0375baf51930a434fd4.jpg'
  },
  { 
    id: '7', 
    name: 'escritoheart', 
    username: 'escritoheart', 
    followers: '137K', 
    isVerified: false, 
    profileImage: 'https://i.pinimg.com/736x/9b/00/dd/9b00ddb547076a9fcdeec0373751140d.jpg'
  },
  { 
    id: '8', 
    name: 'Isabel Luche', 
    username: 'luche.isabel', 
    followers: '19.9K', 
    isVerified: false, 
    profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiVN_DbZVvdDJlEvZDuj979HN_Ui7BJmQUkA&s'
  },
  { 
    id: '9', 
    name: 'Paayal', 
    username: 'thepaayaljain', 
    followers: 'Verified', 
    isVerified: true, 
    profileImage: 'https://i.pinimg.com/564x/2a/c5/65/2ac565d2f2fa41b4ae000e5ef4d5584b.jpg'
  },
];

const Search = () => {
  const [followedUsers, setFollowedUsers] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFollow = (userId) => {
    setFollowedUsers((prevState) => ({
      ...prevState,
      [userId]: !prevState[userId],
    }));
  };

  const filteredData = searchData.filter(item => {
    const query = searchQuery.toLowerCase();
    return item.name.toLowerCase().includes(query) || item.username.toLowerCase().includes(query);
  });

  const renderItem = ({ item }) => {
    const isFollowing = followedUsers[item.id];

    return (
      <View style={styles.userItem}>
        <Image
          style={styles.profileImage}
          source={{ uri: item.profileImage }}
        />
        <View style={styles.userInfo}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.username}>{item.username}</Text>
          <Text style={styles.followers}>{item.followers} followers</Text>
        </View>
        <TouchableOpacity 
          style={[styles.followButton, { backgroundColor: isFollowing ? '#fff' : '#800080' }]}
          onPress={() => toggleFollow(item.id)}
        >
          <Text style={[styles.followText, { color: isFollowing ? '#800080' : '#fff' }]}>
            {isFollowing ? 'Following' : 'Follow'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://i.pinimg.com/564x/32/20/75/3220750625ce5ee01f79b86ccaaf2e8c.jpg' }} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          placeholderTextColor="#aaa"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <FlatList
          data={filteredData}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 10,
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontWeight: 'bold',
    color: '#fff',
  },
  username: {
    color: '#fff',
  },
  followers: {
    color: '#ccc',
  },
  followButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  followText: {
    fontWeight: 'bold',
  },
});

export default Search;
