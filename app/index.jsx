import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image, ImageBackground } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';


export default function App() {
  const logoSize = { width: 500, height: 200 }; // Increased logo size

  // URL of the background image
  const backgroundImageUrl = 'https://i.pinimg.com/564x/32/20/75/3220750625ce5ee01f79b86ccaaf2e8c.jpg'; // Background image URL

  return (
    <ImageBackground
      source={{ uri: backgroundImageUrl }} // Using URL for background image
      style={{ flex: 1 }}
      resizeMode="cover" // Adjust this to your liking (e.g., "cover", "contain")
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <View style={{ width: '100%', alignItems: 'center', paddingHorizontal: 16 }}>
            <Image
              source={images.safespace}
              style={{ width: logoSize.width, height: logoSize.height, marginTop: 12, marginBottom: 50 }}
              resizeMode="contain"
            />
            <View style={{ marginTop: 5 }}>
              <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>
              ENVIRONMENT FOR USERS TO SHARE THEIR THOUGHTS
AND EMOTIONS. IT OFFERS A SAFE, ANONYMOUS
PLATFORM WHERE PEOPLE CAN EXPRESS THEMSELVES
FREELY.
              </Text>
            </View>
           

            <CustomButton
              title="Continue To Safespace"
              handlePress={() => router.push('/sign-in')}
              containerStyles={{ width: '90%', marginTop: 20, backgroundColor: '#DA70D6', }} // Set custom width here
            />


          </View>
        </ScrollView>
        <StatusBar backgroundColor="orange" style="light" />
      </SafeAreaView>
    </ImageBackground>
  );
}
