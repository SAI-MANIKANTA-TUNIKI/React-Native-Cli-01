import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Welcom0 = () => {
  // List of images to cycle through
  const images = [
    require('../../src/assets/images/image1.png'),
    require('../../src/assets/images/image2.png'),
    require('../../src/assets/images/image3.png'),
    require('../../src/assets/images/iot1.jpg'),
    require('../../src/assets/images/iot2.jpg'),
    require('../../src/assets/images/iot3.jpg'),

  ];

  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Effect to change the image every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title1}>Welcome to Home App</Text>
      <View style={styles.imageContainer}>
        <Image
          source={images[currentImageIndex]} // Dynamically change the image
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
  title1: {
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

export default Welcom0;
