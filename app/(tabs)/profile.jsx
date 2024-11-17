import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground, Modal, TextInput, Button, Alert } from 'react-native';

const Profile = ({ onLogout }) => {
  const [username, setUsername] = useState('_jahanapv');
  const [handle, setHandle] = useState('@jahanapv');
  const [bio, setBio] = useState("c'est la vie.");
  const [followers, setFollowers] = useState(37);
  const [modalVisible, setModalVisible] = useState(false);

  const handleEditProfile = () => {
    setModalVisible(false);
  };

  const handleLogout = () => {
    Alert.alert('Logout', 'You have been logged out.', [
      { text: 'OK', onPress: () => {
          console.log('User logged out');
          onLogout(); 
        } 
      }
    ]);
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/564x/32/20/75/3220750625ce5ee01f79b86ccaaf2e8c.jpg' }}
      style={styles.backgroundImage}
    >
      <ScrollView style={styles.container}>
        {/* Profile Section */}
        <View style={styles.profileHeader}>
          <View style={styles.profileInfo}>
            <Text style={styles.username}>{username}</Text>
            <Text style={styles.handle}>{handle}</Text>
            <Text style={styles.bio}>{bio}</Text>
            <Text style={styles.followers}>{followers} followers</Text>
          </View>
          <View style={styles.profilePicContainer}>
            <Image
              style={styles.profilePic}
              source={{ uri: 'https://i.pinimg.com/736x/2b/bf/da/2bbfdaa7fb11456031bdd8ce8fe69669.jpg' }}
            />
          </View>
        </View>

        {/* Edit and Share Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.editButton]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.buttonText}>Edit profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.shareButton]}>
            <Text style={styles.buttonText}>Share profile</Text>
          </TouchableOpacity>
        </View>

        {/* Tabs (Threads, Replies, Reposts) */}
        <View style={styles.tabs}>
          <TouchableOpacity>
            <Text style={styles.activeTab}>Threads</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.inactiveTab}>Replies</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.inactiveTab}>Reposts</Text>
          </TouchableOpacity>
        </View>

        {/* Post Section */}
        <View style={styles.post}>
          <View style={styles.postHeader}>
            <Image
              style={styles.smallProfilePic}
              source={{ uri: 'https://i.pinimg.com/736x/2b/bf/da/2bbfdaa7fb11456031bdd8ce8fe69669.jpg' }}
            />
            <Text style={styles.postUsername}>{username}</Text>
            <Text style={styles.postTime}>4w</Text>
          </View>

          <Text style={styles.emoji}>❤️</Text>

          <View style={styles.imageGrid}>
            {[
              'https://i.pinimg.com/736x/66/bb/76/66bb762b4d3b4c8d5288e0300e942865.jpg',
              'https://i.pinimg.com/474x/8d/63/77/8d63770b139f118253bbfb041e5c16c4.jpg',
              'https://www.popsci.com/wp-content/uploads/2018/12/10/QKOPUFKJMVV7JE2YNBCV2FILFQ.jpg',
              'https://i.pinimg.com/564x/97/63/2c/97632cc8150fe6f1c3c4f5d5c343f2e7.jpg',
            ].map((uri, index) => (
              <Image
                key={index}
                style={styles.gridImage}
                source={{ uri }}
              />
            ))}
          </View>
        </View>
        <View style={styles.logoutContainer}>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <View style={styles.logoutTextContainer}>
              <Text style={styles.logoutButtonText}>Log Out</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Edit Profile Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Edit Profile</Text>
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={styles.input}
              placeholder="Handle"
              value={handle}
              onChangeText={setHandle}
            />
            <TextInput
              style={styles.input}
              placeholder="Bio"
              value={bio}
              onChangeText={setBio}
            />
            <TextInput
              style={styles.input}
              placeholder="Followers"
              keyboardType="numeric"
              value={String(followers)}
              onChangeText={text => setFollowers(Number(text))}
            />
            <View style={styles.modalButtonContainer}>
              <Button title="Save" onPress={handleEditProfile} />
              <Button title="Cancel" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>
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
  },
  profileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profileInfo: {
    flex: 1,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  handle: {
    color: '#fff',
    marginVertical: 5,
  },
  bio: {
    fontSize: 16,
    marginBottom: 5,
    color: '#fff',
  },
  followers: {
    color: '#bbb',
  },
  profilePicContainer: {
    position: 'relative',
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 15,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  editButton: {
    backgroundColor: '#800080',
  },
  shareButton: {
    backgroundColor: '#800080',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
  },
  activeTab: {
    fontWeight: 'bold',
    color: '#fff',
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
  },
  inactiveTab: {
    color: '#fff',
  },
  post: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallProfilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  postUsername: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
  },
  postTime: {
    color: '#bbb',
    marginLeft: 10,
  },
  emoji: {
    fontSize: 24,
    marginVertical: 10,
    color: '#fff',
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridImage: {
    width: '49%',
    height: 200,
    borderRadius: 7,
    marginVertical: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    width: '100%',
    paddingHorizontal: 10,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  logoutButton: {
    backgroundColor: '#800080',
    padding: 15,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 15,
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Profile;
