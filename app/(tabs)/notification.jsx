import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';

const Notifications = () => {
  // State to manage notifications
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      username: 'cathyy',
      time: '2d',
      message: 'cathyy posted new photos.',
      profilePic: 'https://i.pinimg.com/originals/da/7f/56/da7f56c455098ee787089ee65624b823.jpg',
      type: 'message', // type can be 'message' or 'request'
    },
    {
      id: 2,
      username: 'fjpypsy',
      time: 'Requested to follow you 1d',
      profilePic: 'https://i.pinimg.com/564x/0d/5e/7c/0d5e7ce17300a1b03293423e012f6810.jpg',
      type: 'request',
    },
    {
      id: 3,
      username: 'alicewonder',
      time: 'Requested to follow you 3d',
      profilePic: 'https://i.pinimg.com/736x/8b/37/e6/8b37e69c7023c8d7b51c65a9b6c026f4.jpg',
      type: 'request',
    },
    {
      id: 4,
      username: 'calyxdylanfjmt',
      time: 'Requested to follow you 6d',
      profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVRcS617Rrh12xEnIHaOJCRsynBqx9IEEmtQ&s',
      type: 'request',
    },
  ]);

  // State for the currently selected tab
  const [activeTab, setActiveTab] = useState('All');

  // Function to confirm follow request
  const confirmRequest = (id) => {
    setNotifications(prevNotifications =>
      prevNotifications.filter(notification => notification.id !== id)
    );
    console.log(`Follow request from user ID ${id} confirmed.`);
  };

  // Function to delete follow request
  const deleteRequest = (id) => {
    setNotifications(prevNotifications =>
      prevNotifications.filter(notification => notification.id !== id)
    );
    console.log(`Follow request from user ID ${id} deleted.`);
  };

  // Filter notifications based on the selected tab
  const filteredNotifications = notifications.filter(notification => {
    if (activeTab === 'All') return true; // Show all notifications
    if (activeTab === 'Requests') return notification.type === 'request'; // Show only requests
    // Assume 'reply' type exists; no replies in the current state
    if (activeTab === 'Replies') return notification.type === 'reply';
    return false; // Default case, show nothing
  });

  return (
    <ImageBackground 
      source={{ uri: 'https://i.pinimg.com/564x/32/20/75/3220750625ce5ee01f79b86ccaaf2e8c.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        {/* Header with Tabs */}
        <View style={styles.header}>
          {['All', 'Requests', 'Replies', 'Mentions'].map(tab => (
            <TouchableOpacity 
              key={tab} 
              style={styles.tab} 
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Notifications List */}
        <ScrollView>
          {activeTab === 'Replies' && filteredNotifications.length === 0 ? (
            <Text style={styles.noRepliesText}>No replies to show yet.</Text>
          ) : (
            filteredNotifications.map(notification => (
              <View key={notification.id} style={styles.notification}>
                <Image style={styles.profilePic} source={{ uri: notification.profilePic }} />
                <View style={styles.notificationContent}>
                  <Text style={styles.username}>{notification.username}</Text>
                  <Text style={styles.time}>{notification.time}</Text>
                  {notification.type === 'message' ? (
                    <Text style={styles.message}>{notification.message}</Text>
                  ) : (
                    <View style={styles.actionButtons}>
                      <TouchableOpacity style={styles.confirmButton} onPress={() => confirmRequest(notification.id)}>
                        <Text style={styles.buttonText}>Confirm</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.deleteButton} onPress={() => deleteRequest(notification.id)}>
                        <Text style={styles.buttonText}>X</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              </View>
            ))
          )}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Ensures the background image covers the screen
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent dark overlay for better contrast
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tab: {
    paddingVertical: 5,
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff', // White text for better contrast against background
  },
  activeTabText: {
    color: '#000', 
  },
  notification: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  notificationContent: {
    flex: 1,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff', // White text for better visibility
  },
  time: {
    fontSize: 12,
    color: '#bbb', // Lighter color for the timestamp
  },
  message: {
    marginTop: 5,
    fontSize: 14,
    color: '#fff', // White message text
  },
  actionButtons: {
    flexDirection: 'row',
    marginTop: 5,
  },
  confirmButton: {
    backgroundColor: '#800080', // Purple background for Confirm button
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: '#800080', // Purple background for X button
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff', // White text on action buttons
    fontWeight: 'bold',
    textAlign: 'center',
  },
  noRepliesText: {
    color: '#fff', // Color for the "No replies" message
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Notifications;
