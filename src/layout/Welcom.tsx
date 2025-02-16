import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';

const Welcom = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title1}>Wellcome to Home App</Text>
      <View style={styles.imageContainer}>
        <Image 
          source={require("../../src/assets/images/image1.png")} // Add your local image path here
          style={styles.image}
        />
      </View>
      
      {/* Text Section */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Power in Your Hands</Text>
        <Text style={styles.subtitle}>
          Experience the benefits of intelligent home management
        </Text>
      </View>

       {/* Button Section */}
         <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1B1B', // Dark background color
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    marginBottom: 50,
  },
  image: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
  },
  textContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  title1:{
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 40,
  },
  buttonText: {
    color: '#1B1B1B',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Welcom;