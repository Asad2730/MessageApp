import React from 'react';
import { ImageBackground, View, Text, StyleSheet, Dimensions, Image,Pressable } from 'react-native';
import { Colors } from '../utils/colors';
import { AntDesign  } from '@expo/vector-icons'; 

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Home({navigation}) {
  return (
    <ImageBackground
      source={require('../assets/bg-img.jpeg')}
      style={styles.backgroundImage}
    >
      <Image
        source={require('../assets/mainImg.png')}
        style={styles.image}
      />
      <View style={styles.container}>
        <Text style={styles.title}>A new way to connect with your friends</Text>
        <Text style={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </Text>
        <View style={styles.centeredContent}>
          <Pressable style={styles.diamondButton} onPress={()=>navigation.navigate('main')}>
            <View style={styles.iconCenter}>
              <AntDesign name="right" size={28} color="black" />
            </View>  
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  image: {
    height: height * 0.60,
    width: width,
    resizeMode: 'cover',
    marginTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.txt_white,
    fontSize: 28,
    paddingLeft: 10,
  },
  description: {
    color: Colors.txt_grey,
    fontSize: 14,
    paddingTop: 10,
    paddingLeft: 10,
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  diamondButton: {
    backgroundColor: Colors.btn_color,
    width: width * 0.2, 
    height: width * 0.2, 
    transform: [{ rotate: '45deg' }],
  },
   iconCenter:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '300deg' }],
   }
});
