// Page.tsx
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
      <Image
          source={require('../assets/images/cardback.jpg')} // Replace with the actual path to your image
          style={styles.image}
        />
        <Text style={styles.title}>Past, Present, Future,<br></br>Rock & Roll.</Text>
        <Text style={styles.subtitle}>3 Card Draw.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  image: {
    width: 500, // Adjust the width and height as needed
    height: 500,
    marginLeft: '7%',
    marginBottom: 20, // Add some margin between the image and text
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});