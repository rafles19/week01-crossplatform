import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function CenteredText() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Rafles Kristiyanto - 00000032818</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24
  },
});

export default CenteredText;
