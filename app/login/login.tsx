import React from "react";
import { View, Text, ScrollView, ImageBackground } from "react-native";
import { Link } from "expo-router";

export default function Login() {
  return (
    <ImageBackground
      source={require("../../assets/images/bg-image/img4.jpg")}
      className="flex-1 justify-center"
    >
      <ScrollView className="flex-1 px-4 py-6">
        <Text className="text-4xl font-bold drop-shadow-lg text-primary-500 text-center mb-4">
          Available Workouts
        </Text>
        <View className="flex flex-wrap flex-row justify-center gap-4">
          <Text className="text-primary-500 text-xl font-semibold text-center">
            Login Page
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
