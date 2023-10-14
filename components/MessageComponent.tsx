//this is a template
// no em or rem in Native btw

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const MessageComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Past, Present, Future, Rock & Roll</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default MessageComponent;
