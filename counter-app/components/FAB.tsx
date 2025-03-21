import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

interface FabProps {
  label: string;
  onPress: () => void;
}

export default function FAB({ label, onPress }: FabProps) {
  return (
    <Pressable>
      <Text style={styles.incrementButton} onPress={onPress}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  incrementButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
