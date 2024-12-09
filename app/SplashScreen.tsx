import React from "react";
import { View, StyleSheet, Animated } from "react-native";

const SplashScreen = () => {
  const imageScale = new Animated.Value(0.1);
  Animated.parallel([
    Animated.timing(imageScale, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }),
  ]).start();

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../assets/images/splash.png")}
        style={[
          styles.image,
          {
            transform: [{ scale: imageScale }],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
