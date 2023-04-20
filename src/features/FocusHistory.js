import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { colors, fontSizes, spaces } from '../utils';

export const FocusHistory = ({ history }) => {
  if (!history.length || !history) {
    return <Text style={styles.title}>We haven't focused on anything yet!</Text>;
  }

  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spaces.md,
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spaces.sm,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
  },
});
